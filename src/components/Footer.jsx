import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Upper section: Multi-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Column 1: About Us Section */}
          <div className="space-y-4">
            <h5 className="text-xl font-semibold">About Us</h5>
            <p className="text-gray-400">
              We are a creative agency focused on delivering exceptional digital experiences. Let’s build something amazing together.
            </p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Learn More
            </button>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h5 className="text-xl font-semibold">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-200 transition-all">Home</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-all">What We Do</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-all">Who We Are</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-all">What We Think</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-all">Careers</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-all">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h5 className="text-xl font-semibold">Contact</h5>
            <p>Email: roysalmanpathan1234@gmail.com</p>
            <p>Phone: (+91) 8058611077</p>
            <p>Address: 1234 Street, City, Country</p>
          </div>

          {/* Column 4: Social Media Links */}
          <div className="space-y-4">
            <h5 className="text-xl font-semibold">Follow Us</h5>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <i className="fab fa-facebook-f text-2xl"></i> {/* FontAwesome Icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <i className="fab fa-twitter text-2xl"></i> {/* FontAwesome Icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <i className="fab fa-instagram text-2xl"></i> {/* FontAwesome Icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <i className="fab fa-linkedin-in text-2xl"></i> {/* FontAwesome Icon */}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section: Copyright */}
        <div className="mt-12 border-t border-gray-600 pt-4 text-center text-sm">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
