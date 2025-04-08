import React from "react";
export function Button({ children }) {
    return (
        <button className="px-6 py-2 border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition duration-300 font-medium tracking-wide">
            Send Message
        </button>
    )
}