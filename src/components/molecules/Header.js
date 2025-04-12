"use client";
import React, { useEffect, useState } from 'react';
import { Notable } from "next/font/google";
import Image from 'next/image';
import Logo from "../../../public/logo.png";

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
            className={`fixed top-0 left-0 w-full bg-white shadow-md z-[99] transition-all duration-300 ${notableFont.className}`}
        >
            <div
                className={`flex items-center transition-all duration-300 ${isScrolled ? 'justify-center' : ''}`}
            >
                <Image
                    src={Logo}
                    alt="Logo"
                    className={`transition-all duration-300 w-20`}
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