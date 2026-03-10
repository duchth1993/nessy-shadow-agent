import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import CreateAgent from './components/CreateAgent';
import ChatSimulator from './components/ChatSimulator';
import DeploySection from './components/DeploySection';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Confetti from './components/Confetti';
import FlyingNessy from './components/FlyingNessy';

export interface AgentConfig {
  personality: string;
  tone: 'sassy' | 'wise' | 'funny' | 'calm';
}

function App() {
  const [agentConfig, setAgentConfig] = useState<AgentConfig | null>(null);
  const [isDeployed, setIsDeployed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showFlyingNessy, setShowFlyingNessy] = useState(false);

  const handleAgentCreate = (config: AgentConfig) => {
    setAgentConfig(config);
  };

  const handleDeploy = () => {
    setShowFlyingNessy(true);
    setTimeout(() => {
      setShowConfetti(true);
      setIsDeployed(true);
    }, 1500);
    setTimeout(() => {
      setShowFlyingNessy(false);
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen relative font-inter">
      <AnimatedBackground />
      
      <AnimatePresence>
        {showConfetti && <Confetti />}
        {showFlyingNessy && <FlyingNessy />}
      </AnimatePresence>

      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CreateAgent onAgentCreate={handleAgentCreate} />
          </motion.div>

          <AnimatePresence>
            {agentConfig && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                <ChatSimulator agentConfig={agentConfig} />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {agentConfig && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <DeploySection 
                  onDeploy={handleDeploy} 
                  isDeployed={isDeployed} 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
