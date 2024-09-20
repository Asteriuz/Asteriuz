import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";
import "@/styles/misc.css";
import Script from "next/script";
import Header from "@/components/Header/Header";
import localFont from "next/font/local";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/components/Home/Utils/BackToTop";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "700"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
  weight: "400",
});

const gotham = localFont({
  src: [
    { path: "../../public/fonts/Gotham-Font/Gotham-Black.otf", weight: "700" },
    { path: "../../public/fonts/Gotham-Font/GothamBook.ttf", weight: "400" },
  ],
  display: "swap",
  variable: "--font-gotham",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ferpancomerciodeferro.com.br"),
  title: "Ferpan",
  description:
    "Artefatos de ferro de alta qualidade: grades, portões, móveis e mais. Descubra a durabilidade e o design único da Ferpan",
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const DEV = false;

  return (
    <html lang="pt-br">
      <body
        data-theme="light"
        className={`${poppins.variable} ${gotham.variable} ${bebas.variable} vsc-initialized flex min-h-screen min-w-full flex-col justify-between bg-white font-body text-semiblack`}
      >
        <Header />
        {children}
        <Footer />
        <BackToTop />
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
