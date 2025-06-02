
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const taglines = [
  "AI Innovation",
  "Smart Automation",
  "Intelligent Solutions", 
  "Digital Transformation",
  "Future Technology"
];

const DynamicTagline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-24 item-center justify-center items-center">
    {}
     <span className="invisible absolute">
    Digital Transformation
  </span>
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        initial={{ 
          opacity: 0, 
          y: 20,
          rotateX: 90 
        }}
        animate={{ 
          opacity: 1, 
          y: 0,
          rotateX: 0 
        }}
        exit={{ 
          opacity: 0, 
          y: -20,
          rotateX: -90 
        }}
        transition={{ 
          duration: 0.6,
          ease: "easeInOut"
        }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] inline-block pb-2"
        style={{ transformOrigin: "center center" }}
      >
        {taglines[currentIndex]}
      </motion.span>
    </AnimatePresence>
    </div>
  );
};

export default DynamicTagline;
