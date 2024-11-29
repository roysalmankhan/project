import React from 'react';
import bg1 from '../../assets/images/about-goal.jpg'


const WhatWeDo = () => {
  return (
    <section className="bg-slate-300 py-16">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          What We Do
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We offer a variety of services designed to help you achieve your goals. Here's how we can help:
        </p>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="  rounded-full p-4 mb-6 inline-block">
              <img src={bg1}  />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h3>
            <p className="text-gray-600">
              We create responsive and user-friendly websites that align with your business objectives.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className=" rounded-full p-4 mb-6 inline-block">
              <img src="https://i.postimg.cc/YCMTVyZH/app.jpg" alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">App Development</h3>
            <p className="text-gray-600">
              Build high-quality mobile applications that provide great user experiences across devices.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className=" rounded-full p-4 mb-6 inline-block">
              <img src="https://i.postimg.cc/qB8ykDY5/degital-marketing.jpg" alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Digital Marketing</h3>
            <p className="text-gray-600">
              Drive traffic and convert leads with effective SEO, social media management, and targeted ads.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className=" rounded-full p-4 mb-6 inline-block">
              <img src="https://i.postimg.cc/HWc3QCxv/branding.jpg" alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Branding</h3>
            <p className="text-gray-600">
              We help you create a strong, memorable brand that resonates with your target audience.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className=" rounded-full p-4 mb-6 inline-block">
              <img src="https://i.postimg.cc/sDBFQ8d3/uiux.jpg" alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">UX/UI Design</h3>
            <p className="text-gray-600">
              We create intuitive, beautiful designs that provide an exceptional user experience.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className=" rounded-full p-4 mb-6 inline-block">
              <img src="https://i.postimg.cc/ry4V7Ks1/consulting.webp" alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Consulting</h3>
            <p className="text-gray-600">
              Provide expert consulting to help you navigate business challenges and achieve success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
