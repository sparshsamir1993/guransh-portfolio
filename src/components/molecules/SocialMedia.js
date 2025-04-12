"use client";
import React from 'react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SocialMedia() {
    return (
        <div>
            <div className="mt-8 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-center">Follow me</h2>
                <div className="flex justify-center gap-6">
                    <a
                        href="https://www.instagram.com/shadezofawoman/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-pink-500 transition duration-300"
                    >
                        <FaInstagram size={48} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/dr-guransh-brar-72b241a7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-blue-500 transition duration-300"
                    >
                        <FaLinkedin size={48} />
                    </a>
                </div>
            </div>
        </div>
    );
}