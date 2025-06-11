import React from "react";

const Highlight = () => {
    return (
        <div className="w-full py-16">
            <div className="md:hidden block">
                <h2 className="text-[50px] font-medium text-[#4A3B8B] text-center mb-12">
                    Key Highlights
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1300px] mx-auto px-4 md:px-8 lg:px-16">
                <div className="order-1 bg-white p-6 rounded-lg shadow-xl border-l-6 border-[#4A3B8B] flex items-center justify-center h-32">
                    <p className="text-center text-[#433185]">
                        First-ever TEER system manufactured in India
                    </p>
                </div>
                <div className="order-2 hidden md:block">
                    <div className="bg-white p-6  flex items-center justify-center h-32">
                        <h2 className="text-[50px] font-medium text-[#4A3B8B]">
                            Key Highlights
                        </h2>
                    </div>
                </div>

                <div className="order-3 bg-white p-6 rounded-lg shadow-xl border-r-6 border-[#6A3B8B] flex items-center justify-center h-32">
                    <p className="text-center text-[#433185]">
                        Designed for optimal leaflet grasp and coaptation
                    </p>
                </div>

                <div className="order-4 bg-white p-6 rounded-lg shadow-xl border-l-6 border-[#4A3B8B] flex items-center justify-center h-32">
                    <p className="text-center text-[#433185]">
                        Repositionable and retrievable design
                    </p>
                </div>

                <div className="order-last md:order-5 bg-white p-6 rounded-lg shadow-xl border-b-6 border-[#4A3B8B] flex items-center justify-center h-32">
                    <p className="text-center text-[#433185]">
                        Supported by a dedicated India-based clinical and
                        technical team
                    </p>
                </div>

                <div className="order-6 bg-white p-6 rounded-lg shadow-xl border-r-6 border-[#4A3B8B] flex items-center justify-center h-32">
                    <p className="text-center text-[#433185]">
                        Low-profile delivery system for enhanced trackability
                    </p>
                </div>
            </div>

           
        </div>
    );
};

export default Highlight;
