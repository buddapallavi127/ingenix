import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Cog, Repeat } from "lucide-react";
import { useEffect, useState } from "react";
// import Link from '@/pages/Contact'; // Assuming you're using Next.js for routing
import { Link } from 'react-router-dom'; // Keep this import

const CustomSolutionsSection = () => {
  const features = [
    {
      icon: <Lightbulb className="h-7 w-7 text-[#8B5CF6]" />,
      title: "Needs Assessment",
      desc: "We begin with a thorough analysis of your industry's specific challenges and opportunities.",
    },
    {
      icon: <Cog className="h-7 w-7 text-[#8B5CF6]" />,
      title: "Solution Design",
      desc: "Our experts craft AI solutions tailored to the unique requirements of your business sector.",
    },
    {
      icon: <Repeat className="h-7 w-7 text-[#8B5CF6]" />,
      title: "Iterative Development",
      desc: "We build, test, and refine your solution to ensure it addresses your specific industry needs.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isHovered, features.length]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative bg-[#0f0f1b] border border-[#6e59a5] rounded-2xl shadow-md p-6 md:p-10 mb-16 max-w-6xl mx-auto"
    >
      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#c084fc]">
          Custom Solutions for Your Industry
        </h3>
        <p className="text-gray-300 mt-2 text-lg max-w-2xl mx-auto">
          Don't see your industry listed? Our team has experience working across
          many sectors, and we specialize in developing custom AI solutions for
          unique business challenges.
        </p>
      </div>

      <div className="relative h-[260px] sm:h-[220px] md:h-[200px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex justify-center items-center"
          >
            <div
              className="w-full max-w-4xl bg-[#12121e] border border-gray-800 rounded-xl p-6 sm:p-8 md:p-10 mx-auto relative overflow-hidden transition-all duration-300 hover:border-[#c084fc]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Inner glow overlay */}
              <div
                className={`pointer-events-none absolute inset-0 rounded-xl blur-3xl opacity-0 transition-opacity duration-500 ${
                  isHovered
                    ? "opacity-20 bg-gradient-to-tr from-[#8B5CF6] via-[#c084fc] to-[#8B5CF6]"
                    : ""
                }`}
              />

              {/* Actual content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 sm:gap-5 mb-4">
                  <div className="p-3 bg-[#6E59A5]/20 rounded-lg">
                    {features[current].icon}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-white">
                    {features[current].title}
                  </h4>
                </div>
                <p className="text-gray-400 text-lg sm:text-xl">
                  {features[current].desc}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Consultation Button */}
     {/* Consultation Button */}
<div className="text-center mt-10">
  <Link to="/contact"> {/* Wrap the button with Link */}
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-[#8B5CF6] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#c084fc] transition duration-300 ease-in-out"
    >
      Schedule a Consultation
    </motion.button>
  </Link>
</div>
     
    </motion.section>
  );
};

export default CustomSolutionsSection;