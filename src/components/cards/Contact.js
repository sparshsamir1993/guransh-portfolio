"use client";
import { Button } from '@/components/atoms/Button';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
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
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                'Qge5BWRfzpfJOZ8IQ'
            )
            .then(
                () => {
                    setIsSent(true);
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    console.error('Failed to send email:', error);
                }
            );
    };
    return (
        <section id="contact" className="py-16 px-8 bg-[#111] w-full scroll-mt-20">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-8 text-center text-white">Contact</h2>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="border border-white/20 rounded-lg p-3 bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:border-amber-400"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="border border-white/20 rounded-lg p-3 bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:border-amber-400"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <textarea
                        placeholder="Your Message"
                        name="message"
                        rows="5"
                        className="border border-white/20 rounded-lg p-3 bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:border-amber-400"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <Button>Send Message</Button>
                </form>
                {isSent && <p className="text-amber-400 text-center mt-4">Message sent successfully!</p>}
            </div>
        </section>
    )
}