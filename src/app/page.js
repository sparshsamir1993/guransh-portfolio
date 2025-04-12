import React from 'react';
import Header from '@/components/molecules/Header';
import Gallery from '@/components/cards/Gallery';
import Contact from '@/components/cards/Contact';
import Hero from '@/components/cards/Hero';
import About from '@/components/cards/About';
import FadeInSection from '@/components/cards/FadeInSection';
import SocialMedia from '@/components/molecules/SocialMedia';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <FadeInSection>
        <About />
      </FadeInSection>

      <FadeInSection>
        <Gallery />
      </FadeInSection>
      <FadeInSection>
        <SocialMedia />
      </FadeInSection>

      <FadeInSection>
        <Contact />
      </FadeInSection>
    </div>
  );
}
