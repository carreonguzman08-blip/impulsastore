import { motion } from "framer-motion";
import { Bot, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function NewServiceBanner() {
  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-r from-blue-800 via-blue-700 to-teal-800 py-4 border-2 border-teal-500/50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-4 h-4 text-teal-300" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Main message */}
          <div className="flex items-center space-x-4">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Bot className="w-8 h-8 text-teal-300" />
            </motion.div>
            
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <motion.span
                  className="bg-teal-500 text-black text-xs font-bold px-2 py-1 rounded-full"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ¡NUEVO SERVICIO!
                </motion.span>
                <span className="text-teal-300 text-sm font-semibold">AUTOMATIZACIÓN IA</span>
              </div>
              
              <h3 className="text-white font-bold text-lg md:text-xl">
                Tu secretaria digital 24/7 que responde, agenda y vende por WhatsApp
              </h3>
              
              <p className="text-blue-100 text-sm mt-1">
                Por una fracción de un sueldo - ¡Incrementa ventas mientras duermes!
              </p>
            </div>
          </div>

          {/* Right side - CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/automatizacion">
              <motion.button
                className="bg-teal-500 hover:bg-teal-400 text-black px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 flex items-center whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Demo Gratis
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </Link>
            
            <a
              href="tel:+16187422024"
              className="border-2 border-cyan-300 text-teal-300 hover:bg-teal-400 hover:text-black px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 flex items-center whitespace-nowrap"
            >
              Probar Bot por Teléfono
            </a>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-2 right-20 opacity-30"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-6 bg-yellow-400/30 rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-2 left-20 opacity-20"
        animate={{
          y: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="w-4 h-4 bg-blue-300/40 rounded-full"></div>
      </motion.div>
    </motion.div>
  );
}