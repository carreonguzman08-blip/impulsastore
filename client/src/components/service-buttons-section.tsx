import { motion } from "framer-motion";
import { Link } from "wouter";
import { Globe, TrendingUp, Zap, Bot } from "lucide-react";

export default function ServiceButtonsSection() {
  const services = [
    {
      title: "SITIOS WEB",
      subtitle: "Desarrollo Web Profesional", 
      description: "Sitios web modernos, rápidos y optimizados para conversión",
      href: "/sitios-web",
      Icon: Globe
    },
    {
      title: "MARKETING",
      subtitle: "Marketing Digital Efectivo",
      description: "Estrategias comprobadas para hacer crecer tu negocio",
      href: "/marketing", 
      Icon: TrendingUp
    },
    {
      title: "SOFTWARE",
      subtitle: "Software a Medida", 
      description: "Soluciones personalizadas para automatizar tu empresa",
      href: "/software",
      Icon: Zap
    },
    {
      title: "AUTOMATIZACIÓN IA",
      subtitle: "Secretaria Digital 24/7", 
      description: "Bot inteligente que responde, agenda y vende por WhatsApp",
      href: "/automatizacion",
      Icon: Bot,
      isNew: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zinc-900 via-gray-900 to-zinc-900 relative overflow-hidden">
      {/* Animated tech background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
          animate={{ 
            scaleX: [0, 1, 0],
            x: [0, 300, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-orange-400/30 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 left-10 w-2 h-2 bg-blue-300/60 rounded-full"
          animate={{ 
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.6, 0.2, 0.6]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nuestros <span className="text-teal-400">Servicios</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Selecciona el servicio que mejor se adapte a las necesidades de tu negocio
          </motion.p>
        </div>

        {/* Service Buttons Grid - Now with 4 services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: "backOut",
                scale: { type: "spring", stiffness: 200 }
              }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Link href={service.href}>
                <motion.div
                  className={`group relative h-full ${service.isNew ? 'bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 border-2 border-yellow-400' : 'bg-gradient-to-br from-red-600 via-red-700 to-red-800'} rounded-xl p-6 cursor-pointer overflow-hidden shadow-xl will-change-transform`}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                >
                  {/* Red glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated red light beam */}
                  <div className="absolute -top-2 -right-2 w-32 h-32 bg-red-400/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150"></div>
                  
                  {/* Inner glow border */}
                  <div className="absolute inset-0 rounded-xl border border-red-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* NEW Badge */}
                  {service.isNew && (
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full animate-pulse z-20">
                      ¡NUEVO!
                    </div>
                  )}

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Professional Icon - Reduced size for 30% smaller cards */}
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.Icon 
                        size={44} 
                        className={`text-white drop-shadow-lg transition-colors duration-300 ${service.isNew ? 'group-hover:text-yellow-100' : 'group-hover:text-red-100'}`}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Title - Reduced size */}
                    <h3 className={`text-xl font-bold text-white mb-2 transition-colors duration-300 ${service.isNew ? 'group-hover:text-yellow-100' : 'group-hover:text-red-100'}`}>
                      {service.title}
                    </h3>

                    {/* Subtitle - Reduced size */}
                    <h4 className={`text-base font-semibold mb-3 opacity-90 ${service.isNew ? 'text-yellow-100' : 'text-red-100'}`}>
                      {service.subtitle}
                    </h4>

                    {/* Description - Reduced size */}
                    <p className={`text-sm leading-relaxed flex-grow opacity-90 group-hover:opacity-100 transition-opacity duration-300 ${service.isNew ? 'text-blue-50' : 'text-red-50'}`}>
                      {service.description}
                    </p>

                    {/* Call to action - Reduced spacing */}
                    <div className={`mt-6 pt-3 border-t ${service.isNew ? 'border-purple-400/30' : 'border-red-400/30'}`}>
                      <span className={`text-sm text-white font-semibold transition-colors duration-300 flex items-center ${service.isNew ? 'group-hover:text-yellow-100' : 'group-hover:text-red-100'}`}>
                        {service.isNew ? '¡Pruébalo!' : 'Ver Más'}
                        <motion.span 
                          className="ml-2"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-red-300/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ 
                      x: '200%',
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg">
            ¿No estás seguro cuál necesitas? 
            <Link href="https://wa.me/524491893068?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios">
              <span className="text-red-500 hover:text-red-400 ml-2 font-semibold cursor-pointer transition-colors duration-300">
                Contáctanos para una consulta gratuita →
              </span>
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}