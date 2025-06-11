import React from 'react'
import Image from 'next/image'
const WhyMyClip = () => {
  return (
    <div className="w-full bg-white py-16 pl-4 md:pl-8 lg:pl-44">
      <div className="">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-[50px] font-semibold text-[#433185] mb-6">
              What is MyClip<sup className="text-[30px] mr-2">™</sup>?
            </h2>
            
            <p className="text-[#383838] mb-8">
              MyClip TEER System has been indigenously developed by 
              Meril a large well-known Indian medical device company.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="min-w-2 h-2 rounded-full bg-[#433185] mt-3 mr-4"></div>
                <div>
                  <h3 className="text-[24px] font-semibold text-[#433185] mb-2">
                    Fixes a Leaky Valve Without Open Surgery
                  </h3>
                  <p className="text-[#383838]">
                    MyClip is a small device used to clip the two flaps of the mitral valve 
                    together so they close better and reduce leaking.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="min-w-2 h-2 rounded-full bg-[#433185] mt-3 mr-4"></div>
                <div>
                  <h3 className="text-[24px] font-semibold text-[#433185] mb-2">
                    Inserted Through a Vein, Not the Chest
                  </h3>
                  <p className="text-[#383838]">
                    The clip is delivered through a thin tube inserted in a vein in the leg
                    and guided up to the heart – no need for open-heart surgery.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="min-w-2 h-2 rounded-full bg-[#433185] mt-3 mr-4"></div>
                <div>
                  <h3 className="text-[24px] font-semibold text-[#433185] mb-2">
                    For People with Symptoms Like Shortness of Breath
                  </h3>
                  <p className="text-[#383838]">
                    MyClip helps patients who feel tired, breathless, or dizzy due to a
                    leaky mitral valve.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="min-w-2 h-2 rounded-full bg-[#433185] mt-3 mr-4"></div>
                <div>
                  <h3 className="text-[24px] font-semibold text-[#433185] mb-2">
                    Quick Recovery
                  </h3>
                  <p className="text-[#383838]">
                    Most people go home within a few days and feel better soon after
                    the procedure.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="min-w-2 h-2 rounded-full bg-[#433185] mt-3 mr-4"></div>
                <div>
                  <h3 className="text-[24px] font-semibold text-[#433185] mb-2">
                    Safe and Effective
                  </h3>
                  <p className="text-[#383838] text-[16px]">
                    MyClip is designed to be precise, secure, and gentle on the heart,
                    offering a reliable option for patients who may not be fit for major
                    surgery.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 h-[650px] relative">
            {/* <img 
              src="/website View/images/whymyclip.png" 
              alt="Senior couple enjoying a meal together" 
              className="w-full object-cover h-full"
            /> */}
            <Image src="/website View/images/whymyclip.png" alt="Senior couple enjoying a meal together"  layout='fill' objectFit='cover' objectPosition='center' className=' rounded-l-[40px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyMyClip