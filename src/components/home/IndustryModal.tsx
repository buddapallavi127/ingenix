import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

interface IndustryModalProps {
  isOpen: boolean;
  onClose: () => void;
  industry: {
    name: string;
    icon: React.ComponentType<any>;
    description: string;
    color: string;
    iconColor?: string;
    gradient: string;
    genAI: string;
  } | null;
}

const iconAnimation = {
  initial: { scale: 0.9, rotate: -5 },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      yoyo: Infinity,
      repeatDelay: 2,
    },
  },
};

const IndustryModal = ({ isOpen, onClose, industry }: IndustryModalProps) => {
  if (!industry) return null;

  const IconComponent = industry.icon;
  const iconColorClass = industry.iconColor || "text-white";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-[#1a1a2e] rounded-2xl border border-gray-700 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-lg"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gradient bar top */}
              <div className={`h-3 rounded-t-2xl bg-gradient-to-r ${industry.color}`} />

              <div className="p-6 relative">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors shadow"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-white" />
                </button>

                {/* Icon + Name */}
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br ${industry.color} shadow-md`}
                    variants={iconAnimation}
                    initial="initial"
                    animate="animate"
                  >
                    <IconComponent className={`h-8 w-8 ${iconColorClass}`} />
                  </motion.div>
                  <h2 className="ml-4 text-2xl font-bold text-white tracking-tight drop-shadow">
                    {industry.name}
                  </h2>
                </div>

                {/* Overview */}
                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2 border-b border-gray-700 pb-1">
                    Overview
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">{industry.description}</p>
                </section>

                {/* Generative AI */}
                <section className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="h-5 w-5 text-[#8B5CF6]" />
                    <h3 className="text-lg font-semibold text-[#8B5CF6]">Generative AI Solutions</h3>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed">{industry.genAI}</p>
                </section>

                {/* Key Benefits */}
                <section>
                  <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-1">
                    Key Benefits
                  </h3>
                  <ul className="space-y-3 text-gray-300 list-disc list-inside ml-5 text-base">
                    <li>Increased operational efficiency and automation</li>
                    <li>Enhanced decision-making with data-driven insights</li>
                    <li>Reduced costs and improved ROI</li>
                    <li>Scalable solutions that grow with your business</li>
                  </ul>
                </section>

                {/* Footer */}
               
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default IndustryModal;
