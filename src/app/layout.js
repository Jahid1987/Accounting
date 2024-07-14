import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Accounting",
  description: "Accounting Smart and Interactive Book Book for HSC",
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
