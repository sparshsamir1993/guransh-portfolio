import React from 'react';
import Header from '@/components/molecules/Header';
import Gallery from '@/components/cards/Gallery';
import Contact from '@/components/cards/Contact';
import Hero from '@/components/cards/Hero';
import About from '@/components/cards/About';
import FadeInSection from '@/components/cards/FadeInSection';
import Footer from '@/components/molecules/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-100">
      <Header />
      <Hero />
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <Gallery />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
      <Footer />
    </div>
  );
}
