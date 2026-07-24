import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface TradingLayoutProps {
  children: ReactNode;
}

export default function TradingLayout({
  children,
}: TradingLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <main>
        {children}
      </main>

      <Footer />

    </div>
  );
}