import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalWrapper from "@/components/core/Wrappers/GlobalWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Somesh Kumar - Personal Website",
  description: "Welcome to my personal website where I showcase my work and projects.",
};

const styling = {
  tailwind: {
    main: [],
    wallpaper: [],
    container: [],
  },
  vanilla: {
    main: {},
    wallpaper: {},
    container: {},
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalWrapper styling={styling}>{children}</GlobalWrapper>
      </body>
    </html>
  );
}
