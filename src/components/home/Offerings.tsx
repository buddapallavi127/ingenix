import { Users, Mic, TrendingUp, Sparkles, Settings, Brain } from 'lucide-react';
import { useRef, useState, useLayoutEffect } from 'react'; // useEffect removed as activeIndex is gone
import { motion, useScroll, useTransform } from 'framer-motion';

const offerings = [
  {
    title: 'AI Consulting',
    description: 'Strategic roadmaps, use case identification, and technology selection tailored to your business objectives.',
    icon: Brain,
    slides: [
      { title: 'Strategic Roadmaps', content: 'Comprehensive AI strategy development aligned with your business goals and digital transformation journey.' },
      { title: 'Use Case Identification', content: 'Expert analysis to identify high-impact AI opportunities specific to your industry and business model.' },
      { title: 'Technology Selection', content: 'Guidance on choosing the right AI technologies, platforms, and tools.' }
    ]
  },
  {
    title: 'AI Agents',
    description: 'Advanced agent orchestration and collaboration enabling complex workflows and automated decision making.',
    icon: Users,
    slides: [
      { title: 'Agent Orchestration', content: 'Design and implement intelligent agent systems that coordinate complex business processes autonomously.' },
      { title: 'Multi-Agent Collaboration', content: 'Build collaborative AI systems where multiple agents work together to solve complex problems.' },
      { title: 'Workflow Automation', content: 'Automate end-to-end business workflows with intelligent decision-making capabilities.' }
    ]
  },
  {
    title: 'Voice AI',
    description: 'Natural language customer support with multilingual capabilities and seamless call center integration.',
    icon: Mic,
    slides: [
        { title: 'Natural Language Processing', content: 'Advanced NLP capabilities for understanding and processing human speech with high accuracy.' },
        { title: 'Multilingual Support', content: 'Support for multiple languages and dialects to serve diverse customer bases globally.' },
        { title: 'Call Center Integration', content: 'Seamless integration with existing call center infrastructure and customer service platforms.' }
    ]
  },
  {
    title: 'Predictive Analytics',
    description: 'Business forecasting, customer churn models, and risk scoring engines powered by machine learning.',
    icon: TrendingUp,
    slides: [
        { title: 'Business Forecasting', content: 'Accurate prediction of business metrics, sales trends, and market opportunities.' },
        { title: 'Customer Churn Models', content: 'Identify at-risk customers and implement retention strategies with predictive churn analysis.' },
        { title: 'Risk Scoring', content: 'Comprehensive risk assessment engines for financial, operational, and strategic decision making.' }
    ]
  },
  {
    title: 'Generative AI Solutions',
    description: 'Custom AI integration, content generation, avatar synthesis, and video generation capabilities.',
    icon: Sparkles,
    slides: [
        { title: 'Content Generation', content: 'AI-powered content creation for marketing, documentation, and creative applications.' },
        { title: 'Avatar Synthesis', content: 'Create realistic digital avatars and virtual representatives for customer interactions.' },
        { title: 'Video Generation', content: 'Automated video creation and editing using cutting-edge generative AI technologies.' }
    ]
  },
  {
    title: 'Process Automation',
    description: 'End-to-end workflow automation with human-in-the-loop optimization and document processing.',
    icon: Settings,
    slides: [
        { title: 'Workflow Automation', content: 'Automate complex business processes while maintaining quality and compliance standards.' },
        { title: 'Human-in-the-Loop', content: 'Intelligent automation that knows when to involve human expertise for optimal results.' },
        { title: 'Document Processing', content: 'Advanced OCR and document understanding for automated data extraction and processing.' }
    ]
  },
];


