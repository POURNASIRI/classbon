import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "./_components/header/heade";
import { Footer } from "./_components/footer/footer";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "700", "800", "900"],
});
const IranSans = localFont({
  src:[
    {
      path:'../../public/fonts/IRANSans/IRANSans_Light.ttf',
      weight:"100",
      style:"normal"
    },
    {
      path:'../../public/fonts/IRANSans/IRANSans_Medium.ttf',
      weight:"400",
      style:"normal"
    },
    {
      path:'../../public/fonts/IRANSans/IRANSans_Bold.ttf',
      weight:"600",
      style:"normal"
    },
  ],
  variable:"--font-IRSans"
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  dir="rtl" className={`dark ${figtree.variable} ${IranSans.variable}`} >
     <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
