import { Home } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 text-xl font-bold mb-3">
            <Home className="w-6 h-6" />
            <span className="text-slate-800">
              Rent<span className="text-green-500">UP</span>
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Find your dream property with ease. We connect people with homes,
            agents, and experiences they love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-slate-800">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-500 transition-all duration-300 cursor-pointer">
              About Us
            </li>
            <li className="hover:text-green-500 transition-all duration-300 cursor-pointer">
              Contact
            </li>
            <li className="hover:text-green-500 transition-all duration-300 cursor-pointer">
              Blog
            </li>
            <li className="hover:text-green-500 transition-all duration-300 cursor-pointer">
              FAQs
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-slate-800">Contact</h4>
          <p className="text-sm">123 RentUP Street</p>
          <p className="text-sm">City, Country</p>
          <p className="text-sm">Email: support@rentup.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-4 text-slate-800">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RentUP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
