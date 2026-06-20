import React from 'react';
import Image from 'next/image';
import guranshHero from "../../../public/guransh-hero.jpg";
import { Button } from '@/components/atoms/Button';

export default function Hero() {
    return (
        <section className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center text-center px-8 pt-24 pb-16">
            <Image
                src={guranshHero}
                alt="Guransh's photo"
                className="mx-auto rounded-2xl w-full max-w-md shadow-2xl"
            />
            <div className="mt-8 border-t border-amber-400 pt-6 max-w-2xl mx-auto">
                <p className="text-xl text-gray-200 leading-relaxed">
                    Captivating audiences with every performance. Actress with a passion for storytelling and a drive to bring characters to life.
                </p>
            </div>
            <a href="#contact" className="mt-8">
                <Button>Get in Touch</Button>
            </a>
        </section>
    );
}