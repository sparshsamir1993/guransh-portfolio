import React from 'react';
export default function Hero() {
    return (
        <section className="p-8 text-center">
            <img
                src="/guransh-hero.jpg"
                alt="Jane Doe Hero Shot"
                className="mx-auto rounded-2xl shadow-lg max-w-md"
            />
            <p className="mt-6 text-lg max-w-2xl mx-auto">
                Captivating audiences with every performance. Actress with a passion for storytelling and a drive to bring characters to life.
            </p>
        </section>
    );
}