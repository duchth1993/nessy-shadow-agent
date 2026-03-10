import React from 'react';
import { motion } from 'framer-motion';
import { Ghost } from 'lucide-react';

const FlyingNessy: React.FC = () => {
  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      initial={{ x: -100, y: '50vh', scale: 0.5, opacity: 0 }}
      animate={{
        x: ['-100px', '50vw', 'calc(100vw + 100px)'],
        y: ['50vh', '30vh', '20vh'],
        scale: [0.5, 1.5, 0.5],
        opacity: [0, 1, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 2,
        times: [0, 0.5, 1],
        ease: 'easeInOut',
      }}
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full scale-150 opacity-50" />
        
        {/* Ghost icon */}
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-cyber-purple/30 to-cyber-blue/30 backdrop-blur-xl border border-white/20 flex items-center justify-center">
          <Ghost className="w-12 h-12 text-white" />
        </div>

        {/* Trail effect */}
        <motion.div
          className="absolute top-1/2 right-full -translate-y-1/2 w-32 h-8 bg-gradient-to-l from-cyber-purple/50 to-transparent rounded-full blur-md"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 0.3, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};

export default FlyingNessy;
