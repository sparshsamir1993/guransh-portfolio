import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 px-8 bg-[#0d0d0d] w-full scroll-mt-20">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-6 mb-12">
                    <span className="text-[11px] tracking-[0.35em] text-gray-500 uppercase whitespace-nowrap">About</span>
                    <div className="flex-1 h-px bg-white/10" />
                </div>
                <p
                    className="text-3xl md:text-4xl font-light text-white leading-relaxed mb-8"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                    Toronto-based actress with a deep love for storytelling across stage, screen, and commercial work.
                </p>
                <p className="text-gray-400 leading-relaxed text-sm">
                    With formal training in drama, I've had the opportunity to work on independent films, local theatre productions, and commercial projects — always seeking roles that demand presence and range.
                </p>
            </div>
        </section>
    );
}

export default About;
