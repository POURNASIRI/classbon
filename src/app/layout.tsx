import "./globals.css";
import{Figtree} from 'next/font/google'
import localFont from 'next/font/local'
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import QueryProvider from "@/providers/react-query-provider";

const figtree = Figtree({
  display:"swap",
  subsets:["latin"],
  weight:["300","400","500","600","700","800","900"],
  variable:"--font-figtree"
})

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
    <html  dir="rtl" className={` dark ${figtree.variable} ${IranSans.variable}`}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] font-bold uppercase
       dark:bg-base-100 dark:text-base-content ">
        <QueryProvider>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
        </QueryProvider>
      </body>
    </html>
  );
}
