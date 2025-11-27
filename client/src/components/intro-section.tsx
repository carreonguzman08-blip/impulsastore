import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, ShoppingCart, CreditCard, Calendar, MessageCircle, ChevronDown } from "lucide-react";

export default function IntroSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const features = [
    {
      icon: Monitor,
      title: "Diseño 100% enfocado en su marca",
      bullets: ["Genera confianza desde el primer clic", "Adaptado a su identidad visual"]
    },
    {
      icon: ShoppingCart,
      title: "Catálogo o menú interactivo",
      bullets: ["Productos con fotos profesionales", "Descripciones que venden"]
    },
    {
      icon: CreditCard,
      title: "Sistema de pagos funcional",
      bullets: ["Tarjeta, transferencia y PayPal", "Integración segura y rápida"]
    },
    {
      icon: Calendar,
      title: "Reservaciones y pedidos",
      bullets: ["Confirmación automática", "Gestión eficiente de citas"]
    },
    {
      icon: MessageCircle,
      title: "Módulos personalizados",
      bullets: ["Chat en vivo incluido", "Newsletter y reseñas"]
    }
  ];



  return (
    <section id="introduccion" className="py-8 md:py-16 bg-gray-800 relative overflow-hidden">
      {/* Animated tech objects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 right-10 w-20 h-20 border-2 border-emerald-400/30 rounded-lg"
          animate={{ 
            rotate: [0, -180, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-10 w-16 h-16 bg-teal-400/20 rounded-full"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 right-1/4 w-12 h-12 border border-blue-300/40 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.1, 0.4]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-12"
        >
          <h2 className="text-xl md:text-4xl font-bold text-white mb-3 md:mb-6 px-2 leading-tight">
            Una Propuesta <span className="text-teal-400">Única</span> para Su Negocio
          </h2>
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed mb-6 md:mb-8">
              Quiero ofrecerles algo que <strong>nadie más les da</strong>: una página web a la medida de su negocio, 
              por un precio increíblemente accesible.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-16"
        >
          {/* Botón desplegable */}
          <div className="text-center mb-8 md:mb-12">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 text-lg md:text-3xl font-bold text-white hover:text-teal-400 transition-colors duration-300 group px-2"
            >
              ¿Quieres saber en qué consiste?
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-teal-400 group-hover:text-teal-300"
              >
                <ChevronDown size={32} />
              </motion.div>
            </button>
          </div>

          {/* Contenido desplegable */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="max-w-6xl mx-auto">
                  {/* Primera fila - 3 tarjetas móvil: columna, desktop: 3 columnas */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-4 md:mb-8">
                    {features.slice(0, 3).map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="bg-gray-700 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-teal-500 group"
                      >
                        <div className="w-14 h-14 bg-teal-700 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                          <feature.icon size={28} strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4 leading-tight">{feature.title}</h4>
                        <ul className="space-y-3">
                          {feature.bullets.map((bullet, idx) => (
                            <li key={idx} className="text-gray-300 text-sm leading-relaxed flex items-start">
                              <span className="text-teal-400 mr-2 mt-1 text-xs">●</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Segunda fila - 2 tarjetas centradas */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                    {features.slice(3, 5).map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
                        className="bg-gray-700 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-teal-500 group"
                      >
                        <div className="w-14 h-14 bg-teal-700 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                          <feature.icon size={28} strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4 leading-tight">{feature.title}</h4>
                        <ul className="space-y-3">
                          {feature.bullets.map((bullet, idx) => (
                            <li key={idx} className="text-gray-300 text-sm leading-relaxed flex items-start">
                              <span className="text-teal-400 mr-2 mt-1 text-xs">●</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>


      </div>
    </section>
  );
}