import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '@assets/Diseño sin título (1)_1754076080770.png';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after logo animation
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1500);

    // Auto-hide after 4 seconds total
    const hideTimer = setTimeout(() => {
      handleComplete();
    }, 4000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 500); // Wait for exit animation
  };



  const handleSkip = () => {
    handleComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          {/* Skip button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.3 }}
            onClick={handleSkip}
            className="absolute top-6 right-6 z-10 px-4 py-2 text-white/80 hover:text-white border border-white/30 hover:border-white/60 rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            Saltar
          </motion.button>

          {/* Logo Animation Container */}
          <div className="relative w-full max-w-lg mx-auto px-8">
            <div className="relative flex flex-col items-center justify-center">
              
              {/* Animated Logo */}
              <motion.div
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.6, -0.05, 0.01, 0.99],
                  type: "spring",
                  damping: 12
                }}
                className="relative mb-8"
              >
                {/* Glow effect behind logo */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: 0.3 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute inset-0 bg-white rounded-full blur-xl"
                />
                
                {/* Main logo */}
                <motion.img
                  src={logoImage}
                  alt="Impulso 360 Logo"
                  className="relative z-10 w-32 h-32 md:w-40 md:h-40 object-contain"
                  initial={{ filter: "brightness(0.5)" }}
                  animate={{ filter: "brightness(1)" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
                
                {/* Rotating ring animation */}
                <motion.div
                  className="absolute inset-0 border-2 border-white/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>

              {/* Brand text */}
              <AnimatePresence>
                {showText && (
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.6, -0.05, 0.01, 0.99]
                    }}
                    className="text-center"
                  >
                    <motion.h1 
                      className="text-3xl md:text-4xl font-bold text-white mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      Impulso
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="text-amber-400"
                      >
                        360°
                      </motion.span>
                    </motion.h1>
                    
                    <motion.p 
                      className="text-gray-300 text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    >
                      Líderes en diseño web
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>


        </motion.div>
      )}
    </AnimatePresence>
  );
}