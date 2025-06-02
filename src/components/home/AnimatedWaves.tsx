
import { motion } from 'framer-motion';

const AnimatedWaves = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Wave 1 */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32"
        animate={{
          x: [0, -100, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="none"
        >
          <motion.path
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
            fill="url(#wave1)"
            animate={{
              d: [
                "M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z",
                "M0,80 C150,20 350,100 600,40 C850,20 1050,100 1200,80 L1200,120 L0,120 Z",
                "M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6E59A5" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#6E59A5" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Wave 2 */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-24"
        animate={{
          x: [0, 100, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="none"
        >
          <motion.path
            d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,120 L0,120 Z"
            fill="url(#wave2)"
            animate={{
              d: [
                "M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,120 L0,120 Z",
                "M0,60 C200,0 400,80 600,20 C800,0 1000,80 1200,60 L1200,120 L0,120 Z",
                "M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#6E59A5" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Wave 3 */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-20"
        animate={{
          x: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="none"
        >
          <motion.path
            d="M0,20 C300,60 600,0 900,30 C1050,45 1150,15 1200,20 L1200,120 L0,120 Z"
            fill="url(#wave3)"
            animate={{
              d: [
                "M0,20 C300,60 600,0 900,30 C1050,45 1150,15 1200,20 L1200,120 L0,120 Z",
                "M0,35 C300,0 600,50 900,15 C1050,5 1150,40 1200,35 L1200,120 L0,120 Z",
                "M0,20 C300,60 600,0 900,30 C1050,45 1150,15 1200,20 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6E59A5" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6E59A5" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};

export default AnimatedWaves;
