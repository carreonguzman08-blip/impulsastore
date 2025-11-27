import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Consulta sobre servicios - Impulso 360°");
    const body = encodeURIComponent("Hola,\n\nMe interesa conocer más sobre los servicios de Impulso 360°. Me gustaría que me contacten para una consulta.\n\nGracias.");
    const mailtoUrl = `mailto:impulsa360clients@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      {/* Main Support Button */}
      <motion.div
        className="relative cursor-pointer group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleEmailClick}
      >
        {/* Button Background */}
        <div 
          className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white px-4 py-2 rounded-full shadow-2xl border border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:shadow-purple-500/25 hover:shadow-2xl"
          style={{
            minWidth: '120px',
            background: isHovered 
              ? 'linear-gradient(135deg, #1e1b4b, #581c87, #1e1b4b)' 
              : 'linear-gradient(135deg, #111827, #4c1d95, #111827)'
          }}
        >
          <div className="flex items-center justify-center space-x-2">
            {/* Support Icon */}
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <svg 
                width="18" 
                height="18" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                className="text-purple-300"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </motion.div>
            
            {/* Support Text */}
            <span className="text-sm font-semibold tracking-wide text-purple-200">
              Support
            </span>
          </div>
          
          {/* Glow Effect */}
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(147, 51, 234, 0.1))',
              filter: 'blur(8px)',
              zIndex: -1
            }}
          />
        </div>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: 10, x: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-xl whitespace-nowrap border border-purple-500/30"
            >
              Envíanos un correo
              <div 
                className="absolute top-full right-4 w-0 h-0" 
                style={{
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: '6px solid #111827'
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-400"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
}