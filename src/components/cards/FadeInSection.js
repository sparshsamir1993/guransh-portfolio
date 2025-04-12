'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function FadeInSection({ children, className = '' }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => setIsVisible(entry.isIntersecting)); // 3️⃣ If it's visible, update state
            },
            { threshold: 0.1 } // 4️⃣ Trigger when 10% of element is visible
        );

        const refCurrent = domRef.current;
        if (refCurrent) observer.observe(refCurrent); // 5️⃣ Start observing

        return () => {
            if (refCurrent) observer.unobserve(refCurrent); // 6️⃣ Clean up
        };
    }, []);
    return (
        <div
            className={`
                transition-opacity transform duration-1500 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                ${className}
            `}
            ref={domRef}
        >
            {children}
        </div>
    );
}