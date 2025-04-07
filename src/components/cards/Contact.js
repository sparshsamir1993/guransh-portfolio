import { Button } from '@/components/atoms/Button';
export default function Contact() {
    return (
        <section className="p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Contact</h2>
            <form className="grid gap-4">
                <input type="text" placeholder="Your Name" className="border rounded-lg p-3" />
                <input type="email" placeholder="Your Email" className="border rounded-lg p-3" />
                <textarea placeholder="Your Message" rows="5" className="border rounded-lg p-3"></textarea>
                <Button className="w-full">Send Message</Button>
            </form>
        </section>
    )
}