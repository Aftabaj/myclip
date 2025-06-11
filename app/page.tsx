import Header from '@/components/header';
import Footer from '@/components/footer';
import HomeBanner from '@/components/banner';
import ContactUs from '@/components/contact';
import WhyMyClip from '@/components/whymycllip';
import Highlight from '@/components/highlight';
import Product from '@/components/product';
import KeyFeature from '@/components/keyFeature';
import Clinical from '@/components/clinical';
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <HomeBanner />
      <WhyMyClip />
      <Highlight />
      <Product />
      <KeyFeature />
      <Clinical />
      {/* <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Welcome to MyClip</h2>
            <p className="text-lg text-gray-600">
              We provide innovative solutions for your business needs. Our team of experts is dedicated to delivering high-quality products and services that exceed your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Web Development</h3>
              <p className="text-gray-600">
                Custom websites designed to meet your specific business needs, with responsive design and optimal user experience.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mobile Apps</h3>
              <p className="text-gray-600">
                Cutting-edge mobile applications for iOS and Android platforms, focusing on performance and user satisfaction.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Analytics</h3>
              <p className="text-gray-600">
                Comprehensive data analysis solutions to help you make informed decisions and drive business growth.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Let's work together to bring your ideas to life. Our team is ready to help you achieve your goals.
              </p>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300 inline-block"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </div> */}
      
      <ContactUs />
      <Footer />
    </main>
  );
}
