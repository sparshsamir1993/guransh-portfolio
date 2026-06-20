import React from 'react';
import Image from 'next/image';
import guranshHero from "../../../public/guransh-hero.jpg";
import { Button } from '@/components/atoms/Button';

export default function Hero() {
    return (
        <section className="min-h-screen bg-[#0d0d0d] flex flex-col md:flex-row">
            {/* Full-bleed image panel */}
            <div className="relative min-h-[60vh] md:min-h-screen md:w-3/5">
                <Image
                    src={guranshHero}
                    alt="Guransh Brar"
                    fill
                    priority
                    className="object-cover object-top"
                />
                {/* Dark gradient at top so fixed header is always readable */}
                <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/70 to-transparent" />
                {/* Blend edge into dark bg on desktop */}
                <div className="hidden md:block absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0d0d0d] to-transparent" />
                {/* Blend bottom into dark bg on mobile */}
                <div className="md:hidden absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
            </div>

            {/* Text panel */}
            <div className="md:w-2/5 flex flex-col justify-center px-10 md:px-14 py-16 md:py-0">
                <span className="text-[11px] tracking-[0.35em] text-amber-400 uppercase mb-6">
                    Actor · Toronto
                </span>
                <h1
                    className="text-7xl md:text-8xl font-light text-white leading-none mb-8"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                    Guransh<br />Brar
                </h1>
                <p className="text-gray-400 leading-relaxed mb-10 max-w-xs text-sm">
                    Captivating audiences with every performance — from indie film to the stage.
                </p>
                <div>
                    <a href="#contact">
                        <Button>Get in Touch</Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
