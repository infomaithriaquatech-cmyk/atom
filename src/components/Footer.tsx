import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="/MAPL_Logo_Colour_2022_-_Copy.png"
              alt="Maithri Aquatech"
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed">
              Leading the future of water purification with innovative atmospheric water generation technology.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition">
                  Specifications
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.maithriaqua.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition">
                  Contact
                </button>
              </li>
              <li>
                <a href="https://www.maithriaqua.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="https://www.maithriaqua.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@maithriaqua.com" className="hover:text-white transition">
                  info@maithriaqua.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <a href="tel:+911234567890" className="hover:text-white transition">
                  +91 123 456 7890
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
            <p>&copy; 2024 Maithri Aquatech. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
