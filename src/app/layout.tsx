import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/header";
import { Merriweather } from "next/font/google";
import Image from "next/image";
import backgroundImage from "../images/background.jpg";

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
        <div
          style={{
            position: "fixed",
            height: "100vh",
            width: "100vw",
            zIndex: -1,
          }}
        >
          <Image
            src={backgroundImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
