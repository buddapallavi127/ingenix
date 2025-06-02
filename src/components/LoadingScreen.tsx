import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Mic, TrendingUp } from 'lucide-react'; // Import Lucide icons

interface LoadingScreenProps {
  isLoading: boolean;
  actualProgress: number; // To be provided by the parent component
}

// Updated icons using lucide-react
const icons = [
  {
    key: "brain",
    // Reduced icon size and adjusted strokeWidth if needed for visual balance
    component: <Brain size={64} className="text-violet-400" strokeWidth={1.5} /> 
  },
  {
    key: "mic",
    component: <Mic size={64} className="text-violet-400" strokeWidth={1.5} />
  },
  {
    key: "trending-up",
    component: <TrendingUp size={64} className="text-violet-400" strokeWidth={1.5} />
  }
];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, actualProgress }) => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      // Optional: reset icon index if needed when loading finishes
      // setCurrentIconIndex(0); 
      return;
    }
    
    // All three icons appear in 2 seconds (2000ms / 3 icons = ~667ms per icon)
    const iconInterval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 667); // Interval for changing the icon

    return () => {
      clearInterval(iconInterval);
    };
  }, [isLoading]);

  // Ensure progress is within 0-100 bounds
  const displayProgress = Math.min(100, Math.max(0, actualProgress));

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background Blur */}
          <div className="absolute inset-0 w-full h-full backdrop-blur-md bg-slate-900/70"></div> {/* Slightly adjusted blur/opacity */}
          
          <div className="relative flex flex-col items-center gap-6 z-10"> {/* Reduced gap from 12 to 6 */}
            
            <AnimatePresence mode="wait">
              <motion.div
                key={icons[currentIconIndex].key}
                initial={{ scale: 0.8, opacity: 0 }} // Start slightly smaller and faded
                animate={{ scale: 1, opacity: 1 }}   // Animate to full size and opacity
                exit={{ scale: 0.8, opacity: 0 }}    // Exit by shrinking and fading
                transition={{
                  duration: 0.33, // Duration for the morph effect (fits within 667ms interval)
                  ease: "easeInOut"
                }}
              >
                {icons[currentIconIndex].component}
              </motion.div>
            </AnimatePresence>

            {/* Loading Text - Smaller and less prominent */}
            <motion.div
              className="text-violet-300 text-xl font-normal tracking-wide" // Smaller text, normal weight
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }} // Adjusted timing slightly
            >
              Loading...
            </motion.div>

            {/* Progress Bar - Slightly narrower */}
            <div className="w-64 h-1.5 bg-slate-600/70 rounded-full overflow-hidden"> {/* Narrower bar, slightly thinner */}
              <motion.div
                className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${displayProgress}%` }}
                transition={{ duration: 0.15, ease: "linear" }} // Slightly faster progress update visually
              />
            </div>

            {/* Progress Percentage - Smaller text, closer to the bar (implicitly by parent gap reduction) */}
            <motion.div
              className="text-violet-400 text-sm font-mono" // Smaller percentage text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }} // Adjusted timing
            >
              {Math.round(displayProgress)}% 
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
