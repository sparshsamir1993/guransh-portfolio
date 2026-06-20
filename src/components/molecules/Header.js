"use client";
import React, { useEffect, useState } from 'react';
import { Notable } from "next/font/google";
import Image from 'next/image';
import Logo from "../../../public/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const notableFont = Notable({
    subsets: ["latin"],
    variable: "--font-notable",
    weight: "400",
});

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full bg-[#0d0d0d] border-b border-white/10 z-[99] transition-all duration-300 ${notableFont.className}`}>
            <div className="flex items-center justify-between px-6 py-2">
                <div className="flex items-center gap-4">
                    <Image src={Logo} alt="Logo" className="w-16 transition-all duration-300 invert" />
                    <h1 className={`text-white text-2xl md:text-4xl transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
                        Guransh Brar
                    </h1>
                </div>

                {/* Desktop nav */}
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm tracking-widest uppercase"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-gray-300 hover:text-amber-400 transition-colors"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
            </div>

            {/* Mobile dropdown */}
            <nav className={`md:hidden flex flex-col bg-[#0d0d0d] border-white/10 px-6 overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-48 opacity-100 border-t pb-4' : 'max-h-0 opacity-0'}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm tracking-widest uppercase border-b border-white/5"
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
        </header>
    );
}
