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
        <section id="gallery" className="py-24 px-4 md:px-8 bg-[#0d0d0d] scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-6 mb-12">
                    <span className="text-[11px] tracking-[0.35em] text-gray-500 uppercase whitespace-nowrap">Gallery</span>
                    <div className="flex-1 h-px bg-white/10" />
                </div>

                <div
                    className="grid grid-cols-2 md:grid-cols-3 gap-2"
                    style={{ gridAutoRows: '240px' }}
                >
                    {images.map((image, i) => (
                        <div
                            key={i}
                            className={`relative overflow-hidden cursor-pointer group ${i === 0 ? 'row-span-2' : ''}`}
                            onClick={() => setSelected(image)}
                        >
                            <Image
                                src={image}
                                alt={`Gallery photo ${i + 1}`}
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />
                        </div>
                    ))}
                </div>
            </div>

            {selected && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelected(null)}
                >
                    <button
                        className="absolute top-6 right-8 text-gray-500 text-3xl leading-none hover:text-white transition-colors"
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
                            className="object-contain max-h-[90vh] w-full"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
