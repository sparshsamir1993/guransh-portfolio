import React from 'react';
import Header from '@/components/molecules/Header';
import Gallery from '@/components/cards/Gallery';
import Contact from '@/components/cards/Contact';
import Hero from '@/components/cards/Hero';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I am an aspiring actress based in Toronto with experience in both stage and screen. With formal training in drama and a deep love for the craft, I’ve had the opportunity to work on independent films, local theatre productions, and commercial projects.
        </p>
      </section>

      <Gallery />

      <Contact />

    </div>
  );
}
