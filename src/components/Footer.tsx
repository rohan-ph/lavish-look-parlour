import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D2A26] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] flex items-center justify-center">
                <span className="text-white font-heading text-xl font-semibold">LL</span>
              </div>
              <div>
                <h3 className="font-heading text-2xl">Lavish Look</h3>
                <p className="text-[#D4AF37] text-sm tracking-widest uppercase">Beauty Lounge</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your destination for premium beauty services. Experience luxury treatments
              that enhance your natural beauty and leave you feeling pampered.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-[#D4AF37]">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Nail Services',
                'Makeup Services',
                'Skin Care',
                'Beauty Treatments',
                'Bridal Packages',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-[#D4AF37]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#D4AF37] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  30, Subhash Chandra Bose Rd, Kadarenahalli, Bendre Nagar, Bengaluru, Karnataka 560070
                </span>
              </li>
              <li>
                <a
                  href="tel:+917204060412"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  <Phone size={20} className="text-[#D4AF37]" />
                  +91 72040 60412
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#D4AF37]" />
                <span className="text-gray-300">info@lavishlook.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-[#D4AF37] flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: 11:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Lavish Look Beauty Lounge. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
