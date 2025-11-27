import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import videoPath from "@assets/Diseño sin título (1) (1)_1755491802269.mp4";

export default function VideoShowcaseSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Animaciones basadas en scroll
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);

  return (
    <section 
      ref={sectionRef}
      className="py-8 md:py-24 overflow-hidden bg-gray-900 relative"
    >
      {/* Animated tech elements for video section */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-6 h-6 bg-violet-300/50 rounded-full"
          animate={{ 
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-32 right-32 w-8 h-8 border border-purple-400/40 rotate-45"
          animate={{ 
            rotate: [45, -315],
            scale: [1, 1.4, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 right-10 w-4 h-20 bg-gradient-to-b from-violet-400/30 to-transparent"
          animate={{ 
            scaleY: [0.5, 1, 0.5],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-16"
        >
          <h2 className="text-xl md:text-6xl font-bold text-white mb-3 md:mb-6 px-2 leading-tight">
            Experiencia <span className="text-teal-400">Inmersiva</span>
          </h2>
          <p className="text-sm md:text-xl text-blue-100 max-w-3xl mx-auto px-2 leading-relaxed">
            Descubre cómo transformamos ideas en experiencias digitales excepcionales
          </p>
        </motion.div>

        <motion.div
          style={{ 
            scale,
            opacity,
            y,
            rotateX,
            transformPerspective: 1200
          }}
          className="relative max-w-sm md:max-w-5xl mx-auto w-full"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
            
            {/* Video container con hotspots */}
            <div className="relative w-full h-[25vh] md:h-[60vh] group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ maxWidth: '100%', height: '100%' }}
                key={videoPath}
              >
                <source src={`${videoPath}?v=${Date.now()}`} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              
              {/* Hotspot 1 - Ventas */}
              <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-green-500 rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform group">
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-4 py-3 rounded-xl text-base font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-2xl border border-green-500/30">
                  +15% ventas
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-black/90"></div>
                </div>
              </div>
              
              {/* Hotspot 2 - Comisiones */}
              <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-blue-500 rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform group">
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-4 py-3 rounded-xl text-base font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-2xl border border-blue-500/30">
                  -30% comisiones
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-black/90"></div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/20 rounded-full blur-xl"
            />
            
            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
            />
          </div>

          {/* Floating cards with stats - Responsivas */}
          <motion.div
            initial={{ opacity: 0, x: -100, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -left-2 sm:-left-4 md:-left-6 top-1/4 bg-gray-700/90 backdrop-blur-lg rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-xl border border-gray-600/50 max-w-[120px] sm:max-w-none"
          >
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-amber-400">20+</div>
              <div className="text-[9px] sm:text-xs text-gray-300 leading-tight">Negocios han confiado</div>
              <div className="text-[9px] sm:text-xs text-gray-300 leading-tight">con nosotros este mes</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="absolute -right-2 sm:-right-4 md:-right-6 top-3/4 bg-gray-700/90 backdrop-blur-lg rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-xl border border-gray-600/50 max-w-[120px] sm:max-w-none"
          >
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-amber-400">70%</div>
              <div className="text-[9px] sm:text-xs text-gray-300 leading-tight">Incrementaron sus ventas</div>
              <div className="text-[9px] sm:text-xs text-gray-300 leading-tight">un 35%</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12 md:mt-16 px-4"
        >
          <button
            onClick={() => {
              const contactSection = document.querySelector('#contacto');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-amber-800 text-white px-3 md:px-8 py-2 md:py-4 rounded-lg text-sm md:text-lg font-semibold hover:bg-amber-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
          >
            Comenzar Mi Proyecto
          </button>
        </motion.div>
      </div>
    </section>
  );
}