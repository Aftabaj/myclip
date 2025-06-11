import React from "react";

const Product = () => {
    return (
        <div className="max-w-[1300px] mx-auto px-4 md:px-8 lg:px-16 py-16">
            <div className="mb-24">
                <h2 className="text-[50px] font-semibold text-center text-[#4A3B8B] mb-8">
                    Our Purpose
                </h2>

                <div className="relative">
                    <h3 className="text-xl font-medium text-[#4A3B8B] mb-4">
                        More to Life
                    </h3>
                    <p className="text-gray-700">
                        At Meril, More to Life isn't just a tagline—it's our
                        mission. MyClip™ is a result of years of R&D focused on
                        restoring the rhythm of life for patients living with
                        mitral valve disease. It's about giving them not just
                        more years—but better years.
                    </p>

                    <div className="absolute right-0 bottom-0 w-1/3 h-64 bg-gray-100 opacity-20 rounded-full -z-10"></div>
                </div>
            </div>
            <div className="text-center mb-12">
                <p className="text-[#F7B512] font-medium mb-2">
                    Introducing MyClip™ TEER System
                </p>
                <h1 className="text-[50px] md:text-[50px] font-semibold text-[#4A3B8B]">
                    Our Product
                </h1>
            </div>

            <div className="mb-20">
                <p className="text-gray-700 leading-relaxed">
                    The MyClip™ TEER (Transcatheter Edge-to-Edge Repair) System
                    is a breakthrough solution developed and manufactured in
                    India by Meril Lifesciences. Designed for the treatment of
                    mitral regurgitation, MyClip™ enables a minimally invasive,
                    catheter- based approach to mitral valve repair, improving
                    patient outcomes and accessibility.
                </p>
            </div>

            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#F7B512]">
                    Benefits of Transcather Edge to Edge Repair System
                </h2>
            </div>

            <div className="flex justify-center">
                <img
                    src="/Website View/images/device.png"
                    alt="MyClip TEER System"
                    className="max-w-full h-auto"
                />
            </div>
        </div>
    );
};

export default Product;
