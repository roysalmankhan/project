import React from 'react';

const WhoWeAre = () => {
  return (
    <>
    <section className="py-16 bg-slate-300 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Who We Are
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <p className="text-lg leading-relaxed mb-4">
              We are a passionate team of professionals dedicated to building
              innovative solutions that drive success. Our team combines
              creativity, technology, and strategy to bring meaningful
              experiences to our clients.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission is to help businesses grow and thrive in an ever-
              changing digital landscape by providing tailored solutions that
              are both scalable and sustainable.
            </p>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <img
              src="https://i.postimg.cc/Jn9Y3Hxz/whoweare.jpg"
              alt="Who We Are"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default WhoWeAre;
