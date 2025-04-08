"use client";
import React, { useEffect, useState } from 'react';
import { Notable } from "next/font/google";
import Image from 'next/image';

const notableFont = Notable({
    subsets: ["latin"],
    variable: "--font-notable",
    weight: "400",
});

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header
            className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 ${notableFont.className}`}
        >
            <div
                className={`flex items-center transition-all duration-300 ${isScrolled ? 'justify-center' : ''}`}
            >
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    className={`transition-all duration-300`}
                />
                <h1
                    className={`text-black text-center text-3xl md:text-6xl transition-all duration-300 transform ${isScrolled
                        ? 'hidden'
                        : 'block flex-grow'
                        }`}
                >Guransh Brar</h1>
            </div>
        </header>
    );
};