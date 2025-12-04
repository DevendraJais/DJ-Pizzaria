import { FaPizzaSlice, FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCcVisa, FaCcMastercard, FaGooglePay, FaApplePay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <footer className="bg-black text-white pt-12 pb-6 border-t-4 border-[#e31837] overflow-hidden shadow-2xl">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 max-w-7xl mx-auto px-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {/* Brand Section */}
          <motion.div 
            className="space-y-5"
            variants={item}
          >
            <div className="flex flex-col items-start space-y-3">
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="p-2 bg-white rounded-full shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaPizzaSlice className="text-[#e31837] text-xl" />
                </motion.div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                  DJ-Pizzaria
                </h3>
              </div>
              <p className="text-gray-300 text-sm">
                Since 2010 - Serving Happiness
              </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting delicious, hand-tossed pizzas with premium ingredients. 
              Your perfect pizza experience starts here.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { 
                  icon: FaFacebookF, 
                  color: 'text-gray-300 hover:text-white hover:bg-[#3b5998]',
                  tooltip: 'Facebook',
                  bg: 'bg-gray-800 hover:bg-[#3b5998]'
                },
                { 
                  icon: FaTwitter, 
                  color: 'text-gray-300 hover:text-white hover:bg-[#1DA1F2]',
                  tooltip: 'Twitter',
                  bg: 'bg-gray-800 hover:bg-[#1DA1F2]'
                },
                { 
                  icon: FaInstagram, 
                  color: 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500',
                  tooltip: 'Instagram',
                  bg: 'bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90'
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${social.bg} ${social.color} transition-all duration-300 shadow-md`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.tooltip}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
            
            {/* Payment Methods */}
            <div className="pt-4">
              <p className="text-sm text-gray-300 mb-2">We Accept:</p>
              <div className="flex space-x-2">
                {[FaCcVisa, FaCcMastercard, FaGooglePay, FaApplePay].map((Icon, i) => (
                  <motion.div 
                    key={i}
                    className="bg-white p-1.5 rounded-md shadow-sm"
                    whileHover={{ y: -3 }}
                  >
                    <Icon className="text-gray-700 text-xl" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            variants={item}
          >
            <h3 className="text-xl font-bold mb-5 text-white relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-yellow-500 after:rounded-full">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Menu', path: '/menu' },
                { name: 'Deals', path: '/deals' },
                { name: 'Track Order', path: '/track-order' },
                { name: 'Locations', path: '/locations' }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-300 flex items-center group text-sm font-medium py-1.5"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            {/* Download App */}
            <div className="mt-6 pt-4 border-t border-gray-600">
              <h4 className="text-sm font-semibold text-white mb-2">Download Our App</h4>
              <div className="space-y-2">
                <motion.a 
                  href="#" 
                  className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium w-full mb-2"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>App Store</span>
                  <FaApplePay className="text-xl" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium w-full"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Google Play</span>
                  <FaGooglePay className="text-xl" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-5"
            variants={item}
          >
            <h3 className="text-lg font-bold text-white relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-[#e31837] after:rounded-full">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <motion.li 
                className="group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-white/10 rounded-full group-hover:bg-[#e31837] transition-colors duration-300">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Our Location</h4>
                    <p className="text-gray-200 text-sm mt-1">123 Pizza Street, Foodie City</p>
                    <p className="text-gray-200 text-sm">FC 12345, India</p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li 
                className="group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <a 
                  href="tel:+919876543210"
                  className="flex items-center space-x-3 group"
                >
                  <div className="p-2 bg-white/10 rounded-full group-hover:bg-[#e31837] transition-colors duration-300">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Call Us</h4>
                    <p className="text-white text-sm mt-1 font-semibold">+91 98765 43210</p>
                  </div>
                </a>
              </motion.li>
              
              <motion.li 
                className="group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <a 
                  href="mailto:info@djpizzaria.com"
                  className="flex items-center space-x-3 group"
                >
                  <div className="p-2 bg-white/10 rounded-full group-hover:bg-[#e31837] transition-colors duration-300">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email Us</h4>
                    <p className="text-gray-200 text-sm mt-1 hover:text-white transition-colors">info@djpizzaria.com</p>
                  </div>
                </a>
              </motion.li>
            </ul>
            </motion.div>

          {/* Opening Hours & App Download */}
          <motion.div 
            className="space-y-5 lg:col-span-2 xl:col-span-1"
            variants={item}
          >
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
