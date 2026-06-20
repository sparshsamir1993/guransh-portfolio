"use client";
import { Button } from '@/components/atoms/Button';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .send(
                'service_3dzmdyq',
                'template_8coukkp',
                { name: formData.name, email: formData.email, message: formData.message },
                'Qge5BWRfzpfJOZ8IQ'
            )
            .then(
                () => {
                    setIsSent(true);
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => { console.error('Failed to send email:', error); }
            );
    };

    return (
        <section id="contact" className="py-24 px-8 bg-[#111] w-full scroll-mt-20">
            <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-6 mb-12">
                    <span className="text-[11px] tracking-[0.35em] text-gray-500 uppercase whitespace-nowrap">Contact</span>
                    <div className="flex-1 h-px bg-white/10" />
                </div>
                <p
                    className="text-3xl md:text-4xl font-light text-white mb-10"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                    Let's work together.
                </p>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="border-b border-white/15 bg-transparent text-white placeholder-gray-600 py-3 text-sm focus:outline-none focus:border-amber-400/60 transition-colors"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="border-b border-white/15 bg-transparent text-white placeholder-gray-600 py-3 text-sm focus:outline-none focus:border-amber-400/60 transition-colors"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <textarea
                        placeholder="Your Message"
                        name="message"
                        rows="5"
                        className="border-b border-white/15 bg-transparent text-white placeholder-gray-600 py-3 text-sm focus:outline-none focus:border-amber-400/60 transition-colors resize-none"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <div className="mt-4">
                        <Button>Send Message</Button>
                    </div>
                </form>
                {isSent && <p className="text-amber-400 mt-6 text-sm tracking-wide">Message sent.</p>}
            </div>
        </section>
    );
}
