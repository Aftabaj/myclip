import React from "react";
import Image from "next/image";

const Clinical = () => {
    return (
        <div className="py-16">
            <div className="text-center mb-10">
                <p className="text-[#F7B512] font-medium">
                    Safety | Efficacy | Confidence
                </p>
                <h2 className="text-[48px] font-semibold text-[#433185] mt-2">
                    Clinical Insights
                </h2>
            </div>

            <div className="mb-16 max-w-[1300px] mx-auto px-8">
                <p className="text-[#383838] text-lg font-light">
                    MyClip™ is undergoing rigorous clinical evaluation across
                    leading Indian cardiology centers. Preliminary outcomes
                    indicate promising results in MR reduction, procedural
                    efficiency, and patient recovery.
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 pl-4 md:pl-8 lg:pl-36">
                <div className="md:w-1/2">
                    <p className="text-[#F7B512] font-medium">
                        A System Designed for Expertise
                    </p>
                    <h3 className="text-[48px] font-semibold text-[#433185] mt-2 mb-4">
                        For Physicians
                    </h3>

                    <p className="text-[#383838]  text-lg font-light mb-8">
                        Developed in collaboration with structural heart
                        specialists, MyClip™ provides intuitive deployment,
                        real-time positioning flexibility, and robust leaflet
                        capture—giving interventionists the confidence they need
                        in critical procedures
                    </p>

                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="">
                                <svg
                                    width="22"
                                    height="16"
                                    viewBox="0 0 22 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M15.2415 13.0429C16.8481 9.02643 18.7506 4.8831 21.689 1.31055C19.5117 1.31055 18.8352 2.07157 17.8205 2.74803L17.1441 3.31879C16.8692 3.86841 16.6367 4.41804 16.383 4.96766C15.6009 6.76451 14.9667 8.62478 14.3748 10.4428C13.9943 11.4786 13.4235 12.2185 12.7471 12.7047C12.1552 13.1275 11.4998 13.3177 10.8445 13.3177C10.1892 13.3177 9.53386 13.1063 8.94196 12.6835C8.28664 12.2185 7.71588 11.4786 7.37765 10.485C6.8703 8.5825 6.19384 6.74337 5.39055 4.96766C5.13687 4.41804 4.8832 3.86841 4.58725 3.33993L3.91079 2.76916C3.25547 2.32524 2.21964 1.33169 0 1.33169C2.91724 4.9888 5.13687 8.89959 6.53207 13.0852C8.15981 16.9114 13.4658 17.0383 15.2626 13.0641"
                                        fill="#2C2E88"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M13.8673 10.2949C14.4592 8.45576 15.1145 6.59549 15.8967 4.7775C16.6154 3.12863 17.4187 1.52204 18.3911 0C17.4821 0.105697 17.0382 0.507344 16.552 0.930132C16.4463 1.03583 16.3195 1.12039 16.2349 1.20494L12.3453 5.22143C11.8379 5.74992 11.3306 6.00359 10.8232 6.00359C10.3159 6.00359 9.80854 5.72877 9.34347 5.20029L5.4961 1.20494C5.41155 1.14153 5.36927 1.09925 5.30585 1.03583C4.9042 0.676459 4.3123 0.126836 3.29761 0C4.27002 1.54318 5.13673 3.12863 5.87661 4.75636C6.70105 6.55321 7.37751 8.39234 7.88485 10.316C8.20195 11.1827 8.68815 11.8381 9.25891 12.2397C9.74512 12.5779 10.2947 12.7682 10.8444 12.7682C11.394 12.7682 11.9436 12.5991 12.4298 12.2608C13.0217 11.8592 13.5291 11.2039 13.8462 10.2949"
                                        fill="#FBBA1E"
                                    />
                                </svg>
                            </span>
                            <p className="text-[#433185]">
                                National Proctoring Program
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="">
                                <svg
                                    width="22"
                                    height="16"
                                    viewBox="0 0 22 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M15.2415 13.0429C16.8481 9.02643 18.7506 4.8831 21.689 1.31055C19.5117 1.31055 18.8352 2.07157 17.8205 2.74803L17.1441 3.31879C16.8692 3.86841 16.6367 4.41804 16.383 4.96766C15.6009 6.76451 14.9667 8.62478 14.3748 10.4428C13.9943 11.4786 13.4235 12.2185 12.7471 12.7047C12.1552 13.1275 11.4998 13.3177 10.8445 13.3177C10.1892 13.3177 9.53386 13.1063 8.94196 12.6835C8.28664 12.2185 7.71588 11.4786 7.37765 10.485C6.8703 8.5825 6.19384 6.74337 5.39055 4.96766C5.13687 4.41804 4.8832 3.86841 4.58725 3.33993L3.91079 2.76916C3.25547 2.32524 2.21964 1.33169 0 1.33169C2.91724 4.9888 5.13687 8.89959 6.53207 13.0852C8.15981 16.9114 13.4658 17.0383 15.2626 13.0641"
                                        fill="#2C2E88"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M13.8673 10.2949C14.4592 8.45576 15.1145 6.59549 15.8967 4.7775C16.6154 3.12863 17.4187 1.52204 18.3911 0C17.4821 0.105697 17.0382 0.507344 16.552 0.930132C16.4463 1.03583 16.3195 1.12039 16.2349 1.20494L12.3453 5.22143C11.8379 5.74992 11.3306 6.00359 10.8232 6.00359C10.3159 6.00359 9.80854 5.72877 9.34347 5.20029L5.4961 1.20494C5.41155 1.14153 5.36927 1.09925 5.30585 1.03583C4.9042 0.676459 4.3123 0.126836 3.29761 0C4.27002 1.54318 5.13673 3.12863 5.87661 4.75636C6.70105 6.55321 7.37751 8.39234 7.88485 10.316C8.20195 11.1827 8.68815 11.8381 9.25891 12.2397C9.74512 12.5779 10.2947 12.7682 10.8444 12.7682C11.394 12.7682 11.9436 12.5991 12.4298 12.2608C13.0217 11.8592 13.5291 11.2039 13.8462 10.2949"
                                        fill="#FBBA1E"
                                    />
                                </svg>
                            </span>
                            <p className="text-[#433185]">
                                Hands-on Training at Meril Academy
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="">
                                <svg
                                    width="22"
                                    height="16"
                                    viewBox="0 0 22 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M15.2415 13.0429C16.8481 9.02643 18.7506 4.8831 21.689 1.31055C19.5117 1.31055 18.8352 2.07157 17.8205 2.74803L17.1441 3.31879C16.8692 3.86841 16.6367 4.41804 16.383 4.96766C15.6009 6.76451 14.9667 8.62478 14.3748 10.4428C13.9943 11.4786 13.4235 12.2185 12.7471 12.7047C12.1552 13.1275 11.4998 13.3177 10.8445 13.3177C10.1892 13.3177 9.53386 13.1063 8.94196 12.6835C8.28664 12.2185 7.71588 11.4786 7.37765 10.485C6.8703 8.5825 6.19384 6.74337 5.39055 4.96766C5.13687 4.41804 4.8832 3.86841 4.58725 3.33993L3.91079 2.76916C3.25547 2.32524 2.21964 1.33169 0 1.33169C2.91724 4.9888 5.13687 8.89959 6.53207 13.0852C8.15981 16.9114 13.4658 17.0383 15.2626 13.0641"
                                        fill="#2C2E88"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M13.8673 10.2949C14.4592 8.45576 15.1145 6.59549 15.8967 4.7775C16.6154 3.12863 17.4187 1.52204 18.3911 0C17.4821 0.105697 17.0382 0.507344 16.552 0.930132C16.4463 1.03583 16.3195 1.12039 16.2349 1.20494L12.3453 5.22143C11.8379 5.74992 11.3306 6.00359 10.8232 6.00359C10.3159 6.00359 9.80854 5.72877 9.34347 5.20029L5.4961 1.20494C5.41155 1.14153 5.36927 1.09925 5.30585 1.03583C4.9042 0.676459 4.3123 0.126836 3.29761 0C4.27002 1.54318 5.13673 3.12863 5.87661 4.75636C6.70105 6.55321 7.37751 8.39234 7.88485 10.316C8.20195 11.1827 8.68815 11.8381 9.25891 12.2397C9.74512 12.5779 10.2947 12.7682 10.8444 12.7682C11.394 12.7682 11.9436 12.5991 12.4298 12.2608C13.0217 11.8592 13.5291 11.2039 13.8462 10.2949"
                                        fill="#FBBA1E"
                                    />
                                </svg>
                            </span>
                            <p className="text-[#433185]">
                                Live Case Support Across India
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 mt-8 lg:mt-0 h-[425px] relative">
                    <Image
                        src="/Website View/images/clinical.png"
                        alt="Doctor with elderly patient in wheelchair"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className=" rounded-l-[20px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Clinical;
