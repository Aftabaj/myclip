import React from "react";
import Image from "next/image";

const KeyFeature = () => {
    const features = [
        {
            title: "Low-Profile Delivery System",
            description:
                "Facilitates smooth transseptal navigation with excellent maneuverability.",
        },
        {
            title: "Radiopaque Markers",
            description:
                "Enables accurate positioning and visualization under fluoroscopy.",
        },
        {
            title: "Repositionable and Retrievable Clip",
            description:
                "Allows real-time adjustments during deployment to optimize valve coaptation.",
        },
        {
            title: "Intuitive Handle Design",
            description:
                "Simplifies control and manipulation for a confident operator experience.",
        },
        {
            title: "Custom Clip Sizes",
            description:
                "Available in multiple sizes to address varying anatomical and clinical needs.",
        },
        {
            title: "Dual-Grasping Mechanism",
            description:
                "Ensures precise and secure leaflet capture, enhancing procedural success rates.",
        },
        {
            title: "Fully Integrated Procedural System",
            description:
                "Works seamlessly with standard imaging and access techniques, reducing procedural complexity.",
        },
    ];

    return (
        <>
            <div className="py-16 px-4 md:px-8 max-w-[1300px] mx-auto">
                <h2 className="text-4xl font-medium text-center text-[#433185] mb-12">
                    Key Features
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="flex items-start mb-2">
                                <span className="text-[#433185] mr-2">•</span>
                                <h3 className="text-[#433185] font-medium text-[22px]">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-[#383838] pl-5 text-[18px] font-light">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
                <h2 className="text-4xl font-medium text-center text-[#433185] mb-8">
                    Engineered for Excellence
                </h2>
                <p className="text-[#383838] text-[18px] font-light">
                    MyClip™ reflects Meril’s commitment to advancing
                    cardiovascular care through precision engineering and
                    meaningful innovation. Backed by clinical expertise, locally
                    available support, and a legacy of excellence through
                    Myval™, MyClip™ is setting a new benchmark in mitral valve
                    therapy.
                </p>
            </div>
            <div className="relative h-[500px] w-full">
                <Image
                    src="/website View/images/feature.jpg"
                    alt="features"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
                <div className="absolute top-[65%] -translate-y-1/2 lg:left-[5%] 2xl:left-[10%] w-[630px] h-full">
                    <h3 className="text-[45px] font-semibold text-[#433185] mt-2 mb-10 leading-[50px]">
                        Pioneers in Indian Heart Valve Innovation{" "}
                    </h3>

                    <p className="text-[#383838]  text-lg font-light mb-8">
                        MyClip™ is born from the same house that developed
                        Myval™, India’s leading Transcatheter Heart Valve
                        System, recognized globally for performance and
                        precision. With this legacy, we reaffirm our role as a
                        true med-tech pioneer from India.
                    </p>
                    <p className="text-[#383838]  text-lg font-light mb-8">
                        Meril is the only Indian company to manufacture both
                        TEER and TAVI systems, offering a complete portfolio of
                        transcatheter solutions.
                    </p>
                </div>
            </div>
        </>
    );
};

export default KeyFeature;
