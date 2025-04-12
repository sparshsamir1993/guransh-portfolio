import React from "react";
import { Card, CardContent } from '@/components/atoms/Card';
import Image from 'next/image';
import FadeInSection from "@/components/cards/FadeInSection";
import guransh1 from "../../../public/Guransh-1.jpg";
import guransh2 from "../../../public/Guransh-2.jpg";
import guransh3 from "../../../public/Guransh-3.jpg";
import guransh4 from "../../../public/Guransh-4.jpg";
import guransh5 from "../../../public/Guransh-5.jpg";
import guransh6 from "../../../public/Guransh-6.jpg";


export default function Gallery() {
    return (
        <section className="p-8 bg-gray-100">
            <h2 className="text-2xl font-semibold mb-6 text-center">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[guransh1, guransh2, guransh3, guransh4, guransh5, guransh6].map((image, i) => (
                    <Card key={i}>
                        <CardContent className="p-0">
                            <FadeInSection>
                                <Image src={image} alt={`Work ${i}`} className="rounded-xl w-full" />
                            </FadeInSection>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}