"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import myclipLogo from "@/public/logo.svg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gradient-to-b from-[#433185] to-[#100B1F] text-white fixed w-full z-10">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-white"
                        >
                            <Image
                                src={myclipLogo}
                                alt="MyClip Logo"
                                width={55}
                                height={41}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation - Centered */}
                    <nav className="hidden md:flex space-x-8 text-[16px]">
                        <Link
                            href="/what-is-myclip"
                            className="text-white hover:text-[#F7B512] transition duration-300"
                        >
                            What is MyClip?
                        </Link>
                        <Link
                            href="/our-purpose"
                            className="text-white hover:text-[#F7B512] transition duration-300"
                        >
                            Our Purpose
                        </Link>
                        <Link
                            href="/products"
                            className="text-white hover:text-[#F7B512] transition duration-300"
                        >
                            Products
                        </Link>
                        <Link
                            href="/contact"
                            className="text-white hover:text-[#F7B512] transition duration-300"
                        >
                            Contact Us
                        </Link>
                    </nav>

                    {/* Meril text on right */}
                    <div className="hidden md:block text-xl font-bold">
                        <Image
                            src="/website View/Meril New Logo White.png"
                            alt="MyClip Logo"
                            width={64}
                            height={36}
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex items-center"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    isMenuOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden pt-4 pb-2">
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="/what-is-myclip"
                                className="text-white hover:text-yellow-300 transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                What is MyClip?
                            </Link>
                            <Link
                                href="/our-purpose"
                                className="text-white hover:text-yellow-300 transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Our Purpose
                            </Link>
                            <Link
                                href="/products"
                                className="text-white hover:text-yellow-300 transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Products
                            </Link>
                            <Link
                                href="/contact"
                                className="text-white hover:text-yellow-300 transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                            <div className="text-xl font-bold pt-2">Meril</div>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
