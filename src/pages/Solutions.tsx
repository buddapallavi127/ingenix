import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Mic, Users, TrendingUp, Sparkles, Settings, ArrowRight, Zap, FileJson, Laptop, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

const solutionTypes = [
  {
    id: 'ai-consulting',
    name: 'AI Consulting',
    icon: Brain,
    description: 'Strategic roadmaps, use case identification, and technology selection tailored to your business objectives.',
    features: [
      'AI Maturity Assessment',
      'Technology Stack Recommendations',
      'Strategic Implementation Roadmap',
      'ROI Analysis & Business Case Development',
      'Workshops & Capability Building'
    ],
    benefits: [
      'Accelerated AI adoption',
      'Reduced implementation risks',
      'Clear ROI measurement framework',
      'Technology-agnostic recommendations'
    ],
    animation: {
      icon: '🧠',
      color: '#8B5CF6'
    },
    imageUrl: 'https://www.impactmybiz.com/_next/image/?url=https%3A%2F%2Fres.cloudinary.com%2Fdlpitjizv%2Fimage%2Fupload%2Ff_auto%2Fv1724101401%2Fimpact%2F20240708_AI_Solution_Webpage_Blog_Hero_M_fd2ddab21e.jpg&w=3840&q=75',
    genAIUseCase: [
      'Strategic AI Roadmapping',
      'Capability Gap Analysis',
      'AI Governance Framework',
      'Use Case Prioritization'
    ]
  },
  {
    id: 'voice-ai',
    name: 'Voice AI',
    icon: Mic,
    description: 'Natural language customer support with multilingual capabilities and seamless call center integration.',
    features: [
      'Multilingual Voice Processing',
      'Natural Conversation Flow',
      'Custom Voice Development',
      'Call Center Integration',
      'Voice Biometrics & Authentication'
    ],
    benefits: [
      '24/7 customer support',
      'Reduced call wait times',
      'Consistent service quality',
      'Seamless language switching'
    ],
    animation: {
      icon: '🎤',
      color: '#6E59A5'
    },
    imageUrl: 'https://murf.ai/resources/media/posts/4/voice-ai.jpeg',
    genAIUseCase: [
      'Virtual Assistants',
      'Interactive Voice Response',
      'Voice Authentication',
      'Sentiment Analysis'
    ]
  },
  {
    id: 'agentic-ai',
    name: 'Agentic AI',
    icon: Users,
    description: 'Advanced agent orchestration and collaboration enabling complex workflows and automated decision making.',
    features: [
      'Autonomous Agent Development',
      'Multi-Agent Orchestration',
      'Agent Specialization',
      'Human-in-the-Loop Workflows',
      'Reinforcement Learning from Feedback'
    ],
    benefits: [
      'Complex task automation',
      'Emergent problem-solving capabilities',
      'Continuous self-improvement',
      'Scalable decision-making systems'
    ],
    animation: {
      icon: '🤖',
      color: '#3B82F6'
    },
    imageUrl: 'https://viscovery.com/wp-content/uploads/2024/08/AI-Agentic-Workflow-Banner.webp',
    genAIUseCase: [
      'Autonomous Workflow Agents',
      'Multi-Agent Collaboration',
      'Decision Support Systems',
      'Intelligent Process Automation'
    ]
  },
  {
    id: 'predictive',
    name: 'Predictive Analytics',
    icon: TrendingUp,
    description: 'Business forecasting, customer churn models, and risk scoring engines powered by machine learning.',
    features: [
      'Advanced Forecasting Models',
      'Anomaly Detection',
      'Customer Lifetime Value Prediction',
      'Supply Chain Optimization',
      'Risk Assessment Engines'
    ],
    benefits: [
      'Data-driven decision making',
      'Proactive issue mitigation',
      'Resource optimization',
      'Improved planning accuracy'
    ],
    animation: {
      icon: '📈',
      color: '#10B981'
    },
    imageUrl: 'https://www.hdatasystems.com/assets/uploads/banner/1639602922.jpg',
    genAIUseCase: [
      'Demand Forecasting',
      'Churn Prediction',
      'Inventory Optimization',
      'Risk Assessment'
    ]
  },
  {
    id: 'generative',
    name: 'Generative AI Solutions',
    icon: Sparkles,
    description: 'Custom AI integration, content generation, avatar synthesis, and video generation capabilities.',
    features: [
      'Custom LLM Fine-Tuning',
      'Digital Human Creation',
      'Synthetic Content Generation',
      'Knowledge Base Integration',
      'RAG Implementation'
    ],
    benefits: [
      'Personalized content at scale',
      'Consistent brand messaging',
      'Reduced content production costs',
      'Enhanced customer engagement'
    ],
    animation: {
      icon: '✨',
      color: '#6E59A5'
    },
    imageUrl: 'https://www.bpifrance.com/storage/sites/7/2024/06/IA-Generative-dans-les-entreprises.png',
    genAIUseCase: [
      'Content Generation',
      'Product Design Assistance',
      'Custom Chatbots',
      'Synthetic Data Generation',
      'Creative Ideation',
      'Document Analysis',
      'Code Generation',
      'Knowledge Base Construction'
    ]
  },
  {
    id: 'automation',
    name: 'Process Automation',
    icon: Settings,
    description: 'End-to-end workflow automation with human-in-the-loop optimization and document processing.',
    features: [
      'Intelligent Document Processing',
      'Custom Workflow Design',
      'Human-in-the-Loop Integration',
      'Analytics & Reporting',
      'Legacy System Integration'
    ],
    benefits: [
      'Reduced operational costs',
      'Minimized manual errors',
      'Increased process consistency',
      'Improved employee productivity'
    ],
    animation: {
      icon: '⚙',
      color: '#6366F1'
    },
    imageUrl: 'https://automate.fortra.com/sites/default/files/2022-07/am-what-is-intelligent-process-automation-blog-header-2000x1000.jpeg',
    genAIUseCase: [
      'Document Processing',
      'Workflow Optimization',
      'Intelligent Routing',
      'Exception Handling'
    ]
  }
];

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState('ai-consulting');
  const [hoverItem, setHoverItem] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRefs = useRef({});
  
  const solution = solutionTypes.find(s => s.id === selectedSolution);
  const controls = useAnimationControls();
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  useEffect(() => {
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
    });
  }, [controls, selectedSolution]);
  
  // Set up refs for each solution section
  useEffect(() => {
    solutionTypes.forEach(solution => {
      sectionRefs.current[solution.id] = document.getElementById(solution.id);
    });
  }, []);
  
  // Handle URL hash changes and tab activation
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && solutionTypes.some(s => s.id === hash)) {
      setSelectedSolution(hash);
      
      // Scroll to section after content renders
      setTimeout(() => {
        const element = sectionRefs.current[hash];
        if (element) {
          const headerOffset = 120; // Adjust this value based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.hash, location.pathname]);

  const handleTabChange = (newValue: string) => {
    setSelectedSolution(newValue);
    navigate(`#${newValue}`, { replace: true });
    
    // Scroll to section with offset
    setTimeout(() => {
      const element = sectionRefs.current[newValue];
      if (element) {
        const headerOffset = 120; // Same as above
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const renderFloatingParticles = (count = 8, color = "#8B5CF6") => {
    return Array(count).fill(0).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          backgroundColor: color,
          width: Math.random() * 6 + 3,
          height: Math.random() * 6 + 3,
        }}
        initial={{ 
          x: Math.random() * 300 - 150, 
          y: Math.random() * 300 - 150,
          opacity: Math.random() * 0.3 + 0.1
        }}
        animate={{ 
          x: Math.random() * 300 - 150, 
          y: Math.random() * 300 - 150,
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: Math.random() * 15 + 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    ));
  };

  const genAIIcons = [
    { icon: <Bot className="h-12 w-12" />, label: "Conversational AI" },
    { icon: <Sparkles className="h-12 w-12" />, label: "Content Generation" },
    { icon: <FileJson className="h-12 w-12" />, label: "Data Synthesis" },
    { icon: <Laptop className="h-12 w-12" />, label: "Interactive Agents" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#12121e] text-white">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-r from-[#1a1a2e] to-[#0c0c14] py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#6E59A5]/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#8B5CF6]/10 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative text-center"
            >
              <motion.h1 
                className="text-3xl sm:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white">AI</span> <span className="text-purple-400">Solutions</span>
              </motion.h1>
              
              <motion.p 
                className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Our comprehensive suite of AI solutions designed to transform your business operations and drive innovation.
              </motion.p>
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
            <motion.div
              className="flex"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear"
              }}
            >
              {[...Array(3)].map((_, i) => (
                <svg
                  key={i}
                  className="w-[100vw] h-[150px] min-w-[100vw]"
                  viewBox="0 0 1200 150"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,60 C200,120 400,0 600,60 S1000,0 1200,60 V150 H0 Z"
                    fill="#1e1b4b"
                    className="opacity-90"
                  />
                  <path
                    d="M0,60 C200,120 400,0 600,60 S1000,0 1200,60"
                    stroke="#6d28d9"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              ))}
            </motion.div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {renderFloatingParticles(15, solution?.animation.color)}
          </div>
          
          <div className="mb-12">
            <Tabs value={selectedSolution} onValueChange={handleTabChange}>
              <TabsList className="flex flex-wrap justify-center gap-x-10 gap-y-2 bg-[#1a1a2e] p-2 px-2 sm:px-4 md:px-6 rounded-lg h-auto">
                {solutionTypes.map((solution) => (
                  <TabsTrigger 
                    key={solution.id} 
                    value={solution.id}
                    className="data-[state=active]:bg-[#6E59A5] data-[state=active]:text-white px-3 py-2 sm:px-4"
                  >
                    <solution.icon className="h-4 w-4 mr-2" />
                    <motion.span
                      className="whitespace-nowrap bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(to right, currentColor 20%, #FFFFFF 50%, currentColor 80%)`,
                        backgroundSize: '300% 100%',
                        backgroundPosition: 'center',
                      }}
                    >
                      {solution.name}
                    </motion.span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <AnimatePresence mode="wait">
                {solutionTypes.map((solution) => (
                  <TabsContent key={solution.id} value={solution.id}>
                    <motion.div 
                      id={solution.id}
                      ref={el => sectionRefs.current[solution.id] = el}
                      className="mt-8 grid md:grid-cols-2 gap-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ scrollMarginTop: "120px" }}
                    >
                      {/* Rest of your solution content remains the same */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                      >
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] flex items-center leading-normal pb-1">
                            <solution.icon className="h-8 w-8 mr-3 text-[#8B5CF6]" />
                            {solution.name}
                          </h2>
                          <p className="text-gray-300 text-base md:text-lg">{solution.description}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">Key Features</h3>
                          <ul className="space-y-2">
                            {solution.features.map((feature, index) => (
                              <motion.li 
                                key={index} 
                                className="flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ x: 5, color: solution.animation.color }}
                              >
                                <span className="text-[#8B5CF6] mr-2">•</span>
                                <span className="text-gray-300">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">Business Benefits</h3>
                          <ul className="space-y-2">
                            {solution.benefits.map((benefit, index) => (
                              <motion.li 
                                key={index} 
                                className="flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                                whileHover={{ x: 5, color: "#10B981" }}
                              >
                                <span className="text-green-500 mr-2">✓</span>
                                <span className="text-gray-300">{benefit}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-4">
                          <Link to="/contact">
                            <Button className="bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#6E59A5]">
                              Schedule a Consultation
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center justify-center h-full"
                      >
                        {/* Rest of your solution image/animation content */}
                        <motion.div 
                          className="flex flex-col items-center min-h-[30rem] w-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="w-full flex flex-col items-center">
                            <motion.div 
                              className="mb-4 relative w-full max-w-sm h-auto aspect-[4/3]"
                              style={{ filter: `drop-shadow(0 10px 15px ${solution.animation.color}20)` }}
                            >
                              {solution.imageUrl ? (
                                <img 
                                  src={solution.imageUrl} 
                                  alt={solution.name} 
                                  className="w-full h-full object-cover rounded-lg"
                                  style={{ filter: 'brightness(0.8)' }}
                                />
                              ) : (
                                <span className="text-6xl">{solution.animation.icon}</span>
                              )}
                              <motion.div
                                className="absolute inset-0 rounded-lg pointer-events-none"
                                animate={{ 
                                  boxShadow: [
                                    `0 0 15px 7px ${solution.animation.color}15`,
                                    `0 0 25px 12px ${solution.animation.color}25`,
                                    `0 0 15px 7px ${solution.animation.color}15`
                                  ]
                                }}
                                transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                                style={{ display: solution.imageUrl ? 'block' : 'none' }}
                              />
                            </motion.div>
                          
                            <div className="text-center mb-2">
                              <motion.h3 
                                className="text-xl md:text-2xl font-bold mb-2 leading-normal pb-1"
                                style={{ color: solution.animation.color }}
                              >
                                {solution.name}
                              </motion.h3>
                            </div>
                          </div>

                          {/* Animation specific to each solution type */}
                          {solution.id === 'ai-consulting' && (
                            <motion.div 
                              className="mt-4 flex justify-center w-full"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                            >
                              <motion.div 
                                className="h-1 w-32 bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] rounded-full"
                                animate={{ width: ["0%", "70%", "30%", "90%", "60%"] }}
                                transition={{ duration: 3, repeat: Infinity }}
                              />
                            </motion.div>
                          )}
                          
                          {solution.id === 'voice-ai' && (
                            <motion.div 
                              className="mt-4 flex justify-center w-full"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                            >
                              {[...Array(9)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="w-1 h-10 mx-1 bg-[#6E59A5] rounded-full"
                                  animate={{ 
                                    height: [10, 30, 15, 40, 10],
                                  }}
                                  transition={{ 
                                    duration: 1.5, 
                                    delay: i * 0.15,
                                    repeat: Infinity,
                                  }}
                                />
                              ))}
                            </motion.div>
                          )}
                          
                          {solution.id === 'agentic-ai' && (
                            <motion.div className="mt-4 flex justify-center space-x-6 w-full"
                            >
                              {[...Array(3)].map((_, i) => (
                                <motion.div 
                                  key={i}
                                  className="w-8 h-8 rounded-full bg-[#8B5CF6]"
                                  animate={{ 
                                    y: [0, -15, 0],
                                    x: [0, i === 0 ? -15 : i === 2 ? 15 : 0, 0]
                                  }}
                                  transition={{ 
                                    duration: 2,
                                    delay: i * 0.3,
                                    repeat: Infinity
                                  }}
                                />
                              ))}
                            </motion.div>
                          )}
                          
                          {solution.id === 'predictive' && (
                            <motion.div className="mt-4 flex justify-center w-full"
                            >
                              <svg width="120" height="40" viewBox="0 0 120 40">
                                <motion.path
                                  d="M0,30 Q30,10 60,25 T120,20"
                                  fill="transparent"
                                  stroke={solution.animation.color}
                                  strokeWidth="2"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    repeatDelay: 0.5
                                  }}
                                />
                                <motion.circle
                                  cx="0"
                                  cy="30"
                                  r="3"
                                  fill={solution.animation.color}
                                  animate={{
                                    cx: [0, 30, 60, 90, 120],
                                    cy: [30, 10, 25, 15, 20]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    repeatDelay: 0.5
                                  }}
                                />
                              </svg>
                            </motion.div>
                          )}
                          
                          {solution.id === 'generative' && (
                            <motion.div 
                              className="mt-4 w-full h-12 relative flex items-center justify-center space-x-3"
                            >
                              {[...Array(3)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="text-purple-400"
                                  initial={{ opacity: 0.3, scale: 0.8, y: 0 }}
                                  animate={{
                                    opacity: [0.3, 1, 0.3],
                                    scale: [0.8, 1.1, 0.8],
                                    y: [0, -5, 0]
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                    ease: "easeInOut"
                                  }}
                                >
                                  <Sparkles className="w-8 h-8" />
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                          
                          {solution.id === 'automation' && (
                            <motion.div className="mt-4 flex justify-center items-center space-x-4 w-full"
                            >
                              {[...Array(3)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="w-10 h-10 rounded-md border-2 border-[#6E59A5]"
                                  animate={{ 
                                    rotate: 360,
                                    borderRadius: ["10%", "50%", "10%"]
                                  }}
                                  transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.3
                                  }}
                                >
                                  <motion.div
                                    className="w-1/2 h-1/2 bg-[#6E59A5] m-auto"
                                    style={{ transformOrigin: "center" }}
                                    animate={{ 
                                      rotate: -720,
                                      borderRadius: ["10%", "50%", "10%"]
                                    }}
                                    transition={{ 
                                      duration: 3,
                                      repeat: Infinity,
                                      ease: "linear",
                                      delay: i * 0.3
                                    }}
                                  />
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </Tabs>
          </div>

          {/* Rest of your component remains the same */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-24 mb-16"
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]">
                Generative AI
              </span> Capabilities
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {genAIIcons.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(110, 89, 165, 0.2)",
                    backgroundColor: "rgba(110, 89, 165, 0.1)"
                  }}
                  className="bg-[#1a1a2e]/60 rounded-xl border border-[#6E59A5]/30 p-6 flex flex-col items-center text-center"
                  onMouseEnter={() => setHoverItem(idx)}
                  onMouseLeave={() => setHoverItem(null)}
                >
                  <motion.div
                    className="text-[#8B5CF6] mb-4"
                    animate={hoverItem === idx ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="font-bold text-base sm:text-lg mb-2">{item.label}</h3>
                  <motion.div
                    className="w-12 h-1 bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] rounded-full"
                    animate={hoverItem === idx ? {
                      width: "80%"
                    } : {
                      width: "3rem"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-16 bg-[#1a1a2e]/60 rounded-xl border border-[#6E59A5]/20 p-8 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">
                Transformative <span className="text-[#6E59A5]">Use Cases</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {solutionTypes.find(s => s.id === 'generative')?.genAIUseCase?.map((useCase, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.4 }}
                    whileHover={{ x: 5, color: "#6E59A5" }}
                  >
                    <Sparkles className="h-6 w-6 text-[#8B5CF6] mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-300">{useCase}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our team of AI experts to discuss your specific needs and discover how our solutions can drive innovation in your organization.
            </p>
            
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#6E59A5]">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
            
            <motion.div 
              className="mt-12 flex justify-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div 
                className="text-2xl"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Zap className="h-10 w-10 text-[#6E59A5]" />
              </motion.div>
              <motion.div 
                className="text-2xl"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5
                }}
              >
                <Brain className="h-10 w-10 text-[#8B5CF6]" />
              </motion.div>
              <motion.div 
                className="text-2xl"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1
                }}
              >
                <Sparkles className="h-10 w-10 text-[#8B5CF6]" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;