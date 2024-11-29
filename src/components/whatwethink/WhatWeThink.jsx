import React from 'react';

const WhatWeThink = () => {
  return (
    <section className="py-20 bg-slate-400">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-white-400 mb-8">
        <b>What We Think</b> 
        </h2>
        <p className="text-lg text-slate-900 mb-16">
         <b> We believe in creating a culture of respect, innovation, and teamwork. Here's what drives us.</b>
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
          
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all">
            <img 
              src="https://i.postimg.cc/1XNkFv5Y/innovation.jpg" 
              alt="Innovation" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We believe in constantly innovating to stay ahead of the curve, adapting quickly to new challenges.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all">
            <img 
              src="https://i.postimg.cc/m2ZZcFv3/transparensy.jpg" 
              alt="Transparency" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Transparency</h3>
              <p className="text-gray-600">
                We are committed to openness in everything we do, building trust through clear and honest communication.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all">
            <img 
              src="https://i.postimg.cc/XvbzJ9h4/collebration.jpg" 
              alt="Collaboration" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork, combining diverse ideas to create the best outcomes.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all">
            <img 
              src="https://i.postimg.cc/N0nbXTCK/growth.jpg" 
              alt="Growth" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Growth</h3>
              <p className="text-gray-600">
                Personal and professional growth is at the core of our values, pushing us to continuously improve.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all">
            <img 
              src="https://i.postimg.cc/c4QnMYCv/intigraty.jpg" 
              alt="Integrity" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest standards of honesty and ethics in all our actions, no matter the situation.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all">
            <img 
              src="https://i.postimg.cc/VN499t7q/excellenace.jpg" 
              alt="Excellence" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We are committed to exceeding expectations in everything we do, consistently delivering high-quality results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeThink;