const OfferingCard = ({ offering }) => {
  const Icon = offering.icon;
  return (
    <motion.div
      className="w-80 bg-slate-800/60 border border-purple-500/40 rounded-lg p-6 shadow-xl backdrop-blur-md flex flex-col text-left shrink-0 h-[32rem] overflow-y-hidden" // MODIFIED: h-[34rem] to h-[32rem] and overflow-y-auto to overflow-y-hidden
    >
      <div className="flex items-center mb-4">
        <Icon className="w-12 h-12 text-purple-400 mr-4 shrink-0" />
        <h3 className="text-2xl font-semibold text-white leading-tight">{offering.title}</h3>
      </div>
      <p className="text-sm text-gray-300 leading-relaxed mb-5">{offering.description}</p>
      <div className="space-y-3 text-sm">
        {offering.slides.map((slide, idx) => (
          <div key={idx} className="border-l-2 border-purple-500/50 pl-3">
            <h4 className="font-semibold text-purple-300 mb-1">{slide.title}</h4>
            <p className="text-gray-400 leading-snug">{slide.content}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Offerings = () => {
  const sectionRef = useRef(null);
  const cardViewportRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"] // scrollYProgress 0-1 over entire section height
  });

  const [dimensions, setDimensions] = useState({ viewportWidth: 0, stripWidth: 0 });
  const [currentScrollProgress, setCurrentScrollProgress] = useState(0);

  // Track scroll progress for conditional rendering
  scrollYProgress.on("change", (value) => {
    setCurrentScrollProgress(value);
  });

  const CARD_WIDTH_PX = 320; // w-80
  const GAP_PX = 32; // gap-8

  // Animation Phase Constants
  const ANIMATION_START_PROGRESS = 0.25;  // Start animation after 25% of section scroll
  const ANIMATION_END_PROGRESS = 0.80;    // Animation finishes by 80% (cards stop scrolling)
  const STATIC_PAUSE_END_PROGRESS = 0.90; // Cards remain static until 90%
  // From 90% to 100%, section scrolls out, sticky ends.

  // Scroll duration multiplier (vh per card)
  const SCROLL_MULTIPLIER_PER_CARD_VH = 35;

  useLayoutEffect(() => {
    const calculateDimensions = () => {
      let vpWidth = 0;
      if (cardViewportRef.current) {
        vpWidth = cardViewportRef.current.clientWidth; // Includes padding
      }

      const numCards = offerings.length;
      let sWidth = 0;
      if (numCards > 0) {
        sWidth = numCards * CARD_WIDTH_PX + Math.max(0, numCards - 1) * GAP_PX;
      }
      setDimensions({ viewportWidth: vpWidth, stripWidth: sWidth });
    };

    calculateDimensions(); // Initial calculation
    window.addEventListener('resize', calculateDimensions);
    return () => window.removeEventListener('resize', calculateDimensions);
  }, [offerings.length]); // Recalculate if number of offerings changes

  let target_x_start = 0;
  let target_x_end = 0;

  if (dimensions.viewportWidth > 0) { // Ensure viewportWidth is measured
    if (offerings.length === 0) {
        // No cards, attempt to center "nothing" (or effectively 0 width strip)
        target_x_start = dimensions.viewportWidth / 2;
        target_x_end = dimensions.viewportWidth / 2;
    } else if (dimensions.stripWidth <= dimensions.viewportWidth) {
      // Center if strip fits or is smaller than viewport
      target_x_start = (dimensions.viewportWidth - dimensions.stripWidth) / 2;
      target_x_end = target_x_start; // Stays centered, no scroll animation needed
    } else {
      // Needs scrolling
      target_x_start = 0; // Start with first card at the (padded) left edge
      // Scroll until last card's right edge aligns with (padded) right edge of viewport
      target_x_end = -(dimensions.stripWidth - dimensions.viewportWidth);
    }
  }

  const x = useTransform(
    scrollYProgress,
    [0, ANIMATION_START_PROGRESS, ANIMATION_END_PROGRESS, STATIC_PAUSE_END_PROGRESS, 1],
    [target_x_start, target_x_start, target_x_end, target_x_end, target_x_end],
    { clamp: true }
  );

  // Calculate section height based on number of offerings to provide scroll duration
  const sectionHeight = 100 + (offerings.length > 0 ? offerings.length * SCROLL_MULTIPLIER_PER_CARD_VH : SCROLL_MULTIPLIER_PER_CARD_VH);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0A0A12] pt-16 sm:pt-2 md:pt-16 pb-8 sm:pb-2 md:pb-8"
      style={{ height: `${sectionHeight}vh` }}
    >
      <div className="text-center mb-6 sm:mb-6 md:mb-6 px-4">
      <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-center text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] text-transparent bg-clip-text">AI Solutions</span>
        </motion.h2>
        <motion.p 
          className="text-gray-400 max-w-2xl text-center mx-auto text-lg mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Cutting-edge artificial intelligence technologies designed to transform your business operations and drive innovation.
        </motion.p>
      </div>

      {/* Sticky container: full screen, centers its child (the card viewport) */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden ml-4 mr-4">
        {/* Card Viewport: Defines the visible area for cards, handles its own padding and max-width */}
        <div
          ref={cardViewportRef}
          className="w-full max-w-screen-xl mx-auto bg-[#0A0A12] overflow-x-hidden"

        >
          <motion.div
            className="flex flex-nowrap items-start pt-6 gap-8" // Vertical padding around cards, gap between cards
            style={{ x }} // Apply the horizontal scroll transform
          >
            {offerings.map((offering, index) => (
              <OfferingCard key={index} offering={offering} />
            ))}
            {/* Render placeholder if no offerings to maintain layout, or handle empty state */}
            {offerings.length === 0 && (
                 <div className="flex items-center justify-center h-[34rem] text-gray-500">
                    {/* No offerings to display or adjust as needed */}
                 </div>
            )}
          </motion.div>
          
          {/* Scroll Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-white/80">
            {/* Show down arrow and text when cards can still scroll horizontally */}
            {currentScrollProgress >= ANIMATION_START_PROGRESS && currentScrollProgress < ANIMATION_END_PROGRESS && (
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ opacity: 1 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-sm font-medium">Scroll down to explore</span>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-lg"
                >
                  ↓
                </motion.div>
              </motion.div>
            )}
            
            {/* Show up arrow and text when at the end of card scrolling */}
            {currentScrollProgress >= ANIMATION_END_PROGRESS && currentScrollProgress < STATIC_PAUSE_END_PROGRESS && (
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ opacity: 1 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-lg"
                >
                  ↑
                </motion.div>
                <span className="text-sm font-medium">Scroll up to go back</span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;