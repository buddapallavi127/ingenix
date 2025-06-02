import { motion } from 'framer-motion';
import { useState } from 'react';
import IndustryModal from './IndustryModal';
import {
  Heart, DollarSign, ShoppingCart, Truck, GraduationCap, BarChart, Sparkles
} from 'lucide-react';

const industries = [
  {
    name: 'Healthcare',
    icon: Heart,
    description: 'AI-powered diagnosis, medical imaging analysis, and intelligent patient interaction systems.',
    genAI: 'Medical report generation, Virtual health assistants',
    color: 'from-pink-500 to-rose-400'
  },
  {
    name: 'Finance',
    icon: DollarSign,
    description: 'Advanced risk scoring, fraud detection systems, and Agentic AI-powered robo-advisors.',
    genAI: 'Financial document analysis, Market trend prediction',
    color: 'from-green-400 to-emerald-500'
  },
  {
    name: 'Retail & E-commerce',
    icon: ShoppingCart,
    description: 'Personalized recommendation engines, chatbots, and customer experience optimization.',
    genAI: 'Product description generation, Virtual product showcasing',
    color: 'from-blue-400 to-sky-500'
  },
  {
    name: 'Logistics',
    icon: Truck,
    description: 'Intelligent route optimization, warehouse automation, and supply chain enhancement.',
    genAI: 'Supply chain scenario generation, Shipping documentation automation',
    color: 'from-yellow-400 to-amber-500'
  },
  {
    name: 'EdTech',
    icon: GraduationCap,
    description: 'Personalized learning systems, test analysis, and virtual teaching assistants.',
    genAI: 'Personalized learning content, Interactive tutoring dialogue',
    color: 'from-purple-400 to-indigo-500'
  },
  {
    name: 'Digital Marketing',
    icon: BarChart,
    description: 'AI-driven campaign optimization, customer segmentation, and predictive analytics.',
    genAI: 'Ad copy generation, Content creation and optimization',
    color: 'from-cyan-400 to-teal-500'
  },
];

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (industry) => {
    setSelectedIndustry(industry);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedIndustry(null);
    setIsModalOpen(false);
  };

  return (
    <section className="bg-[#0d0d15] pb-24 pt-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute w-96 h-96 bg-[#8B5CF6]/20 blur-3xl rounded-full -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-[#6E59A5]/20 blur-3xl rounded-full -bottom-20 -right-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-center text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Industries We <span className="bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] text-transparent bg-clip-text">Serve</span>
        </motion.h2>

        <motion.p 
          className="text-gray-400 max-w-2xl text-center mx-auto text-lg mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We deliver specialized AI solutions across sectors to solve complex real-world problems.
        </motion.p>

        {/* Card Container with Stagger */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition cursor-pointer"
              onClick={() => openModal(industry)}
            >
              <div className="flex items-center gap-5 mb-6">
                <div className={`p-4 rounded-full bg-gradient-to-br ${industry.color}`}>
                  <industry.icon className="text-white h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
              </div>
              <p className="text-gray-300 text-base mb-6 leading-relaxed">{industry.description}</p>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#8B5CF6] mt-1" />
                <div>
                  <p className="text-base text-[#8B5CF6] font-semibold mb-1">Generative AI</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{industry.genAI}</p>
                </div>
              </div>
              <div className="mt-8 text-right">
  <motion.button
    className="relative text-sm font-medium text-white bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
    whileHover={{
      scale: 1.03,
      background: "linear-gradient(45deg, #8B5CF6, #6E59A5)"
    }}
    whileTap={{ scale: 0.98 }}
  >
    <span className="relative z-10 flex items-center justify-center gap-2">
      Learn More
      <motion.span
        initial={{ x: 0 }}
        animate={{ x: 5 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1
        }}
        className="inline-block"
      >
        →
      </motion.span>
    </span>
    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.button>
</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <IndustryModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        industry={selectedIndustry}
      />
    </section>
  );
};

export default Industries;
