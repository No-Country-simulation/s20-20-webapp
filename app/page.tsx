import React from "react";
import "../style/landing.css";

import Hero from "../components/Hero";
import VirtualWalletSection from "../components/VirtualWalletSection";
import CryptoSection from "../components/CryptoSection";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Landing() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <VirtualWalletSection />
        <CryptoSection />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
