import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Calendar, Sparkles, Heart, Star, ChevronRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

// EDITABLE: Hero background image
const heroBackground = '/images/hero-bg.jpg';

// EDITABLE: Services data
const services = [
  {
    title: 'Nail Services',
    description: 'Indulge in luxurious manicures, pedicures, and stunning nail art designs that express your unique style.',
    image: '/images/nail-services.jpg',
  },
  {
    title: 'Makeup Services',
    description: 'From bridal glamour to everyday elegance, our expert makeup artists create looks that enhance your natural beauty.',
    image: '/images/makeup-services.jpg',
  },
  {
    title: 'Skin Care',
    description: 'Rejuvenate your skin with our premium facials, treatments, and customized skincare solutions for a radiant glow.',
    image: '/images/skincare-services.jpg',
  },
  {
    title: 'Beauty Treatments',
    description: 'Complete beauty packages including waxing, threading, and specialized treatments for total pampering.',
    image: '/images/spa-facial.jpg',
  },
];

// EDITABLE: Testimonials data
const testimonials = [
  {
    name: 'Priya Sharma',
    review: 'Absolutely loved my bridal makeup! The team was so professional and made me feel like a princess on my special day. Highly recommend!',
    rating: 5,
    service: 'Bridal Makeup',
  },
  {
    name: 'Ananya Patel',
    review: 'Best nail art in Bangalore! The attention to detail is incredible. My nails have never looked better. The ambiance is so relaxing too.',
    rating: 5,
    service: 'Nail Art',
  },
  {
    name: 'Meera Krishnan',
    review: 'The facial treatment was heavenly! My skin has never felt this smooth and glowing. The staff is knowledgeable and friendly.',
    rating: 5,
    service: 'Skin Care',
  },
];

// EDITABLE: Gallery preview images
const galleryPreviews = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
];

const Home = () => {
  const phoneNumber = '917204060412';

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBackground}
            alt="Beauty salon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D2A26]/90 via-[#2D2A26]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/50 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#F8E8E8]/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Sparkles size={16} className="text-[#D4AF37]" />
              <span className="text-white/90 text-sm">Premium Beauty Experience</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              <span className="text-[#F0D4D4]">Enhance Your Beauty with a</span>{' '}
              <span className="text-[#D4AF37]">Touch of Luxury</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/80 mb-10 leading-relaxed"
            >
              Discover a sanctuary of beauty and relaxation. From stunning nail art to
              transformative skincare, we bring out the best version of you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi! I would like to book an appointment at Lavish Look Beauty Lounge.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Calendar size={20} />
                Book Appointment
              </a>
              <a
                href="tel:+917204060412"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Phone size={20} />
                Call Now
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8 mt-12 pt-12 border-t border-white/20"
            >
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '5000+', label: 'Happy Clients' },
                { number: '50+', label: 'Services' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-heading text-[#D4AF37]">{stat.number}</p>
                  <p className="text-white/70 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-[#D4AF37] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#FDFBF7] to-[#F8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-4">
              <Heart size={20} />
              <span className="text-sm tracking-widest uppercase font-medium">Our Services</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#2D2A26] mb-6">
              Discover Our{' '}
              <span className="text-[#D4AF37]">Premium Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Indulge in our range of luxurious beauty treatments designed to pamper you
              from head to toe.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                link="/services"
              />
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#D4AF37] font-medium text-lg hover:gap-3 transition-all"
            >
              View All Services
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-4">
                <Star size={20} />
                <span className="text-sm tracking-widest uppercase font-medium">Why Choose Us</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#2D2A26] mb-6">
                Experience the{' '}
                <span className="text-[#D4AF37]">Lavish Difference</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At Lavish Look Beauty Lounge, we believe every client deserves a premium
                beauty experience. Our skilled professionals, luxurious ambiance, and
                attention to detail set us apart.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Expert Professionals',
                    desc: 'Our team consists of certified beauty experts with years of experience.',
                  },
                  {
                    title: 'Premium Products',
                    desc: 'We use only high-quality, skin-friendly products for all treatments.',
                  },
                  {
                    title: 'Hygiene First',
                    desc: 'Strict hygiene protocols ensure a safe and clean environment.',
                  },
                  {
                    title: 'Personalized Care',
                    desc: 'Customized treatments tailored to your unique needs and preferences.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-[#2D2A26]">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="/images/happy-clients.jpg"
                  alt="Happy satisfied clients"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/30 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] flex items-center justify-center">
                    <Heart size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading text-[#D4AF37]">5000+</p>
                    <p className="text-gray-600 text-sm">Happy Clients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#F8E8E8] to-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-4">
              <Star size={20} />
              <span className="text-sm tracking-widest uppercase font-medium">Testimonials</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#2D2A26] mb-6">
              What Our{' '}
              <span className="text-[#D4AF37]">Clients Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Here's what our lovely clients have to say
              about their experience at Lavish Look Beauty Lounge.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                review={testimonial.review}
                rating={testimonial.rating}
                service={testimonial.service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-4">
              <Sparkles size={20} />
              <span className="text-sm tracking-widest uppercase font-medium">Our Work</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#2D2A26] mb-6">
              Featured{' '}
              <span className="text-[#D4AF37]">Gallery</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A glimpse of our beautiful work. Every treatment is a masterpiece.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPreviews.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          {/* View Gallery Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View Full Gallery
              <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-[#2D2A26] to-[#4A4640] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Ready to Experience{' '}
              <span className="text-[#D4AF37]">Luxury?</span>
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Book your appointment today and let us pamper you with our premium beauty
              services. Your transformation awaits!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi! I would like to book an appointment at Lavish Look Beauty Lounge.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Calendar size={20} />
                Book Appointment
              </a>
              <a
                href="tel:+917204060412"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;
