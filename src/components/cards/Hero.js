import React from 'react';
import Image from 'next/image';
import guranshHero from "../../../public/guransh-hero.jpg";
export default function Hero() {
    return (
        <section className="p-8 pt-[96px] text-center">
            <Image
                src={guranshHero}
                alt="Guransh's photo"
                className="mx-auto rounded-2xl w-md"
            />
            <p className="mt-6 text-lg max-w-2xl mx-auto">
                Captivating audiences with every performance. Actress with a passion for storytelling and a drive to bring characters to life.
            </p>
        </section>
    );
}