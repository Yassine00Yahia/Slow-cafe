import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [animationStage, setAnimationStage] = useState<'initial' | 'logo' | 'text' | 'complete'>('initial');

  useEffect(() => {
    // Stage 1: Initial pause
    setTimeout(() => {
      setAnimationStage('logo');
    }, 500);

    // Stage 2: Show logo, then reveal text
    setTimeout(() => {
      setAnimationStage('text');
    }, 2000);

    // Stage 3: Complete animation and exit
    setTimeout(() => {
      setAnimationStage('complete');
      setTimeout(onComplete, 500); // Allow time for exit animation
    }, 4000);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {animationStage !== 'complete' && (
        <motion.div
          className="fixed inset-0 bg-[#1A4021] flex flex-col items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: animationStage === 'initial' ? 0.8 : 1, 
              opacity: animationStage === 'initial' ? 0 : 1 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              delay: 0.2 
            }}
            className="mb-8"
          >
            <Logo small={false} />
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: animationStage === 'text' ? 1 : 0,
              y: animationStage === 'text' ? 0 : 20
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-white text-xl md:text-2xl font-light mb-4 font-serif">Welcome to</h2>
            <h1 className="text-white text-4xl md:text-5xl font-bold font-serif">The Slow Experience</h1>
            <p className="text-white/70 mt-4 max-w-md mx-auto">
              Where every cup tells a story of careful craftsmanship and quality ingredients
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;