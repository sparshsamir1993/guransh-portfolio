import React from 'react';
import Image from 'next/image';
export default function Hero() {
    return (
        <section className="p-8 pt-[96px] text-center">
            <Image
                src="/guransh-hero.jpg"
                alt="Guransh's photo"
                className="mx-auto rounded-2xl"
                width={400}
                height={530}
            />
            <p className="mt-6 text-lg max-w-2xl mx-auto">
                Captivating audiences with every performance. Actress with a passion for storytelling and a drive to bring characters to life.
            </p>
        </section>
    );
}