import { createUser, getUserByEmail } from "@/controllers/userControllers";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import bcrypt from "bcrypt";
import { connectToDatabase } from "./connectDB";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }

        const savedUser = await getUserByEmail(email);

        if (!savedUser) {
          return null;
        }

        const passwordMatched = await bcrypt.compare(
          password,
          savedUser.password
        );
        if (!passwordMatched) {
          return null;
        }
        return savedUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      // TODO: have to set up in facebook
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        token.role = user.role;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.image = token.image;
      return session;
    },
    async signIn({ user, account }) {
      if (account.provider === "google") {
        try {
          const savedUser = await getUserByEmail(user.email);

          if (!savedUser) {
            const newUser = {
              name: user.name,
              image: user.image,
              email: user.email,
              role: "user",
            };
            const { db } = await connectToDatabase();
            await db.collection("users").insertOne(newUser);
            return user;
          } else {
            return user;
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        return user;
      }
    },
  },
};
