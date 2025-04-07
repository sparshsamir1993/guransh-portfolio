import React from "react";
import { Card, CardContent } from '@/components/atoms/Card';

export default function Gallery() {
    return (
        <section className="p-8 bg-gray-100">
            <h2 className="text-2xl font-semibold mb-6 text-center">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i}>
                        <CardContent className="p-0">
                            <img src={`/Guransh-${i}.jpg`} alt={`Work ${i}`} className="rounded-xl w-full" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}