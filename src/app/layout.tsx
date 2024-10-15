import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: 'normal',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "UPit",
  description: "O melhor lugar para diagnosticar o seu carro!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
