import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  review: string;
  rating: number;
  service?: string;
  image?: string;
}

const TestimonialCard = ({ name, review, rating, service, image }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] rounded-full flex items-center justify-center shadow-lg">
        <Quote size={20} className="text-white" fill="white" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-gray-300'}
          />
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-600 leading-relaxed mb-6 italic">
        "{review}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F8E8E8] to-[#F5E6D3] flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-[#D4AF37] font-heading text-lg font-semibold">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <h4 className="font-heading text-lg text-[#2D2A26]">{name}</h4>
          {service && (
            <p className="text-sm text-[#D4AF37]">{service}</p>
          )}
        </div>
      </div>

      {/* Decorative Border */}
      <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30" />
    </motion.div>
  );
};

export default TestimonialCard;
