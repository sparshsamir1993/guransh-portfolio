import React from "react";

export function Button({ children, className = '' }) {
    return (
        <button className={`px-8 py-3 border border-amber-400/70 text-amber-400 text-xs tracking-[0.2em] uppercase hover:bg-amber-400 hover:text-black transition-all duration-300 font-medium ${className}`}>
            {children}
        </button>
    );
}
