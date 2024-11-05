import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/styles/misc.css";
import Script from "next/script";
import localFont from "next/font/local";
import Header from "@/components/Header/Header";
import BackToTop from "@/components/utils/BackToTop";
import NavButton from "@/components/utils/NavButton";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const gotham = localFont({
  src: [
    { path: "../../public/fonts/Gotham-Font/Gotham-Black.otf", weight: "700" },
    { path: "../../public/fonts/Gotham-Font/GothamBold.ttf", weight: "600" },
    { path: "../../public/fonts/Gotham-Font/GothamMedium.ttf", weight: "500" },
    { path: "../../public/fonts/Gotham-Font/GothamBook.ttf", weight: "400" },
  ],
  display: "swap",
  variable: "--font-gotham",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asteriuz.com.br"),
  title: "Asteriuz",
  description:
    "Portfolio de um desenvolvedor web, com foco em front-end e design.",
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const DEV = process.env.NODE_ENV !== "production";

  return (
  <html lang="pt-br">
      <body
        data-theme="light"
        className={`${poppins.variable} ${gotham.variable}  vsc-initialized flex min-h-screen min-w-full justify-between bg-white font-body text-semiblack`}
      >
        <NavButton />
        <Header />
        <BackToTop />
        {children}
      </body>
      {(DEV && (
        <>
          <Script src="js/nav.js"></Script>
          <Script src="js/util.js" defer></Script>
        </>
      )) || (
        <>
          <Script src="js/nav.js"></Script>
          <Script src="js/util.js"></Script>
        </>
      )}
    </html>
  );
}
