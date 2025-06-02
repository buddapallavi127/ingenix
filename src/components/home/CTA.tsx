import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTA = () => {
  const waveConfig = {
    heights: ['5%', '40%', '15%', '30%', '10%', '25%'],
    duration: 1.5,
    colors: ['#8B5CF6', '#6E59A5'],
    opacity: [0.4, 0.8],
    initialDelay: -10
  };

  const generateWaveBars = (
    side: 'left' | 'right',
    count = 7,
    barWidth = 'w-0.5',
    spacing = 'space-x-2'
  ) => {
    return (
      <div className={`h-full flex items-center justify-center ${spacing}`}>
        {[...Array(count)].map((_, i) => {
          const delayOffset = waveConfig.initialDelay + i * 0.05 * (side === 'right' ? -1 : 1);
          const randomStartHeight = waveConfig.heights[Math.floor(Math.random() * waveConfig.heights.length)];
          
          return (
            <motion.div
              key={`${side}-${i}`}
              className={`${barWidth} rounded-full ${side === 'left' ? 'bg-[#8B5CF6]' : 'bg-[#6E59A5]'}`}
              initial={{ 
                height: randomStartHeight, 
                opacity: waveConfig.opacity[Math.floor(Math.random() * waveConfig.opacity.length)]
              }}
              animate={{
                height: waveConfig.heights,
                opacity: waveConfig.opacity,
              }}
              transition={{
                duration: waveConfig.duration,
                delay: delayOffset,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
              style={{ originY: 1 }}
            />
          );
        })}
      </div>
    );
  };

  const floatingDots = [
    {
      id: 1,
      position: 'top-1/4 left-1/4',
      size: 'w-2 h-2',
      color: 'bg-[#8B5CF6]',
      initial: { y: -10, opacity: 0.6 },
      animation: {
        y: [-10, -20, -10],
        opacity: [0.6, 1, 0.6],
      },
      transition: { duration: 1.5, delay: 0 }
    },
    {
      id: 2,
      position: 'top-1/2 right-1/3',
      size: 'w-1 h-1',
      color: 'bg-[#6E59A5]',
      initial: { y: 5, x: -5, opacity: 0.6 },
      animation: {
        y: [5, 15, 5],
        x: [-5, -10, -5],
        opacity: [0.6, 1, 0.6],
      },
      transition: { duration: 2, delay: 0.3 }
    },
    {
      id: 3,
      position: 'bottom-1/3 left-1/2',
      size: 'w-1.5 h-1.5',
      color: 'bg-[#8B5CF6]',
      initial: { y: -15, x: 5, opacity: 0.4 },
      animation: {
        y: [-15, -25, -15],
        x: [5, 15, 5],
        opacity: [0.4, 0.8, 0.4],
      },
      transition: { duration: 2, delay: 0.4 }
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] to-[#24243e]"></div>

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-0 h-full w-32 flex items-center justify-start">
          {generateWaveBars('left', 200, 'w-1', 'space-x-1')}
        </div>
        <div className="absolute right-0 h-full w-32 flex items-center justify-end">
          {generateWaveBars('right', 0, 'w-1', 'space-x-1')}
        </div>
      </div>

      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-[#6E59A5]/20 rounded-full filter blur-3xl"
          initial={{ scale: 1.02, opacity: 0.22 }}
          animate={{ scale: [1.02, 1.05, 1.02], opacity: [0.22, 0.25, 0.22] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B5CF6]/20 rounded-full filter blur-3xl"
          initial={{ scale: 1.05, opacity: 0.25 }}
          animate={{ scale: [1.05, 1.1, 1.05], opacity: [0.25, 0.3, 0.25] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {floatingDots.map(dot => (
          <motion.div
            key={dot.id}
            className={`absolute ${dot.position} ${dot.size} ${dot.color} rounded-full`}
            initial={dot.initial}
            animate={dot.animation}
            transition={{ ...dot.transition, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        <motion.div
          className="absolute top-1/3 left-1/5 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent"
          initial={{ scaleX: 0.5, opacity: 0.3 }}
          animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#6E59A5]/30 to-transparent rotate-45"
          initial={{ scaleX: 0.5, opacity: 0.25 }}
          animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />

        <motion.div
          className="absolute top-1/6 right-1/5 w-8 h-8 border border-[#8B5CF6]/30 rotate-45"
          initial={{ rotate: 90, scale: 1.1 }}
          animate={{ rotate: [90, 450], scale: [1.1, 1.2, 1.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/5 left-1/6 w-6 h-6 border border-[#6E59A5]/25 rounded-full"
          initial={{ scale: 1.2, opacity: 0.5 }}
          animate={{ scale: [1.2, 1.5, 1.2], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mx-auto max-w-2xl bg-[#0a0a12]/90 backdrop-blur-sm border border-gray-800 shadow-xl p-10 rounded-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
        >
          {/* Changed bg-[#0a0a12] to bg-[#0a0a12]/90 for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6E59A5]/10 to-[#8B5CF6]/10"></div>
          {/* Increased gradient opacity from /5 to /10 */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]"
            initial={{ scaleX: 0.5 }}
            animate={{ scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />


          <div className="relative z-10">
            <motion.h3
              className="text-2xl font-semibold text-white mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business with AI?
            </motion.h3>

            <motion.p
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our team of experts is ready to help you navigate the complexity of AI implementation and create custom solutions tailored to your unique business needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <Link to="/contact" className="inline-block w-full">
                <Button
                  className="w-full bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#6E59A5] transition-all duration-200 py-6 text-base relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                    initial={{ x: -50 }}
                    animate={{ x: [-50, 300] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                  <span className="relative z-10 flex items-center justify-center">
                    Contact Us Today
                    <motion.span
                      className="ml-2"
                      initial={{ x: 2 }}
                      animate={{ x: [2, 4, 2] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </span>
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.p
                className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]"
                initial={{ backgroundPosition: '25% 50%' }}
                animate={{ backgroundPosition: ['25% 50%', '75% 50%', '25% 50%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                "Try the Future"
              </motion.p>
              <motion.p
                className="text-white/80 text-sm mt-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                by Ingenix Innovations
              </motion.p>
              <motion.p
                className="text-gray-400 text-xs mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                sales@ingenixinnovations.com • Leela Palace Road, Bangalore 560008
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;