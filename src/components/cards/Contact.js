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
                'service_3dzmdyq', // Replace with your EmailJS service ID
                'template_8coukkp', // Replace with your EmailJS template ID
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                'Qge5BWRfzpfJOZ8IQ' // Replace with your EmailJS public key
            )
            .then(
                () => {
                    setIsSent(true);
                    setFormData({ name: '', email: '', message: '' }); // Reset form
                },
                (error) => {
                    console.error('Failed to send email:', error);
                }
            );
    };
    return (
        <section className="p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Contact</h2>
            <form className="grid gap-4" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" className="border rounded-lg p-3" value={formData.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Your Email" className="border rounded-lg p-3" value={formData.email} onChange={handleChange} />
                <textarea placeholder="Your Message" name="message" rows="5" className="border rounded-lg p-3" value={formData.message} onChange={handleChange}></textarea>
                <Button className="w-full">Send Message</Button>
            </form>
            {isSent && <p className="text-green-500 text-center mt-4">Message sent successfully!</p>}
        </section>
    )
}