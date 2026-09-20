import "./globals.css";
import "./themes.css";
import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import Header from "./components/header";
import ThemeSwitcher from "./components/theme-switcher";
import { DEFAULT_THEME, restoreThemeScript } from "./themes";
import Image from "next/image";
import backgroundImage from "../images/background.jpg";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const siteDescription =
  "Alfie Lamerton is an AI safety and governance researcher building Formation Research, working on AI-enabled power concentration.";

const isDevelopment = process.env.NODE_ENV === "development";

export const metadata: Metadata = {
  title: {
    default: "Alfie Lamerton",
    template: "%s | Alfie Lamerton",
  },
  description: siteDescription,
  openGraph: {
    title: "Alfie Lamerton",
    description: siteDescription,
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme={DEFAULT_THEME}
      className={ebGaramond.variable}
      suppressHydrationWarning
    >
      <body>
        {isDevelopment && (
          <script dangerouslySetInnerHTML={{ __html: restoreThemeScript }} />
        )}
        <div className="site-backdrop" aria-hidden="true">
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            placeholder="blur"
            priority
            className="object-cover"
          />
        </div>
        <div className="site-frame">
          <Header />
          {children}
        </div>
        {isDevelopment && <ThemeSwitcher />}
      </body>
    </html>
  );
}
