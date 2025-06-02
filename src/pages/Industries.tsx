import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomSolutionsSection from "@/components/home/custom"
import bg5 from '@/assets/bg3.avif';
// At top of file, import JSONs
import healthcareLottie from '@/assets/lottie/healthcare1.json';
import financeLottie from '@/assets/lottie/finance1.json';
import logisticsLottie from '@/assets/lottie/logistics1.json';
import EdtechLottie from'@/assets/lottie/edtech1.json';
import DigitalmarketingLottie from '@/assets/lottie/digitalmarketing1.json';
import ecommerceLottie from '@/assets/lottie/ecommerce1.json';
import { Link } from 'react-router-dom'; // Keep this import

// Industry data with Lottie paths
const industryDetails = [
  {
    name: 'Healthcare',
    description: 'AI-powered diagnosis, medical imaging analysis, and intelligent patient interaction systems.',
    color: 'bg-red-100',
    iconColor: 'text-red-500',
    lottie: healthcareLottie,
    useCases: [
      'Early disease detection and diagnosis',
      'Medical image analysis and classification',
      'Patient monitoring and remote care',
      'Clinical decision support systems',
      'Healthcare operations optimization'
    ],
    technologies: ['Computer Vision', 'NLP', 'Predictive Analytics', 'Multi-Agent Systems', 'Generative AI'],
    genAIApplications: [
      'Medical report generation',
      'Personalized treatment plans',
      'Synthetic medical imaging data',
      'Virtual health assistants'
    ]
  },
  {
    name: 'Finance',
    description: 'Advanced risk scoring, fraud detection systems, and AI-powered robo-advisors.',
    color: 'bg-green-100',
    iconColor: 'text-green-500',
    lottie: financeLottie,
    useCases: [
      'Fraud detection and prevention',
      'Algorithmic trading',
      'Credit risk assessment',
      'Customer segmentation',
      'Personalized financial advising'
    ],
    technologies: ['Time Series Analysis', 'Anomaly Detection', 'NLP', 'Reinforcement Learning', 'Generative AI'],
    genAIApplications: [
      'Financial document analysis',
      'Market trend prediction',
      'Investment portfolio suggestions',
      'Automated financial reporting'
    ]
  },
  {
    name: 'Retail & E-commerce',
    description: 'Personalized recommendation engines, chatbots, and customer experience optimization.',
    color: 'bg-blue-100',
    iconColor: 'text-blue-500',
    lottie: ecommerceLottie,
    useCases: [
      'Personalized recommendation systems',
      'Demand forecasting',
      'Inventory optimization',
      'Virtual try-on solutions',
      'Customer sentiment analysis'
    ],
    technologies: ['Recommendation Systems', 'Computer Vision', 'NLP', 'Predictive Analytics', 'Generative AI'],
    genAIApplications: [
      'Product description generation',
      'Personalized marketing content',
      'Virtual product showcasing',
      'Customer review analysis'
    ]
  },
  {
    name: 'Logistics',
    description: 'Intelligent route optimization, warehouse automation, and supply chain enhancement.',
    color: 'bg-amber-100',
    iconColor: 'text-amber-500',
    lottie: logisticsLottie,
    useCases: [
      'Route optimization',
      'Warehouse automation',
      'Supply chain visibility',
      'Demand forecasting',
      'Preventive maintenance'
    ],
    technologies: ['Optimization Algorithms', 'IoT', 'Computer Vision', 'Digital Twins', 'Generative AI'],
    genAIApplications: [
      'Supply chain scenario generation',
      'Predictive maintenance reports',
      'Autonomous logistics planning',
      'Shipping documentation automation'
    ]
  },
  {
    name: 'EdTech',
    description: 'Personalized learning systems, test analysis, and virtual teaching assistants.',
    color: 'bg-purple-100',
    iconColor: 'text-purple-500',
    lottie: EdtechLottie,
    useCases: [
      'Adaptive learning platforms',
      'Automated assessment and grading',
      'Virtual tutors and assistants',
      'Student engagement analytics',
      'Course recommendation engines'
    ],
    technologies: ['NLP', 'Reinforcement Learning', 'Knowledge Graphs', 'Sentiment Analysis', 'Generative AI'],
    genAIApplications: [
      'Personalized learning content',
      'Automated quiz generation',
      'Study material summarization',
      'Interactive tutoring dialogue'
    ]
  },
  {
    name: 'Digital Marketing',
    description: 'AI-driven campaign optimization, customer segmentation, and predictive analytics for marketers.',
    color: 'bg-sky-100',
    iconColor: 'text-sky-500',
    lottie: DigitalmarketingLottie,
    useCases: [
      'Customer segmentation and targeting',
      'Campaign performance prediction',
      'Content generation and optimization',
      'Customer journey analysis',
      'Churn prediction and prevention'
    ],
    technologies: ['NLP','Predictive Analytics', 'Recommendation Systems','Generative AI',],
    genAIApplications: [
      'Ad copy generation',
      'Image and video content creation',
      'Personalized email campaigns',
      'Social media post optimization'
    ]
  }
];

