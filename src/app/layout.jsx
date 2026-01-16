import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QuickSell",
  description: "Buy, Sell & Discover Products Easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header></Header>
        <main className="px-4 py-8">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
