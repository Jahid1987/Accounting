import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AuthProvider from "@/providers/authProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Company Name",
  description: "About Company Name",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="mytheme" lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <AuthProvider>
          <Nav />
          <main className="min-h-[calc(100vh-276px)] my-5 px-2 container mx-auto">
            {children}
          </main>
          <Footer />
          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  );
}
