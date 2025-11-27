import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Clock } from "lucide-react";

export default function ConfidencePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Solo mostrar una vez por sesión
    if (hasShown) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      setHasShown(true);
    }, 12000); // 12 segundos

    return () => clearTimeout(timer);
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll to bottom of page where contact usually is
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay con desenfoque del fondo */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/30 z-40 cursor-pointer"
            onClick={handleClose}
          />

          {/* Popup */}
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 250,
                damping: 25
              }}
              className="w-full max-w-xs pointer-events-auto"
            >
            {/* Modern Glassmorphism Card Design */}
            <div className="relative w-full max-w-sm mx-auto">
              {/* Background gradient effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-600/30 to-pink-500/20 rounded-3xl blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-orange-500/20 via-red-500/25 to-yellow-500/20 rounded-3xl blur-2xl transform rotate-6"></div>
              
              {/* Main card */}
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl opacity-50"></div>
                <div className="absolute inset-[2px] bg-black/60 backdrop-blur-xl rounded-3xl"></div>
                
                {/* Close button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10 z-50 cursor-pointer"
                  type="button"
                >
                  <X size={18} />
                </button>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon with modern design */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.2, 
                      duration: 0.8,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="w-16 h-16 mx-auto mb-6 relative"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Shield size={28} className="text-white drop-shadow-lg" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl blur-lg opacity-50 -z-10"></div>
                  </motion.div>

                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mb-4"
                  >
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      ¿Estás <span className="text-purple-400">dudando</span>?
                    </h3>
                    <div className="flex items-center justify-center text-gray-300">
                      <Clock size={14} className="mr-2 text-purple-400" />
                      <span className="text-sm font-medium">No te preocupes</span>
                    </div>
                  </motion.div>

                  {/* Main message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mb-6"
                  >
                    <p className="text-sm text-gray-300 leading-relaxed mb-3">
                      Para mejorar la confianza en nuestros clientes:
                    </p>
                    <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-400/30 rounded-2xl p-4 backdrop-blur-sm">
                      <p className="text-base font-semibold text-white leading-relaxed">
                        <span className="text-purple-400 font-bold">Te devolvemos tu dinero</span> si no logras incrementar tus ventas dentro de un plazo de <span className="text-pink-400 font-bold">60 días</span>
                      </p>
                    </div>
                  </motion.div>

                  {/* Stats cards */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="grid grid-cols-2 gap-4 mb-6"
                  >
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                      <motion.div 
                        className="text-3xl font-black text-purple-400 mb-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                      >
                        100%
                      </motion.div>
                      <div className="text-xs font-semibold text-purple-300">
                        Garantía de<br />Devolución
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                      <motion.div 
                        className="text-3xl font-black text-pink-400 mb-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                      >
                        60
                      </motion.div>
                      <div className="text-xs font-semibold text-pink-300">
                        Días de<br />Prueba
                      </div>
                    </div>
                  </motion.div>

                  {/* Action buttons */}
                  <div className="space-y-3">
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      onClick={handleContactClick}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white font-bold py-3.5 px-6 rounded-2xl hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 transition-all shadow-2xl text-base relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl"></div>
                      <span className="relative">¡Quiero Empezar Sin Riesgo!</span>
                    </motion.button>
                    
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      onClick={handleClose}
                      whileHover={{ 
                        scale: 1.01,
                        backgroundColor: "rgba(255, 255, 255, 0.15)"
                      }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full bg-white/5 text-gray-300 font-semibold py-3 px-4 rounded-2xl hover:bg-white/10 transition-all border border-white/20 text-sm backdrop-blur-sm"
                    >
                      Seguir Navegando
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}