import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Clock, Send, MessageCircle, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumber = '917204060412';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create WhatsApp message with form data
    const message = `Hi! I'm ${formData.name}.\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

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
              <MapPin size={20} />
              <span className="text-sm tracking-widest uppercase font-medium">Contact Us</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#2D2A26] mb-6">
              Get in{' '}
              <span className="text-[#D4AF37]">Touch</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              We'd love to hear from you! Visit us, call us, or send us a message.
              We're here to make your beauty dreams come true.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl text-[#2D2A26] mb-8">
                Visit Our{' '}
                <span className="text-[#D4AF37]">Salon</span>
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-[#2D2A26] mb-1">Address</h3>
                    <p className="text-gray-600">
                      30, Subhash Chandra Bose Rd, Kadarenahalli,<br />
                      Bendre Nagar, Bengaluru, Karnataka 560070
                    </p>
                    <a
                      href="https://maps.google.com/?q=30,+Subhash+Chandra+Bose+Rd,+Kadarenahalli,+Bendre+Nagar,+Bengaluru,+Karnataka+560070"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-[#D4AF37] font-medium hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-[#2D2A26] mb-1">Phone</h3>
                    <a
                      href="tel:+917204060412"
                      className="text-gray-600 hover:text-[#D4AF37] transition-colors"
                    >
                      +91 72040 60412
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Click to call</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-[#2D2A26] mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi! I would like to know more about Lavish Look Beauty Lounge.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#25D366] transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Quick response guaranteed</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-[#2D2A26] mb-1">Working Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                      <p>Sunday: 11:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+917204060412"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi! I would like to book an appointment at Lavish Look Beauty Lounge.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#FDFBF7] rounded-3xl p-8 shadow-lg">
                <h2 className="font-heading text-2xl text-[#2D2A26] mb-6">
                  Send Us a{' '}
                  <span className="text-[#D4AF37]">Message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-[#F5E6D3] rounded-xl focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-[#F5E6D3] rounded-xl focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-[#F5E6D3] rounded-xl focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-white py-4 rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    <Send size={18} />
                    {isSubmitting ? 'Sending...' : 'Send via WhatsApp'}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    This will open WhatsApp with your message pre-filled
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.890123456789!2d77.5890!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA2LjciTiA3N8KwMzUnMjAuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lavish Look Beauty Lounge Location"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
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
              Book Your{' '}
              <span className="text-[#D4AF37]">Appointment</span>
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Ready to experience luxury beauty services? Book your appointment now and
              let us pamper you!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi! I would like to book an appointment at Lavish Look Beauty Lounge.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Calendar size={20} />
                Book via WhatsApp
              </a>
              <a
                href="tel:+917204060412"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Phone size={20} />
                Call to Book
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default Contact;
