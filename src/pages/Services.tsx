import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Check } from 'lucide-react';

// EDITABLE: Services data with prices
const servicesData = {
  nails: {
    title: 'Nail Services',
    description: 'Indulge in luxurious nail treatments that leave your hands and feet looking and feeling amazing.',
    image: '/images/nail-services.jpg',
    services: [
      { name: 'Classic Manicure', price: '₹499', duration: '30 min', description: 'Nail shaping, cuticle care, hand massage & polish' },
      { name: 'Gel Manicure', price: '₹799', duration: '45 min', description: 'Long-lasting gel polish with premium finish' },
      { name: 'Spa Manicure', price: '₹999', duration: '60 min', description: 'Exfoliation, mask, massage & premium polish' },
      { name: 'Classic Pedicure', price: '₹599', duration: '45 min', description: 'Foot soak, scrub, massage & polish' },
      { name: 'Spa Pedicure', price: '₹999', duration: '60 min', description: 'Luxury treatment with mask & extended massage' },
      { name: 'Nail Art (per nail)', price: '₹99+', duration: '15-30 min', description: 'Custom designs, patterns & embellishments' },
      { name: 'Nail Extensions', price: '₹1,499+', duration: '90 min', description: 'Acrylic or gel extensions for length & style' },
      { name: 'Nail Repair', price: '₹149', duration: '15 min', description: 'Fix broken or damaged nails' },
    ],
  },
  makeup: {
    title: 'Makeup Services',
    description: 'From everyday elegance to bridal glamour, our expert makeup artists create stunning looks for every occasion.',
    image: '/images/makeup-services.jpg',
    services: [
      { name: 'Basic Makeup', price: '₹999', duration: '45 min', description: 'Natural look with foundation, eyes & lips' },
      { name: 'Party Makeup', price: '₹1,999', duration: '60 min', description: 'Glamorous look perfect for events & parties' },
      { name: 'HD Makeup', price: '₹2,999', duration: '75 min', description: 'High-definition finish for photos & videos' },
      { name: 'Airbrush Makeup', price: '₹3,499', duration: '90 min', description: 'Flawless, long-lasting airbrush application' },
      { name: 'Bridal Makeup', price: '₹15,999', duration: '3 hrs', description: 'Complete bridal package with trials & touch-ups' },
      { name: 'Engagement Makeup', price: '₹4,999', duration: '90 min', description: 'Elegant look for your engagement ceremony' },
      { name: 'Reception Makeup', price: '₹5,999', duration: '90 min', description: 'Glamorous look for wedding reception' },
      { name: 'Groom Makeup', price: '₹2,499', duration: '60 min', description: 'Subtle enhancement for grooms' },
    ],
  },
  skincare: {
    title: 'Skin Care',
    description: 'Rejuvenate your skin with our premium facials and treatments designed for a radiant, healthy glow.',
    image: '/images/skincare-services.jpg',
    services: [
      { name: 'Basic Cleanup', price: '₹499', duration: '30 min', description: 'Cleansing, toning & moisturizing' },
      { name: 'Classic Facial', price: '₹999', duration: '45 min', description: 'Deep cleansing with massage & mask' },
      { name: 'Gold Facial', price: '₹1,999', duration: '60 min', description: 'Luxury gold treatment for radiant skin' },
      { name: 'Diamond Facial', price: '₹2,499', duration: '60 min', description: 'Premium diamond treatment for glowing skin' },
      { name: 'Anti-Aging Facial', price: '₹2,999', duration: '75 min', description: 'Firming treatment for youthful skin' },
      { name: 'Acne Treatment', price: '₹1,499', duration: '60 min', description: 'Specialized treatment for acne-prone skin' },
      { name: 'De-Tan Facial', price: '₹1,299', duration: '60 min', description: 'Remove tan & brighten skin tone' },
      { name: 'Hydra Facial', price: '₹3,499', duration: '75 min', description: 'Deep hydration & nourishment treatment' },
    ],
  },
  beauty: {
    title: 'Beauty Treatments',
    description: 'Complete beauty solutions from waxing to threading, designed to keep you looking polished and confident.',
    image: '/images/spa-facial.jpg',
    services: [
      { name: 'Full Arms Waxing', price: '₹399', duration: '20 min', description: 'Smooth arms with premium wax' },
      { name: 'Full Legs Waxing', price: '₹599', duration: '30 min', description: 'Complete leg waxing service' },
      { name: 'Full Body Waxing', price: '₹1,999', duration: '90 min', description: 'Complete body waxing package' },
      { name: 'Upper Lip Threading', price: '₹99', duration: '10 min', description: 'Precise upper lip hair removal' },
      { name: 'Eyebrow Threading', price: '₹149', duration: '15 min', description: 'Perfectly shaped eyebrows' },
      { name: 'Full Face Threading', price: '₹399', duration: '30 min', description: 'Complete facial threading' },
      { name: 'Upper Lip Waxing', price: '₹149', duration: '10 min', description: 'Quick upper lip wax' },
      { name: 'Underarm Waxing', price: '₹199', duration: '15 min', description: 'Smooth underarms' },
    ],
  },
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof servicesData>('nails');
  const phoneNumber = '917204060412';

  const categories = Object.keys(servicesData) as Array<keyof typeof servicesData>;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#F8E8E8] to-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-4">
              <Calendar size={20} />
              <span className="text-sm tracking-widest uppercase font-medium">Our Services</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#2D2A26] mb-6">
              Premium{' '}
              <span className="text-[#D4AF37]">Beauty Services</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Discover our comprehensive range of beauty services designed to pamper you
              from head to toe. Each service is delivered with expertise and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-white shadow-lg'
                    : 'bg-[#F8E8E8] text-[#2D2A26] hover:bg-[#F5E6D3]'
                }`}
              >
                {servicesData[category].title}
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-3 gap-12"
          >
            {/* Category Image */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={servicesData[activeCategory].image}
                    alt={servicesData[activeCategory].title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
                <h2 className="font-heading text-2xl text-[#2D2A26] mt-6 mb-2">
                  {servicesData[activeCategory].title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {servicesData[activeCategory].description}
                </p>
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hi! I'm interested in ${servicesData[activeCategory].title} at Lavish Look Beauty Lounge. Please share more details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all w-full justify-center"
                >
                  <Calendar size={18} />
                  Book {servicesData[activeCategory].title}
                </a>
              </div>
            </div>

            {/* Services List */}
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4">
                {servicesData[activeCategory].services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl p-6 border-2 border-[#F5E6D3] hover:border-[#D4AF37] hover:shadow-xl transition-all group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-heading text-lg text-[#2D2A26] font-semibold group-hover:text-[#D4AF37] transition-colors">
                        {service.name}
                      </h3>
                      <span className="text-[#B8960C] font-bold text-lg">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-[#4A4640] text-sm mb-3 font-medium">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#2D2A26] bg-[#F5E6D3] px-3 py-1 rounded-full font-medium">
                        {service.duration}
                      </span>
                      <a
                        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hi! I would like to book ${service.name} (${service.price}) at Lavish Look Beauty Lounge.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#B8960C] font-semibold hover:text-[#D4AF37] transition-colors"
                      >
                        Book Now →
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nail Art Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl text-[#2D2A26] mb-4">
              Our <span className="text-[#D4AF37]">Nail Art</span> Gallery
            </h2>
            <p className="text-[#4A4640] max-w-2xl mx-auto font-medium">
              Explore our stunning nail art designs. From elegant French tips to bold artistic creations.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/gallery-1.jpg', alt: 'Elegant French Manicure' },
              { src: '/images/gallery-5.jpg', alt: 'Red Nail Polish' },
              { src: '/images/nail-art-design.jpg', alt: 'Colorful Nail Art' },
              { src: '/images/nail-services.jpg', alt: 'Professional Pedicure' },
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gold gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#F8E8E8] to-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl text-[#2D2A26] mb-4">
              Special{' '}
              <span className="text-[#D4AF37]">Packages</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Save more with our curated beauty packages designed for complete pampering.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Bridal Bliss',
                price: '₹29,999',
                features: [
                  'Bridal Makeup (HD/Airbrush)',
                  'Pre-bridal Facial (3 sessions)',
                  'Manicure & Pedicure',
                  'Full Body Waxing',
                  'Hair Spa & Styling',
                  'Mehndi Design Assistance',
                ],
                popular: true,
              },
              {
                name: 'Party Ready',
                price: '₹4,999',
                features: [
                  'Party Makeup',
                  'Hair Styling',
                  'Manicure',
                  'Basic Facial',
                ],
                popular: false,
              },
              {
                name: 'Pamper Me',
                price: '₹2,999',
                features: [
                  'Spa Manicure',
                  'Spa Pedicure',
                  'Classic Facial',
                  'Eyebrow & Upper Lip',
                ],
                popular: false,
              },
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 shadow-lg ${
                  pkg.popular ? 'ring-2 ring-[#D4AF37]' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading text-2xl text-[#2D2A26] mb-2">{pkg.name}</h3>
                <p className="text-3xl font-heading text-[#D4AF37] mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <Check size={18} className="text-[#D4AF37]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hi! I'm interested in the ${pkg.name} package (${pkg.price}) at Lavish Look Beauty Lounge.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-full font-medium text-center transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-white hover:shadow-lg'
                      : 'bg-[#F8E8E8] text-[#2D2A26] hover:bg-[#F5E6D3]'
                  }`}
                >
                  Book Package
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            * Prices are indicative and may vary based on specific requirements. Contact us for
            customized packages and current offers.
          </p>
        </div>
      </section>
    </motion.main>
  );
};

export default Services;
