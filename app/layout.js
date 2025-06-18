import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";


const figtree = Figtree({
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
  preload: true,
});

const mogan = localFont({
  src: [
    { path: "../public/fonts/Mogan-normal.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-mogan",
  display: "swap",
  fallback: ["sans-serif"],
  preload: true,
});

const betterlett = localFont({
  src: [
    { path: "../public/fonts/Betterlett-normal.ttf", weight: "400", style: "normal" }, 
   ],
  variable: "--font-betterlett",
  display: "swap",
  fallback: ["sans-serif"],
  preload: true,
});

export const metadata = {
  title: "The Nail Spa | Premium Nail & Beauty Care in USA",
  description: "Experience luxury and relaxation at The Nail Spa — your go-to destination for professional nail art, manicures, pedicures, and skin care treatments. Book your appointment today and treat yourself to the pampering you deserve!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${mogan.variable} ${betterlett.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
