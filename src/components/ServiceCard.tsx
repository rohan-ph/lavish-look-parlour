import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  whatsappMessage?: string;
}

const ServiceCard = ({ title, description, image, link, whatsappMessage }: ServiceCardProps) => {
  const phoneNumber = '917204060412';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage || `Hi! I'm interested in ${title} services at Lavish Look Beauty Lounge.`)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Title Bar at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] py-4 px-6">
          <h3 className="text-xl font-heading text-white font-bold">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-[#4A4640] mb-6 leading-relaxed font-medium">
          {description}
        </p>
        
        <div className="flex items-center gap-4">
          {link && (
            <Link
              to={link}
              className="flex items-center gap-2 text-[#B8960C] font-semibold hover:text-[#D4AF37] hover:gap-3 transition-all"
            >
              View Details
              <ArrowRight size={18} />
            </Link>
          )}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-white px-5 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Gold Border on Hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37]/30 rounded-3xl transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ServiceCard;
