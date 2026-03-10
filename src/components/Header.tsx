import React from 'react';
import { motion } from 'framer-motion';
import { Ghost, Shield, Lock } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative py-12 px-4">
      <div className="container mx-auto text-center">
        {/* Nessy Ghost Icon */}
        <motion.div
          className="relative inline-block mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Glow effect behind ghost */}
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-cyber-purple/50 to-cyber-blue/50 rounded-full scale-150" />
            
            {/* Ghost container with glassmorphism */}
            <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyber-purple/20 to-cyber-blue/20 backdrop-blur-xl border border-white/10 flex items-center justify-center">
              <Ghost className="w-16 h-16 text-white" strokeWidth={1.5} />
              
              {/* Orbiting shields */}
              <motion.div
                className="absolute"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                <Shield className="w-6 h-6 text-cyber-purple absolute -top-3 left-1/2 -translate-x-1/2" />
              </motion.div>
              <motion.div
                className="absolute"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <Lock className="w-5 h-5 text-cyber-blue absolute -bottom-2 left-1/2 -translate-x-1/2" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-cyan bg-clip-text text-transparent">
            Nessy Shadow Agent
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Your private AI ghost for Luffa chats – fully anonymous & secure
        </motion.p>

        {/* Privacy badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {['ZK Proofs', 'E2EE', 'DID Anonymous', 'Decentralized Relays'].map((badge, index) => (
            <motion.span
              key={badge}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyber-purple/10 to-cyber-blue/10 border border-cyber-purple/30 text-cyber-purple backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.6)' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
