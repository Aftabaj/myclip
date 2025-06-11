"use client";

import Link from "next/link";
import Image from "next/image";
import myclipLogo from "@/public/mycliplogo.png";
const Footer = () => {
    return (
        <footer className="bg-[#433185] text-white">
            <div className="max-w-[1300px] mx-auto px-4 py-12 flex flex-col items-center">
                {/* Logo and Tagline */}{" "}
                <Image
                    className="mt-6"
                    src={myclipLogo}
                    alt="MyClip Logo"
                    width={250}
                    height={105}
                />
                {/* Navigation Links */}
                <nav className="my-10">
                    <ul className="flex flex-wrap justify-center space-x-8">
                        <li>
                            <a
                                href="#home"
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                What is MyClip?
                            </a>
                        </li>
                        <li>
                            <a
                                href="#products"
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Products
                            </a>
                        </li>
                        <li>
                            <a
                                href="#our-purpose"
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Our Purpose
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact-us"
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4 mb-10">
                    <a
                        href="#"
                        className="bg-[#F7B512] p-1 rounded-md text-white hover:opacity-80 transition duration-300"
                        aria-label="Facebook"
                    >
                        <svg
                            width="50"
                            height="51"
                            viewBox="0 0 50 51"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                y="0.613281"
                                width="50"
                                height="50"
                                rx="4"
                                fill="#F7B512"
                            />
                            <path
                                d="M22.014 19.4783V22.2263H20V25.5863H22.014V35.5723H26.148V25.5873H28.923C28.923 25.5873 29.183 23.9763 29.309 22.2143H26.165V19.9163C26.165 19.5733 26.615 19.1113 27.061 19.1113H29.315V15.6133H26.251C21.911 15.6133 22.014 18.9763 22.014 19.4783Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="bg-[#F7B512] p-1 rounded-md text-white hover:opacity-80 transition duration-300"
                        aria-label="Instagram"
                    >
                        <svg
                            width="50"
                            height="51"
                            viewBox="0 0 50 51"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                y="0.613281"
                                width="50"
                                height="50"
                                rx="4"
                                fill="#F7B512"
                            />
                            <path
                                d="M29 15.6133C30.3261 15.6133 31.5979 16.1401 32.5355 17.0777C33.4732 18.0154 34 19.2872 34 20.6133V28.6133C34 29.9394 33.4732 31.2111 32.5355 32.1488C31.5979 33.0865 30.3261 33.6133 29 33.6133H21C19.6739 33.6133 18.4021 33.0865 17.4645 32.1488C16.5268 31.2111 16 29.9394 16 28.6133V20.6133C16 19.2872 16.5268 18.0154 17.4645 17.0777C18.4021 16.1401 19.6739 15.6133 21 15.6133H29ZM25 20.6133C23.9391 20.6133 22.9217 21.0347 22.1716 21.7849C21.4214 22.535 21 23.5524 21 24.6133C21 25.6741 21.4214 26.6916 22.1716 27.4417C22.9217 28.1919 23.9391 28.6133 25 28.6133C26.0609 28.6133 27.0783 28.1919 27.8284 27.4417C28.5786 26.6916 29 25.6741 29 24.6133C29 23.5524 28.5786 22.535 27.8284 21.7849C27.0783 21.0347 26.0609 20.6133 25 20.6133ZM25 22.6133C25.5304 22.6133 26.0391 22.824 26.4142 23.1991C26.7893 23.5741 27 24.0828 27 24.6133C27 25.1437 26.7893 25.6524 26.4142 26.0275C26.0391 26.4026 25.5304 26.6133 25 26.6133C24.4696 26.6133 23.9609 26.4026 23.5858 26.0275C23.2107 25.6524 23 25.1437 23 24.6133C23 24.0828 23.2107 23.5741 23.5858 23.1991C23.9609 22.824 24.4696 22.6133 25 22.6133ZM29.5 19.1133C29.2348 19.1133 28.9804 19.2186 28.7929 19.4062C28.6054 19.5937 28.5 19.8481 28.5 20.1133C28.5 20.3785 28.6054 20.6329 28.7929 20.8204C28.9804 21.0079 29.2348 21.1133 29.5 21.1133C29.7652 21.1133 30.0196 21.0079 30.2071 20.8204C30.3946 20.6329 30.5 20.3785 30.5 20.1133C30.5 19.8481 30.3946 19.5937 30.2071 19.4062C30.0196 19.2186 29.7652 19.1133 29.5 19.1133Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="bg-[#F7B512] p-1 rounded-md text-white hover:opacity-80 transition duration-300"
                        aria-label="Twitter"
                    >
                        <svg
                            width="50"
                            height="51"
                            viewBox="0 0 50 51"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                y="0.613281"
                                width="50"
                                height="50"
                                rx="4"
                                fill="#F7B512"
                            />
                            <g clipPath="url(#clip0_739_1484)">
                                <mask
                                    id="mask0_739_1484"
                                    style={{ maskType: "luminance" }}
                                    maskUnits="userSpaceOnUse"
                                    x="15"
                                    y="15"
                                    width="20"
                                    height="21"
                                >
                                    <path
                                        d="M15 15.6133H35V35.6133H15V15.6133Z"
                                        fill="white"
                                    />
                                </mask>
                                <g mask="url(#mask0_739_1484)">
                                    <path
                                        d="M30.75 16.5508H33.8171L27.1171 24.2279L35 34.6765H28.8286L23.9914 28.3408L18.4629 34.6765H15.3929L22.5586 26.4622L15 16.5522H21.3286L25.6943 22.3422L30.75 16.5508ZM29.6714 32.8365H31.3714L20.4 18.2951H18.5771L29.6714 32.8365Z"
                                        fill="white"
                                    />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_739_1484">
                                    <rect
                                        width="20"
                                        height="20"
                                        fill="white"
                                        transform="translate(15 15.6133)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="bg-[#F7B512] p-1 rounded-md text-white hover:opacity-80 transition duration-300"
                        aria-label="LinkedIn"
                    >
                        <svg
                            width="50"
                            height="51"
                            viewBox="0 0 50 51"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                y="0.613281"
                                width="50"
                                height="50"
                                rx="4"
                                fill="#F7B512"
                            />
                            <path
                                d="M15.2656 22.1191H19.7513V35.6132H15.2656V22.1191Z"
                                fill="white"
                            />
                            <path
                                d="M17.5376 15.6133C16.0032 15.6133 15 16.6207 15 17.9448C15 19.2398 15.9734 20.2759 17.4787 20.2759H17.5079C19.0723 20.2759 20.0458 19.2398 20.0458 17.9448C20.0166 16.6207 19.0723 15.6133 17.5376 15.6133Z"
                                fill="white"
                            />
                            <path
                                d="M30.7598 21.8027C28.3798 21.8027 27.3134 23.1106 26.7172 24.0302V22.1194H22.2314V35.6135H26.7171V28.0778C26.7171 27.6744 26.7463 27.2717 26.8647 26.9832C27.189 26.1776 27.927 25.343 29.1662 25.343C30.7894 25.343 31.4387 26.5805 31.4387 28.3945V35.6135H35.924V27.8762C35.924 23.7314 33.7109 21.8027 30.7598 21.8027Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                </div>
                {/* Divider */}
                <div className="w-full h-[1px] bg-white mb-6"></div>
                {/* Copyright Section */}
                <div className="flex flex-wrap justify-between w-full text-sm">
                    <p>Copyright © 2025 Meril</p>
                    <div className="flex space-x-4">
                        <Link
                            href="/privacy-policy"
                            className="hover:text-yellow-400 transition duration-300"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-yellow-400 transition duration-300"
                        >
                            Terms & Condition
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
