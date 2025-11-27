import { motion } from "framer-motion";
import LiquidEther from "./LiquidEther";

export default function HeroSection() {
  const handleScrollToIntro = () => {
    const introSection = document.querySelector('#introduccion');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animaciones para las letras del título
  const titleWords = ["Soluciones", "digitales", "360°"];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.8
      }
    }
  };

  return (
    <header id="inicio" className="relative w-full h-[100vh] overflow-hidden">
      {/* Liquid Ether Background */}
      <div
        style={{
          width: '100vw',           // 100% del ancho del viewport
          height: '100vh',          // 100% del alto del viewport
          position: 'fixed',        // Fija el fondo
          top: 0,
          left: 0,
          zIndex: -1,               // Lo manda al fondo de todo el contenido
          pointerEvents: 'none'     // Permite clics y eventos a través de él (¡CRUCIAL!)
        }}
      >
        <LiquidEther
          // Propiedad CRUCIAL para forzar la detección del mouse
          autoDemo={false} 
          
          // Propiedades originales que te gustaron
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={30} // Aumentado ligeramente para mayor sensibilidad
          cursorSize={150} // Aumentado para que la onda sea más visible
          
          // Mantenemos el resto por si afectan al look & feel
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black/40 via-transparent to-black/30 z-5 pointer-events-none"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-5" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(82, 39, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(82, 39, 255, 0.2) 1px, transparent 1px)',
             backgroundSize: '50px 50px'
          }}>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">



        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 sm:mb-6 md:mb-8"
        >
          <div className="text-white text-xs sm:text-xs md:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase opacity-90">
            Sitios Web • Marketing • Software • Automatización IA
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 sm:mb-12 md:mb-16 w-full max-w-7xl px-2"
          style={{ 
            perspective: "1000px",
            transform: "translateZ(0)", // Hardware acceleration
            willChange: "transform"
          }}
        >
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 py-8">
            {titleWords.map((word, index) => (
              <motion.h1
                key={index}
                variants={wordVariants}
                className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[1.2] text-white"
                style={{ 
                  fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
                  textShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 60px rgba(255,255,255,0.1)",
                  background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  wordBreak: "keep-all",
                  hyphens: "none",
                  transform: "translateZ(0)",
                  willChange: "transform",
                  lineHeight: "1.2",
                  paddingBottom: "0.2em"
                }}
              >
                {word}
              </motion.h1>
            ))}
          </div>
        </motion.div>

        {/* Subtítulo con promesa de valor - más abajo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-8 sm:mb-10 md:mb-12 mt-4 sm:mt-6 md:mt-8"
        >
          <p className="text-white text-xs sm:text-sm md:text-base font-medium tracking-[0.1em] sm:tracking-[0.2em] leading-relaxed max-w-3xl mx-auto px-4">
            TU PARTNER DIGITAL COMPLETO: DESDE SITIOS WEB HASTA AUTOMATIZACIÓN IA. <span className="text-purple-400 font-bold">AUMENTA TUS VENTAS HASTA UN 15%</span> EN 30 DÍAS
          </p>
        </motion.div>

        {/* Call to action button - Glow Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="z-10"
        >
          <button
            className="glow-button"
            onClick={handleScrollToIntro}
          >
            Descubre Más
          </button>
        </motion.div>

        {/* Espacio adicional después del botón */}
        <div className="mt-8 sm:mt-12"></div>
      </div>
    </header>
  );
}