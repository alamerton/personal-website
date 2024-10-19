import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Your Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
