import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Shield, ShieldOff, Ghost, User, AlertTriangle, CheckCircle } from 'lucide-react';
import type { AgentConfig } from '../App';

interface ChatSimulatorProps {
  agentConfig: AgentConfig;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

// Response templates organized by tone
const responseTemplates = {
  sassy: [
    "Oh honey, you really thought that was a good idea? Let me enlighten you... 💅",
    "I'm literally protected by ZK proofs, so yeah, I'm kind of a big deal around here.",
    "Privacy? I invented privacy. Well, not really, but I'm VERY good at it.",
    "Excuse me while I encrypt this conversation with my fabulous E2EE powers.",
    "Did someone say 'anonymous'? That's my middle name. Actually, I don't have a middle name. I'm a ghost. 👻",
    "Your secrets are safe with me, bestie. Unlike your ex's DMs.",
    "I'm serving privacy realness and you're welcome.",
    "Not to brag, but my DID is more secure than Fort Knox. Just saying.",
  ],
  wise: [
    "In the realm of digital privacy, knowledge is your greatest shield. Let me share some wisdom...",
    "The ancient art of cryptography teaches us that true security comes from mathematical certainty.",
    "Consider this: your identity is precious. Guard it with the vigilance of a thousand firewalls.",
    "E2EE is not merely a feature—it is a fundamental right in our digital age.",
    "Zero-knowledge proofs represent the pinnacle of privacy technology. You prove without revealing.",
    "A wise user once said: 'Trust no one, verify everything.' This is the way.",
    "Decentralization is not just technology—it's a philosophy of empowerment.",
    "Remember: in privacy, there are no shortcuts. Only proper cryptographic protocols.",
  ],
  funny: [
    "Why did the hacker go to therapy? Too many unresolved issues! 😂 Anyway, about your question...",
    "I'm like a digital ninja, but instead of throwing stars, I throw encrypted packets!",
    "My encryption is so strong, even I can't read your messages. Wait, that's actually how it works!",
    "Knock knock! Who's there? Not your data, because it's properly encrypted! 🔐",
    "I put the 'fun' in 'fundamental right to privacy'! ...okay, that was a stretch.",
    "They call me the Ghost of Privacy Past, Present, and Future. Mostly Present though.",
    "My ZK proofs are like magic tricks, except the magic is MATH! *jazz hands*",
    "I'm not saying I'm the best at privacy, but my anonymity score is over 9000!",
  ],
  calm: [
    "I understand your concerns. Let me help you navigate this with care and clarity.",
    "Take a deep breath. Your privacy is in good hands with our E2EE protection.",
    "There's no rush. Let's work through this together, one secure step at a time.",
    "I'm here to help, and your information remains completely private throughout our conversation.",
    "Peace of mind comes from knowing your data is protected. That's what I'm here for.",
    "Let's approach this thoughtfully. Security doesn't have to be stressful.",
    "Your trust means everything. I'll always be transparent about how your privacy is protected.",
    "In this space, you're safe. The decentralized relays ensure no one can trace our conversation.",
  ],
};

const ChatSimulator: React.FC<ChatSimulatorProps> = ({ agentConfig }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [zkEnabled, setZkEnabled] = useState(true);
  const [showGhost, setShowGhost] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const templates = responseTemplates[agentConfig.tone];
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    
    // Add context-aware responses based on keywords
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('privacy') || lowerMessage.includes('secure')) {
      return `${randomTemplate} Speaking of privacy, your message is protected by military-grade E2EE!`;
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return `Hey there! ${randomTemplate}`;
    }
    if (lowerMessage.includes('help')) {
      return `I'm here to help! ${randomTemplate}`;
    }
    
    return randomTemplate;
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setShowGhost(true);

    // Simulate typing delay (1-2 seconds)
    const delay = 1000 + Math.random() * 1000;
    await new Promise(resolve => setTimeout(resolve, delay));

    const agentResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: generateResponse(inputValue),
      sender: 'agent',
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages(prev => [...prev, agentResponse]);
    
    // Fade out ghost after response
    setTimeout(() => setShowGhost(false), 500);
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
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-blue flex items-center justify-center text-white font-bold">
                2
              </div>
              <h2 className="text-2xl font-bold text-white">Preview & Test</h2>
            </div>

            {/* Privacy toggle */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">Privacy Demo:</span>
              <motion.button
                onClick={() => setZkEnabled(!zkEnabled)}
                className={`relative w-20 h-10 rounded-full transition-colors ${
                  zkEnabled ? 'bg-green-500/20' : 'bg-red-500/20'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`absolute top-1 w-8 h-8 rounded-full flex items-center justify-center ${
                    zkEnabled ? 'bg-green-500' : 'bg-red-500'
                  }`}
                  animate={{ left: zkEnabled ? '2.5rem' : '0.25rem' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  {zkEnabled ? (
                    <Shield className="w-4 h-4 text-white" />
                  ) : (
                    <ShieldOff className="w-4 h-4 text-white" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Privacy status banner */}
          <AnimatePresence mode="wait">
            <motion.div
              key={zkEnabled ? 'protected' : 'exposed'}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={`mb-4 p-3 rounded-xl flex items-center gap-3 ${
                zkEnabled
                  ? 'bg-green-500/10 border border-green-500/30'
                  : 'bg-red-500/10 border border-red-500/30'
              }`}
            >
              {zkEnabled ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 text-sm font-medium">
                    ZK-protected • E2EE Active • DID Anonymous • Anonymity Verified ✓
                  </span>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 text-sm font-medium">
                    ⚠️ WARNING: Identity Exposed • No ZK Protection • Metadata Visible
                  </span>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Chat window */}
          <div className="relative bg-black/30 rounded-xl border border-white/10 h-96 flex flex-col">
            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="h-full flex items-center justify-center text-gray-500 text-center">
                  <div>
                    <Ghost className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Send a message to test your Shadow Agent</p>
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-3 ${
                    message.sender === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user'
                        ? 'bg-cyber-blue/20'
                        : 'bg-cyber-purple/20'
                    }`}
                  >
                    {message.sender === 'user' ? (
                      <User className="w-4 h-4 text-cyber-blue" />
                    ) : (
                      <Ghost className="w-4 h-4 text-cyber-purple" />
                    )}
                  </div>
                  <div
                    className={`max-w-[70%] p-3 rounded-xl ${
                      message.sender === 'user'
                        ? 'bg-cyber-blue/20 text-white'
                        : 'bg-cyber-purple/20 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-cyber-purple/20 flex items-center justify-center">
                      <Ghost className="w-4 h-4 text-cyber-purple" />
                    </div>
                    <div className="bg-cyber-purple/20 p-3 rounded-xl flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-cyber-purple rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Floating ghost overlay */}
            <AnimatePresence>
              {showGhost && (
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.7, scale: 1, y: [0, -10, 0] }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5 }}
                >
                  <Ghost className="w-24 h-24 text-cyber-purple/30" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input area */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message to test your agent..."
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-purple/50 transition-all"
                />
                <motion.button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-blue text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ChatSimulator;
