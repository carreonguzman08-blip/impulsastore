import { motion } from 'framer-motion';
import logoImage from '@assets/Diseño sin título (1)_1754076080770.png';

interface AnimatedLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function AnimatedLogo({ className = '', size = 'md' }: AnimatedLogoProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Subtle glow effect */}
      <motion.div
        className={`absolute inset-0 bg-white/20 rounded-full blur-md ${sizeClasses[size]}`}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Main logo with gentle animations */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={logoImage}
          alt="Impulso 360 Logo"
          className={`${sizeClasses[size]} object-contain filter drop-shadow-lg`}
          animate={{
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Subtle rotating border */}
        <motion.div
          className={`absolute inset-0 border border-white/30 rounded-full ${sizeClasses[size]}`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </div>
  );
}