//hero section
const Industries = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#12121e] text-white">
      <Navbar />


      <div className="h-screen relative overflow-hidden">
      <div
  className="absolute inset-0 z-0 opacity-60"
  style={{
    backgroundImage: `url(${bg5})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
/>
        <div className="absolute inset-0 z-0">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {/* <Industry3DModel />
{[...Array(3)].map((_, i) => <Industry3DModel key={i} />)} */}
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={1.5}
            />
          </Canvas>
          <div className="absolute inset-0 bg-gradient-to-t from-[#12121e] via-transparent to-[#12121e]" />
        </div>


        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Industries We Serve<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]"></span>

              {/*Industries We Serve<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]"> </span>*/}
            </motion.h1>
            <motion.p
              className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >

              We deliver specialized AI solutions across multiple sectors, tailored to your industry's unique challenges.
            </motion.p>
            
          </div>
        </div>
      </div>

    {/* Industry Content */}
<main className="flex-grow" ref={containerRef}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-20 relative z-20">
    {industryDetails.map((industry, index) => (
      <div
        key={index}
        className="group relative rounded-2xl p-6 bg-[#0f0f1b] border border-[#6e59a5] shadow-md transition-all duration-300 filter hover:border-[#9b5cd1] hover:shadow-[0_0_10px_#9b5cd1] mb-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`${index % 2 === 0 ? '' : 'md:flex-row-reverse'} md:flex gap-12 items-center`}
        >
      {/* Lottie Animation Column */}
<div className="md:w-1/2 mb-12 md:mb-0 flex justify-center items-center">
  <div className="p-1 rounded-10xl">
    <div className="bg-[#1a1a2e] rounded-full w-80 h-80 flex items-center justify-center shadow-2xl">
      <Lottie animationData={industry.lottie} loop className="h-[95%] w-[95%]" />
    </div>
  </div>
</div>

          {/* Content Column */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]">
              {industry.name}
            </h2>
            <p className="text-gray-300 mb-6">{industry.description}</p>

            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-4 text-[#8B5CF6]">Industry-Specific Solutions</h3>
              <p className="text-gray-300 mb-6">
                Our AI solutions for the {industry.name.toLowerCase()} industry are designed to address the unique challenges and opportunities in this sector. We combine industry expertise with cutting-edge AI technologies to deliver transformative results.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3 text-white">Key Use Cases</h4>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                  {industry.useCases.map((useCase, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-[#8B5CF6] mr-2">•</span>
                      <span className="text-gray-300">{useCase}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 flex items-center text-white">
                <Sparkles className="h-4 w-4 mr-2 text-[#8B5CF6]" />
                Generative AI Applications
              </h4>
              <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                {industry.genAIApplications.map((app, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <span className="text-[#8B5CF6] mr-2">✨</span>
                    <span className="text-gray-300">{app}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-white">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {industry.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`${tech === 'Generative AI' ? 'bg-[#6E59A5]/30 border-[#8B5CF6]' : 'bg-[#1a1a2e] border-gray-700'} border text-gray-300 text-sm px-3 py-1 rounded-full`}
                  >
                    {tech === 'Generative AI' ? (
                      <span className="flex items-center">
                        <Sparkles className="h-3 w-3 mr-1 text-[#8B5CF6]" />
                        {tech}
                      </span>
                    ) : (
                      tech
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 px-4 py-3 bg-[#1a1a2e] border border-gray-800 rounded-lg">
              <div className="flex items-center text-gray-400">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-xs font-mono">ai_solution_{industry.name.toLowerCase().replace(/\s+/g, '_')}_active</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    ))}


<CustomSolutionsSection />
  </div>
</main>


      <Footer />
    </div>
  );
};

export default Industries;