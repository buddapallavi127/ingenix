import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DynamicTagline from './DynamicTagline';

const codeExamples = [
  `// AI Agent Orchestration
const aiSolution = await Ingenix.deploy({
  agents: ["dataAnalysis", "prediction", "recommendation"],
  integration: "yourAPI",
  mode: "autonomous"
});`,
  
  `// Voice AI Implementation
const voiceAssistant = new Ingenix.VoiceAI({
  languages: ["en", "hi", "es"],
  capabilities: ["customerSupport", "dataRetrieval"],
  trainingData: customerInteractions
});`,
  
  `// Predictive Analytics Engine
const forecast = await Ingenix.predictivEngine
  .trainOnData(historicalData)
  .optimizeParameters()
  .generateForecast({
    horizon: "6months",
    confidence: 0.95
  });`
];

// Counter animation component
const AnimatedCounter = ({ value, suffix = "", prefix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    const startValue = 0;
    const endValue = Number(value);
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * (endValue - startValue) + startValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };
    
    window.requestAnimationFrame(step);
    
    return () => setCount(0);
  }, [value, duration]);
  
  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
};

const Hero = () => {
  const [codeIndex, setCodeIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCodeIndex((prevIndex) => (prevIndex + 1) % codeExamples.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Stats data
  const stats = [
    { value: 94, suffix: "%", label: "Accuracy Rate" },
    { value: 3.5, suffix: "x", label: "Business Growth" },
    { value: 30, suffix: "%", label: "Time Saved" }
  ];

  return (
    <div className="relative overflow-hidden bg-[#12121e] text-white">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-[#6E59A5]/20 to-[#8B5CF6]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-32 right-0 w-96 h-96 bg-gradient-to-tl from-[#0EA5E9]/20 to-[#8B5CF6]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-[#E5DEFF] to-[#6E59A5]/10 rounded-full filter blur-3xl opacity-40"></div>
        
        {/* Code pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}></div>
        </div>

        {/* Animated dots */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animation: `pulse ${Math.random() * 5 + 2}s infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-28 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 pb">
                <span className="text-gray-100">Revolutionizing Business Through </span>
                <DynamicTagline />
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              Empowering enterprises with cutting-edge AI solutions, voice automation, multi-agent systems, and next-gen analytics.
            </motion.p>
            
            {/* Stats Row */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-10 max-w-lg mx-auto lg:mx-0"
              variants={itemVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-3 rounded-lg bg-[#1a1a2e]/70 backdrop-blur-sm border border-[#6E59A5]/30"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(110, 89, 165, 0.3)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-[#8B5CF6] mb-1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix} 
                      duration={2.5 + index * 0.5} 
                    />
                  </motion.div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Link to="/solutions">
                <Button size="lg" className="bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#6E59A5] transition-all duration-500 text-white shadow-lg">
                  Discover Our Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
             
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-[#6E59A5]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-[#0EA5E9]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#8B5CF6]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
              
              <motion.div 
                className="relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-center gap-2 bg-gray-900 px-4 py-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-400 ml-2">ingenix-ai-solutions.js</span>
                </div>
                
                <motion.div 
                  className="p-6 font-mono text-sm"
                  key={codeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <pre className="text-green-400 whitespace-pre-wrap">{codeExamples[codeIndex]}</pre>
                </motion.div>
                
                <div className="bg-gray-900 text-right text-gray-500 text-xs p-2">
                  <span>AI Innovations by Ingenix</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
