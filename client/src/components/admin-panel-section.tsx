import { motion } from "framer-motion";
import { Settings, BarChart3, Users, ShoppingCart, Globe, Smartphone, Palette, Shield, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import adminVideoPath from "@assets/Diseño sin título (2) (1)_1755492151258.mp4";

export default function AdminPanelSection() {
  const [showFeatures, setShowFeatures] = useState(false);
  
  const features = [
    {
      icon: Settings,
      title: "Configuración Total",
      description: "Controla cada aspecto de tu sitio web desde un solo lugar"
    },
    {
      icon: BarChart3,
      title: "Análisis en Tiempo Real",
      description: "Métricas detalladas de visitantes, ventas y conversiones"
    },
    {
      icon: Users,
      title: "Gestión de Clientes",
      description: "Base de datos completa con historial de compras y contactos"
    },
    {
      icon: ShoppingCart,
      title: "Catálogo Dinámico",
      description: "Agrega, edita y organiza productos sin conocimientos técnicos"
    },
    {
      icon: Globe,
      title: "SEO Automático",
      description: "Optimización para buscadores que se actualiza automáticamente"
    },
    {
      icon: Smartphone,
      title: "Vista Móvil",
      description: "Previsualiza cómo se ve tu sitio en cualquier dispositivo"
    },
    {
      icon: Palette,
      title: "Diseño Personalizable",
      description: "Cambia colores, fuentes y elementos visuales al instante"
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Protección completa contra ataques y respaldos automáticos"
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-gray-800 relative overflow-hidden">
      {/* Animated tech elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 left-1/3 w-10 h-10 border-2 border-blue-400/30 rounded-full"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-16 right-16 w-3 h-16 bg-gradient-to-t from-teal-500/40 to-transparent"
          animate={{ 
            scaleY: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Panel de Administración
            <span className="block text-teal-400">Totalmente Personalizado</span>
          </h2>
          <p className="text-base text-blue-100 max-w-3xl mx-auto leading-relaxed mb-4">
            Controla tu sitio web desde un panel diseñado específicamente para tus necesidades. 
            Fácil de usar, potente en funciones, adaptado a tu comodidad.
          </p>
          
          {/* Botón para mostrar/ocultar funcionalidades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => setShowFeatures(!showFeatures)}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
            >
              {showFeatures ? 'Ocultar Funcionalidades' : 'Ver Todas las Funcionalidades'}
              {showFeatures ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </Button>
          </motion.div>
        </motion.div>

        {/* Contenido principal que se muestra/oculta */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: showFeatures ? 1 : 0,
            height: showFeatures ? 'auto' : 0
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center pt-4">
            {/* Video Demo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  src={`${adminVideoPath}?v=${Date.now()}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  key={adminVideoPath}
                  className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-3xl"
                  style={{ 
                    pointerEvents: 'none',
                    userSelect: 'none',
                    WebkitUserSelect: 'none'
                  }}
                >
                  Tu navegador no soporta el elemento de video.
                </video>

                {/* Borde animado */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-teal-500/20"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(20, 184, 166, 0.4)",
                      "0 0 0 10px rgba(20, 184, 166, 0)",
                      "0 0 0 0 rgba(20, 184, 166, 0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-3">
                  Diseñado Para Tu Comodidad
                </h3>
                <p className="text-gray-300 mb-4">
                  Cada funcionalidad está pensada para que administres tu negocio sin complicaciones. 
                  No necesitas ser experto en tecnología.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-2 bg-teal-600 rounded-xl hover:bg-teal-700 transition-colors group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-teal-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <feature.icon size={14} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-white mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-gray-200">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="pt-6"
              >
                <div className="bg-teal-900/50 border-l-4 border-teal-400 p-4 rounded-lg">
                  <p className="text-teal-300 font-semibold text-sm">
                    Panel totalmente personalizado según las necesidades de tu negocio
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="bg-gradient-to-r from-teal-800 to-teal-700 rounded-2xl p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">
              Tu Negocio, Tu Ritmo, Tu Control
            </h3>
            <p className="text-sm text-teal-100 mb-4 max-w-2xl mx-auto">
              Actualiza contenido a cualquier hora, revisa estadísticas desde tu teléfono, 
              y mantén tu sitio web siempre actualizado sin depender de nadie más.
            </p>
            
            <div className="flex justify-center items-center gap-2 md:gap-4 mt-8 px-2">
              <div className="text-center flex-1 max-w-24">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-xs font-bold text-white">24/7</span>
                </div>
                <h4 className="text-xs font-semibold text-white mb-1 leading-tight">Acceso Total</h4>
                <p className="text-xs text-teal-200 leading-tight">Administra cuando quieras</p>
              </div>
              
              <div className="text-center flex-1 max-w-24">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-xs font-bold text-white">0%</span>
                </div>
                <h4 className="text-xs font-semibold text-white mb-1 leading-tight">Conocimiento Técnico</h4>
                <p className="text-xs text-teal-200 leading-tight">Interfaz intuitiva</p>
              </div>
              
              <div className="text-center flex-1 max-w-24">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-xs font-bold text-white">100%</span>
                </div>
                <h4 className="text-xs font-semibold text-white mb-1 leading-tight">Personalizado</h4>
                <p className="text-xs text-teal-200 leading-tight">Adaptado a tu negocio</p>
              </div>
            </div>
            
            {/* Call to Action Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
              className="mt-6 text-center"
            >
              <Button 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => window.open('https://wa.me/16187422049?text=Hola, me interesa el panel de administración personalizado', '_blank')}
              >
                Solicitar Demo Personalizada
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}