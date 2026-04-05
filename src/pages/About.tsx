import { motion } from 'framer-motion';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

// EDITABLE: About page images
const aboutImages = {
  main: '/images/about-service.jpg',
  team: '/images/about-team.jpg',
  salon: '/images/about-salon.jpg',
};

const About = () => {
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
              <Heart size={20} />
              <span className="text-sm tracking-widest uppercase font-medium">About Us</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#2D2A26] mb-6">
              Our{' '}
              <span className="text-[#D4AF37]">Story</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to Lavish Look Beauty Lounge, where beauty meets luxury. We're
              passionate about helping you look and feel your absolute best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl text-[#2D2A26] mb-6">
                A Sanctuary of{' '}
                <span className="text-[#D4AF37]">Beauty & Relaxation</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to create a premium beauty destination, Lavish Look
                  Beauty Lounge has become Bengaluru's go-to salon for those seeking
                  exceptional beauty services in a luxurious setting.
                </p>
                <p>
                  Our journey began with a simple belief: everyone deserves to feel
                  beautiful and confident. Today, we've transformed that belief into a
                  sanctuary where skilled professionals work their magic, using only the
                  finest products and techniques.
                </p>
                <p>
                  From stunning nail art to transformative skincare treatments, from bridal
                  makeup to everyday beauty services, we offer a comprehensive range of
                  services designed to pamper you from head to toe.
                </p>
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
                  src={aboutImages.main}
                  alt="Beauty salon interior"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/30 to-transparent" />
              </div>
              {/* Decorative Border */}
              <div className="absolute -inset-4 border-2 border-[#D4AF37]/20 rounded-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#FDFBF7] to-[#F8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl text-[#2D2A26] mb-4">
              Our Core{' '}
              <span className="text-[#D4AF37]">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Lavish Look Beauty Lounge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Passion',
                desc: 'We love what we do, and it shows in every service we provide.',
              },
              {
                icon: Award,
                title: 'Excellence',
                desc: 'We strive for perfection in every detail, big or small.',
              },
              {
                icon: Users,
                title: 'Customer First',
                desc: 'Your satisfaction and comfort are our top priorities.',
              },
              {
                icon: Sparkles,
                title: 'Innovation',
                desc: 'We stay updated with the latest trends and techniques.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] flex items-center justify-center mx-auto mb-6">
                  <value.icon size={28} className="text-white" />
                </div>
                <h3 className="font-heading text-xl text-[#2D2A26] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={aboutImages.team}
                    alt="Our team"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={aboutImages.salon}
                    alt="Salon ambiance"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/images/spa-facial.jpg"
                    alt="Beauty treatment"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/images/makeup-services.jpg"
                    alt="Makeup service"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl text-[#2D2A26] mb-6">
                Why Choose{' '}
                <span className="text-[#D4AF37]">Lavish Look?</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Professional Team',
                    desc: 'Our beauty experts are certified professionals with extensive training and experience in their respective fields.',
                  },
                  {
                    title: 'Premium Products',
                    desc: 'We use only high-quality, branded products that are safe for your skin and deliver exceptional results.',
                  },
                  {
                    title: 'Hygiene Standards',
                    desc: 'We maintain strict hygiene protocols. All tools are sanitized, and disposable items are used wherever possible.',
                  },
                  {
                    title: 'Relaxing Ambiance',
                    desc: 'Step into our beautifully designed space that instantly puts you at ease and enhances your beauty experience.',
                  },
                  {
                    title: 'Personalized Service',
                    desc: 'We listen to your needs and customize our services to match your preferences and desired outcomes.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-[#2D2A26] mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#F8E8E8] to-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl text-[#2D2A26] mb-4">
              Meet Our{' '}
              <span className="text-[#D4AF37]">Expert Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented team of beauty professionals is dedicated to making you look and
              feel amazing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Expert Stylists',
                role: 'Hair & Makeup',
                image: '/images/about-team.jpg',
              },
              {
                name: 'Skincare Specialists',
                role: 'Facials & Treatments',
                image: '/images/spa-facial.jpg',
              },
              {
                name: 'Nail Artists',
                role: 'Manicure & Nail Art',
                image: '/images/nail-services.jpg',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2D2A26] to-transparent p-6">
                  <h3 className="font-heading text-xl text-white">{member.name}</h3>
                  <p className="text-[#D4AF37]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default About;
