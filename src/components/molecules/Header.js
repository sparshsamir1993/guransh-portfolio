import React from 'react';
import { Notable } from "next/font/google";

const notableFont = Notable({
    subsets: ["latin"],
    variable: "--font-notable",
    weight: "400",
});

export default function Header() {
    return (
        <header className={`text-black p-6 text-center text-6xl shadow-md ${notableFont.className}`} >
            <h1>Guransh Brar</h1>
        </header>
    );
};