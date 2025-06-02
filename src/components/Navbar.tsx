import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use non-breaking spaces to keep link text on one line
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About\u00A0Us', path: '/about' },
    { name: 'AI\u00A0Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      className="fixed w-full z-50 top-0"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div 
        className={`mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 ease-out ${
          scrolled 
            ? 'max-w-4xl mt-3 bg-[#12121e]/70 backdrop-blur-xl rounded-full border border-[#6E59A5]/30 shadow-2xl shadow-[#6E59A5]/20' 
            : 'max-w-7xl bg-transparent mt-0'
        }`}
        animate={{ scale: scrolled ? 0.9 : 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-12' : 'h-20'}`}>
          <motion.div 
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center">
              <motion.span 
                className="text-2xl font-bold text-[#6E59A5]"
                animate={{ 
                  textShadow: scrolled ? "0px 0px 8px rgba(110, 89, 165, 0.6)" : "none",
                  fontSize: scrolled ? "1.2rem" : "1.5rem"
                }}
                transition={{ duration: 0.5 }}
              >
                Ingenix
              </motion.span>
              <motion.span 
                className="text-2xl font-medium ml-1 text-white"
                animate={{ 
                  fontSize: scrolled ? "1.2rem" : "1.5rem"
                }}
                transition={{ duration: 0.5 }}
              >
                Innovations
              </motion.span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            {/* Add flex-nowrap to prevent wrapping */}
            <div className="ml-10 flex items-center space-x-4 flex-nowrap">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2, scale: 1.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`relative px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap
                        ${isActive 
                          ? 'text-[#8B5CF6]'
                          : 'text-gray-300 hover:text-white'
                        }
                        ${scrolled ? 'text-xs px-2 py-1' : 'text-sm px-3 py-2'}
                      `}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">
                  <Button 
                    className={`ml-3 bg-[#8B5CF6] hover:bg-[#6E59A5] rounded-full transition-all duration-300 ${
                      scrolled ? 'text-xs px-3 py-1 h-8' : 'text-sm px-6 py-3'
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center rounded-full text-gray-300 hover:text-white hover:bg-[#6E59A5]/20 focus:outline-none transition-all duration-300 ${
                scrolled ? 'p-1' : 'p-2'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={scrolled ? 16 : 20} /> : <Menu size={scrolled ? 16 : 20} />}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={`md:hidden mx-4 mt-2 rounded-3xl border border-[#6E59A5]/30 shadow-2xl backdrop-blur-xl ${
              scrolled ? 'bg-[#12121e]/70' : 'bg-[#12121e]/95'
            }`}
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 text-base font-medium rounded-full transition-all duration-300 whitespace-nowrap
                        ${isActive 
                          ? 'text-[#8B5CF6]'
                          : 'text-gray-300 hover:text-white hover:bg-[#6E59A5]/20'
                        }
                      `}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-2"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#8B5CF6] hover:bg-[#6E59A5] rounded-full">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
