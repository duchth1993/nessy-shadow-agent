import React from 'react';
import { motion } from 'framer-motion';

const Confetti: React.FC = () => {
  const colors = ['#8b5cf6', '#3b82f6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b'];
  
  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random() * 0.5,
    rotation: Math.random() * 360,
    size: 8 + Math.random() * 8,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            left: piece.x,
            top: -20,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
          }}
          initial={{ y: -20, rotate: 0, opacity: 1 }}
          animate={{
            y: window.innerHeight + 100,
            rotate: piece.rotation + 720,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: piece.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
