import React from "react";
import "../style/landing.css";

import Hero from "./Hero";
import VirtualWalletSection from "./VirtualWalletSection";
import CryptoSection from "./CryptoSection";
import Reviews from "./Reviews";
import Footer from "./Footer";

export default function Landing() {
  return (
    <main>
   
      <Hero />
      <VirtualWalletSection />
      <CryptoSection />
      <Reviews />
      <Footer />
    </main>
  );
}

// <VirtualWalletSection />
