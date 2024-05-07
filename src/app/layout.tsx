import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";

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
    <html  dir="rtl" className={`${figtree.variable} ${IranSans.variable}`} >
          <body className="flex flex-col min-h-screen font-bold uppercase">
        <header className="bg-gray-200 flex items-center justify-center text-3xl h-20">
          دوره معماری ری اکت
        </header>
        <div className="flex-1 flex  justify-center items-center">
          {children}
        </div>
        <footer className="bg-gray-200 flex items-center justify-center text-3xl h-20">
          FOOTER
        </footer>
      </body>
    </html>
  );
}
