import React from 'react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-8 px-8">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm">&copy; 2025 Guransh Brar. All rights reserved.</p>
                <div className="flex gap-5">
                    <a
                        href="https://www.instagram.com/shadezofawoman/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition duration-300"
                    >
                        <FaInstagram size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/dr-guransh-brar-72b241a7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition duration-300"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
