import { Noto_Sans } from "next/font/google";
import "./globals.css";
import GlobalWrapper from "@/components/core/Wrappers/GlobalWrapper";
import { baseThemeingEngine } from "@/themeingEngine";
import NextTopLoader from 'nextjs-toploader';

const notosans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Somesh Kumar",
  description: "Somesh's Personal Website",
};

export default function RootLayout({ children }) {
  const baseData = baseThemeingEngine();
  return (
    <html lang="en">
      <body className={notosans.className}>
      <NextTopLoader />
        <GlobalWrapper
          backgroundMain={baseData.backgroundMain}
          colorMain={baseData.colorMain}
          backgroundWallpaper={baseData.backgroundWallpaper}
          filterWallpaper={baseData.filterWallpaper}
          linkBorderBottom={baseData.linkBorderBottom}
          linkBackgroundColor={baseData.linkBackgroundColor}
        >
          {children}
        </GlobalWrapper>
      </body>
    </html>
  );
}
