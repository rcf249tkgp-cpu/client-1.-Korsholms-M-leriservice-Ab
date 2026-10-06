"use client";

import { MotionConfig } from "framer-motion";
import { LangProvider } from "@/lib/i18n";
import { DemoBanner } from "./DemoBanner";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { TrustBar } from "./TrustBar";
import { Services } from "./Services";
import { Churches } from "./Churches";
import { PaintAdvice } from "./PaintAdvice";
import { ImageBand } from "./ImageBand";
import { Gallery } from "./Gallery";
import { About } from "./About";
import { QuoteForm } from "./QuoteForm";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function Site() {
  return (
    <LangProvider>
      <MotionConfig reducedMotion="user">
        <DemoBanner />
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <Services />
          <Churches />
          <ImageBand />
          <PaintAdvice />
          <Gallery />
          <About />
          <QuoteForm />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </LangProvider>
  );
}
