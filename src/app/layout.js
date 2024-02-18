import { Inter } from "next/font/google";
import "./globals.css";
import "@/css/custom.css";
import Heads from "@/components/header/Heads";
import Footer from "@/components/footer/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fund10X",
  description:
    "startup dream to life by matching your startup with the right investors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Heads />
        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
