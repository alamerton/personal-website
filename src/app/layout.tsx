import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/header";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Alfie Lamerton",
  description: "Welcome to me!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={merriweather.variable}>
      <body className={merriweather.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
