// src/components/GoogleAnalytics.js
'use client';
import { useEffect } from 'react';

export default function GoogleAnalytics() {
    useEffect(() => {
        // Inject the script tag
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-RRLLCP569G';
        script.async = true;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-RRLLCP569G');
    }, []);

    return null;
}