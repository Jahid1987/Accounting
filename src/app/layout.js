import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "About Car Doctor Pro",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="mytheme" lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Nav />
        <main className="min-h-[calc(100vh-284px)] px-2 container mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
