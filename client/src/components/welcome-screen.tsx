import { motion } from "framer-motion";
import logoPath from "@assets/Diseño sin título_1753986866824.png";
import astronautsImage from "@assets/20250717_1919_Astronautas en la Luna_remix_01k0dhq050e1vskfqp0nsetc0h_1752806504910.png";

interface WelcomeScreenProps {
  onContinue: () => void;
}

export default function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white">
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        {/* Welcome Text */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
        >
          Bienvenido a
        </motion.h1>
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-8"
        >
          <img 
            src={logoPath} 
            alt="Impulso 360° Digital Logo" 
            className="h-40 md:h-48 lg:h-56 w-auto mx-auto drop-shadow-2xl"
          />
        </motion.div>
        
        {/* Continue Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: [1, 1.02, 1],
            boxShadow: [
              "0 8px 32px rgba(255, 255, 255, 0.3)",
              "0 12px 40px rgba(255, 255, 255, 0.5)",
              "0 8px 32px rgba(255, 255, 255, 0.3)"
            ]
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 4 },
            y: { duration: 0.8, delay: 4 },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 6 },
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 6 }
          }}
          whileHover={{ 
            scale: 1.08,
            boxShadow: "0 20px 40px rgba(255, 255, 255, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="relative bg-gradient-to-r from-white/80 to-white/90 hover:from-white/90 hover:to-white text-black px-6 py-3 rounded-lg text-lg md:text-xl font-bold transition-all duration-300 shadow-2xl border-2 border-white/50 hover:border-white/80 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
            boxShadow: '0 8px 32px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
          }}
        >
          <span className="relative z-10 drop-shadow-2xl">Empezar a Ver</span>
          
          {/* Efecto de brillo animado */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 300, opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
        </motion.button>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{ 
                x: Math.random() * 800,
                y: 600,
                opacity: 0
              }}
              animate={{
                y: -10,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}