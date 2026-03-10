import React from 'react';
import { motion } from 'framer-motion';
import { Github, Heart, Shield, Lock, Network } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 mt-12 border-t border-white/5">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {/* Privacy icons */}
          <div className="flex justify-center gap-4 mb-6">
            {[Shield, Lock, Network].map((Icon, index) => (
              <motion.div
                key={index}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
              >
                <Icon className="w-5 h-5 text-cyber-purple" />
              </motion.div>
            ))}
          </div>

          {/* Main text */}
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            PoC for <span className="text-cyber-purple font-medium">Endless Monthly Contribution Program</span>
            <br />
            Privacy preserved via ZK + E2EE + Decentralized Relays
          </p>

          {/* Hashtag */}
          <p className="text-cyber-blue font-medium">#EndlessDev</p>

          {/* GitHub link */}
          <motion.a
            href="https://github.com/endless-ecosystem/nessy-shadow-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyber-purple/50 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </motion.a>

          {/* Made with love */}
          <p className="text-gray-600 text-xs flex items-center justify-center gap-1 mt-8">
            Made with <Heart className="w-3 h-3 text-red-500" /> for the Endless ecosystem
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
