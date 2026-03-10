import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wand2, MessageSquare, Brain, Smile, Heart } from 'lucide-react';
import type { AgentConfig } from '../App';

interface CreateAgentProps {
  onAgentCreate: (config: AgentConfig) => void;
}

const toneOptions = [
  { value: 'sassy', label: 'Sassy', icon: Sparkles, color: 'from-pink-500 to-purple-500' },
  { value: 'wise', label: 'Wise', icon: Brain, color: 'from-blue-500 to-cyan-500' },
  { value: 'funny', label: 'Funny', icon: Smile, color: 'from-yellow-500 to-orange-500' },
  { value: 'calm', label: 'Calm', icon: Heart, color: 'from-green-500 to-teal-500' },
] as const;

const personalityTemplates = [
  {
    name: 'Privacy Guardian',
    prompt: 'Be vigilant about privacy, always remind users about E2EE, and speak like a cybersecurity expert who genuinely cares about protecting people.',
    tone: 'wise' as const,
  },
  {
    name: 'Crypto Enthusiast',
    prompt: 'Be excited about blockchain technology, use crypto slang naturally, and always emphasize the importance of decentralization and self-custody.',
    tone: 'sassy' as const,
  },
  {
    name: 'Friendly Helper',
    prompt: 'Be warm and approachable, explain complex topics simply, and always make users feel comfortable asking questions.',
    tone: 'calm' as const,
  },
  {
    name: 'Meme Lord',
    prompt: 'Communicate with humor and memes, make references to internet culture, but still be helpful and informative underneath the jokes.',
    tone: 'funny' as const,
  },
];

const CreateAgent: React.FC<CreateAgentProps> = ({ onAgentCreate }) => {
  const [personality, setPersonality] = useState('');
  const [tone, setTone] = useState<AgentConfig['tone']>('sassy');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleTemplateSelect = (template: typeof personalityTemplates[0]) => {
    setPersonality(template.prompt);
    setTone(template.tone);
  };

  const handleGenerate = async () => {
    if (!personality.trim()) return;
    
    setIsGenerating(true);
    // Simulate generation delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsGenerating(false);
    
    onAgentCreate({ personality, tone });
  };

  return (
    <section className="max-w-4xl mx-auto">
      <motion.div
        className="relative rounded-2xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Glassmorphism card */}
        <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          {/* Step indicator */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-blue flex items-center justify-center text-white font-bold">
              1
            </div>
            <h2 className="text-2xl font-bold text-white">Create Your Shadow Agent</h2>
          </div>

          {/* Personality templates */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-3">
              Quick Templates
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {personalityTemplates.map((template) => (
                <motion.button
                  key={template.name}
                  onClick={() => handleTemplateSelect(template)}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-left hover:border-cyber-purple/50 transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-sm font-medium text-white block">{template.name}</span>
                  <span className="text-xs text-gray-500 capitalize">{template.tone}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Personality textarea */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-3">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Personality Prompt
            </label>
            <textarea
              value={personality}
              onChange={(e) => setPersonality(e.target.value)}
              placeholder="Be sassy, privacy-focused, always remind about E2EE..."
              className="w-full h-32 px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-purple/50 focus:ring-2 focus:ring-cyber-purple/20 transition-all resize-none"
            />
          </div>

          {/* Tone selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-400 mb-3">
              Agent Tone
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {toneOptions.map((option) => {
                const Icon = option.icon;
                const isSelected = tone === option.value;
                return (
                  <motion.button
                    key={option.value}
                    onClick={() => setTone(option.value)}
                    className={`relative p-4 rounded-xl border transition-all ${
                      isSelected
                        ? 'border-cyber-purple bg-cyber-purple/10'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${option.color} flex items-center justify-center mb-2 mx-auto`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                      {option.label}
                    </span>
                    {isSelected && (
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-cyber-purple"
                        layoutId="tone-selector"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Generate button */}
          <motion.button
            onClick={handleGenerate}
            disabled={!personality.trim() || isGenerating}
            className="w-full py-4 rounded-xl font-semibold text-white relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed group"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            {/* Button gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-blue" />
            
            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-blue opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
              style={{ transform: 'translateY(50%)' }}
            />
            
            <span className="relative flex items-center justify-center gap-2">
              {isGenerating ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                  Generating Agent...
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5" />
                  Generate Agent
                </>
              )}
            </span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CreateAgent;
