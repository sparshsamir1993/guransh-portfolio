"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import guransh1 from "../../../public/Guransh-1.jpg";
import guransh2 from "../../../public/Guransh-2.jpg";
import guransh3 from "../../../public/Guransh-3.jpg";
import guransh4 from "../../../public/Guransh-4.jpg";
import guransh5 from "../../../public/Guransh-5.jpg";
import guransh6 from "../../../public/Guransh-6.jpg";
import guransh7 from "../../../public/2M6A2050 Guransh 14.jpg";
import guransh8 from "../../../public/2M6A2153 Guransh 16.jpg";

const images = [guransh1, guransh2, guransh3, guransh4, guransh5, guransh6, guransh7, guransh8];

export default function Gallery() {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (!selected) return;
        const handleKey = (e) => { if (e.key === 'Escape') setSelected(null); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [selected]);

    return (
        <section id="gallery" className="py-16 px-8 bg-[#0d0d0d] scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-8 text-center text-white">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {images.map((image, i) => (
                    <div
                        key={i}
                        className="overflow-hidden rounded-xl cursor-pointer group"
                        onClick={() => setSelected(image)}
                    >
                        <Image
                            src={image}
                            alt={`Gallery photo ${i + 1}`}
                            className="w-full rounded-xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            {selected && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelected(null)}
                >
                    <button
                        className="absolute top-4 right-6 text-white text-4xl leading-none hover:text-amber-400 transition-colors"
                        onClick={() => setSelected(null)}
                    >
                        &times;
                    </button>
                    <div
                        className="relative max-w-4xl max-h-[90vh] w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selected}
                            alt="Full size photo"
                            className="rounded-xl object-contain max-h-[90vh] w-full"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
