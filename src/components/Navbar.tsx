import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="text-white font-heading text-lg font-semibold">LL</span>
            </div>
            <div className={`hidden sm:block px-4 py-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'bg-transparent' : 'bg-gradient-to-r from-[#D4AF37]/90 to-[#B8960C]/90 backdrop-blur-sm'
            }`}>
              <h1 className={`font-heading text-xl font-bold leading-tight tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-[#2D2A26]' : 'text-white'
              }`}>
                LAVISH LOOK
              </h1>
              <p className={`text-xs tracking-[0.2em] uppercase font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-[#D4AF37]' : 'text-[#FDFBF7]'
              }`}>
                Beauty Lounge
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#D4AF37]'
                    : isScrolled 
                      ? 'text-[#2D2A26] hover:text-[#D4AF37]'
                      : 'text-white hover:text-[#F5D76E]'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      isScrolled ? 'bg-[#D4AF37]' : 'bg-[#F5D76E]'
                    }`}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+917204060412"
              className={`flex items-center gap-2 transition-colors ${
                isScrolled 
                  ? 'text-[#2D2A26] hover:text-[#D4AF37]' 
                  : 'text-white hover:text-[#F5D76E]'
              }`}
            >
              <Phone size={18} />
              <span className="font-medium">+91 72040 60412</span>
            </a>
            <a
              href="https://wa.me/917204060412?text=Hi! I would like to book an appointment at Lavish Look Beauty Lounge."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Calendar size={18} />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled 
                ? 'text-[#2D2A26] hover:text-[#D4AF37]' 
                : 'text-white hover:text-[#F5D76E]'
            }`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[#F5E6D3]"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Logo Text */}
              <div className="flex items-center gap-3 pb-4 border-b border-[#F5E6D3]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] flex items-center justify-center shadow-lg">
                  <span className="text-white font-heading text-sm font-semibold">LL</span>
                </div>
                <div>
                  <h1 className="font-heading text-lg font-bold text-[#2D2A26] tracking-wide">
                    LAVISH LOOK
                  </h1>
                  <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#D4AF37]">
                    Beauty Lounge
                  </p>
                </div>
              </div>
              
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#D4AF37]'
                      : 'text-[#2D2A26]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#F5E6D3] space-y-3">
                <a
                  href="tel:+917204060412"
                  className="flex items-center gap-2 text-[#2D2A26] py-2"
                >
                  <Phone size={18} />
                  <span>+91 72040 60412</span>
                </a>
                <a
                  href="https://wa.me/917204060412?text=Hi! I would like to book an appointment at Lavish Look Beauty Lounge."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-white px-6 py-3 rounded-full font-medium text-center"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
