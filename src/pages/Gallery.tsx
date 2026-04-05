import { motion } from 'framer-motion';
import { useState } from 'react';
import { Camera } from 'lucide-react';
import GalleryImage from '../components/GalleryImage';

// EDITABLE: Gallery images - Add or replace images as needed
const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Elegant French Manicure', category: 'Nails' },
  { src: '/images/gallery-2.jpg', alt: 'Glamorous Eye Makeup', category: 'Makeup' },
  { src: '/images/gallery-3.jpg', alt: 'Luxury Skincare Products', category: 'Skin Care' },
  { src: '/images/gallery-4.jpg', alt: 'Professional Hair Styling', category: 'Beauty' },
  { src: '/images/gallery-5.jpg', alt: 'Red Nail Polish Design', category: 'Nails' },
  { src: '/images/gallery-6.jpg', alt: 'Bridal Makeup Look', category: 'Makeup' },
  { src: '/images/gallery-7.jpg', alt: 'Spa Facial Treatment', category: 'Skin Care' },
  { src: '/images/gallery-8.jpg', alt: 'Waxing Beauty Treatment', category: 'Beauty' },
  { src: '/images/nail-art-design.jpg', alt: 'Colorful Nail Art', category: 'Nails' },
  { src: '/images/makeup-brushes.jpg', alt: 'Professional Makeup Tools', category: 'Makeup' },
  { src: '/images/spa-facial.jpg', alt: 'Relaxing Facial Massage', category: 'Skin Care' },
  { src: '/images/beauty-services.jpg', alt: 'Beauty Treatment Session', category: 'Beauty' },
  { src: '/images/nail-services.jpg', alt: 'Professional Manicure', category: 'Nails' },
  { src: '/images/skincare-services.jpg', alt: 'Luxury Facial Treatment', category: 'Skin Care' },
  { src: '/images/makeup-services.jpg', alt: 'Bridal Makeup Artist', category: 'Makeup' },
];

const categories = ['All', 'Nails', 'Makeup', 'Skin Care', 'Beauty'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

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
              <Camera size={20} />
              <span className="text-sm tracking-widest uppercase font-medium">Our Work</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#2D2A26] mb-6">
              Beauty{' '}
              <span className="text-[#D4AF37]">Gallery</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Explore our portfolio of stunning transformations. Every image tells a story
              of beauty, artistry, and attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-white shadow-lg'
                    : 'bg-[#F8E8E8] text-[#2D2A26] hover:bg-[#F5E6D3]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <GalleryImage
                  src={image.src}
                  alt={image.alt}
                  category={image.category}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#F8E8E8] to-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl text-[#2D2A26] mb-6">
              Ready to Create Your{' '}
              <span className="text-[#D4AF37]">Look?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Let our expert team bring your beauty vision to life. Book your appointment
              today and become our next success story.
            </p>
            <a
              href="https://wa.me/917204060412?text=Hi! I would like to book an appointment at Lavish Look Beauty Lounge after seeing your gallery."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book Your Transformation
            </a>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default Gallery;
