import React from "react";
export function Button({ children }) {
    return (
        <button className="px-6 py-2 border border-gray-800 text-white rounded-full bg-gray-800 hover:bg-white hover:text-black transition duration-300 font-medium tracking-wide">
            {children}
        </button>
    )
}