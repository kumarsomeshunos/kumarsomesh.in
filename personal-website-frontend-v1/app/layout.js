import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import GlobalWrapper from "@/components/core/Wrappers/GlobalWrapper";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "kumarsomesh.in",
  description: "Somesh Kumar's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased`}>
        <GlobalWrapper>{children}</GlobalWrapper>
      </body>
    </html>
  );
}
