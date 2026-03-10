import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, CheckCircle, Shield, Lock, Network, Fingerprint } from 'lucide-react';

interface DeploySectionProps {
  onDeploy: () => void;
  isDeployed: boolean;
}

const DeploySection: React.FC<DeploySectionProps> = ({ onDeploy, isDeployed }) => {
  const [isDeploying, setIsDeploying] = useState(false);

  const handleDeploy = async () => {
    setIsDeploying(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    onDeploy();
    setIsDeploying(false);
  };

  return (
    <section className="max-w-4xl mx-auto">
      <motion.div
        className="relative rounded-2xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          {/* Step indicator */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-blue flex items-center justify-center text-white font-bold">
              3
            </div>
            <h2 className="text-2xl font-bold text-white">Deploy to Luffa</h2>
          </div>

          {/* Privacy features grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Shield, label: 'ZK Proofs', desc: 'Prove without revealing' },
              { icon: Lock, label: 'E2EE', desc: 'End-to-end encrypted' },
              { icon: Fingerprint, label: 'DID', desc: 'Decentralized identity' },
              { icon: Network, label: 'Relays', desc: 'Decentralized routing' },
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(139, 92, 246, 0.3)' }}
              >
                <feature.icon className="w-8 h-8 mx-auto mb-2 text-cyber-purple" />
                <p className="text-white font-medium text-sm">{feature.label}</p>
                <p className="text-gray-500 text-xs">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Deploy button or success state */}
          <AnimatePresence mode="wait">
            {!isDeployed ? (
              <motion.button
                key="deploy-button"
                onClick={handleDeploy}
                disabled={isDeploying}
                className="w-full py-5 rounded-xl font-semibold text-white relative overflow-hidden disabled:cursor-not-allowed group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                {/* Button gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-cyan" />
                
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-blue opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
                  style={{ transform: 'translateY(50%)' }}
                />
                
                <span className="relative flex items-center justify-center gap-3 text-lg">
                  {isDeploying ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Rocket className="w-6 h-6" />
                      </motion.div>
                      Deploying to Luffa...
                    </>
                  ) : (
                    <>
                      <Rocket className="w-6 h-6" />
                      Deploy Shadow Agent to Luffa
                    </>
                  )}
                </span>
              </motion.button>
            ) : (
              <motion.div
                key="success-state"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                {/* Success card */}
                <div className="p-8 rounded-xl bg-gradient-to-br from-green-500/10 to-cyber-purple/10 border border-green-500/30">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
                  </motion.div>
                  
                  <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Shadow Agent Deployed! 🎉
                  </motion.h3>
                  
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <p className="text-green-400 font-medium">
                      ZK Proof Generated – Anonymity Verified ✓
                    </p>
                    <p className="text-gray-400 text-sm">
                      Your Shadow Agent is now active on Luffa and will respond to messages while you're offline.
                    </p>
                  </motion.div>

                  {/* Mock deployment details */}
                  <motion.div
                    className="mt-6 p-4 rounded-lg bg-black/30 text-left font-mono text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <p className="text-gray-500">// Deployment Receipt</p>
                    <p className="text-cyber-purple">zkProof: <span className="text-gray-400">0x7f3a...9c2d</span></p>
                    <p className="text-cyber-blue">did: <span className="text-gray-400">did:endless:nessy:shadow:a8f2</span></p>
                    <p className="text-cyber-cyan">relay: <span className="text-gray-400">relay.luffa.endless.network</span></p>
                    <p className="text-green-400">status: <span className="text-white">ACTIVE</span></p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default DeploySection;
