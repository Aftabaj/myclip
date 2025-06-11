"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HomeBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative w-full h-auto md:min-h-screen">
            {/* <img src="/banner.png" alt="banner" className="w-full h-full object-cover object-top" /> */}
            <Image
                src="/banner.png"
                alt="banner"
                objectFit="cover"
                objectPosition="center"
                width={1920}
                height={641}
            />
        </section>
    );
};

export default HomeBanner;
