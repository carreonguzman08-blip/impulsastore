import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProfessionalGuaranteeSection from "@/components/professional-guarantee-section";
import CredentialsSection from "@/components/credentials-section";
import ContactSection from "@/components/contact-section";
import AdminPanelSection from "@/components/admin-panel-section";
import FaqSection from "@/components/faq-section";
import DemosBanner from "@/components/demos-banner";

export default function SitiosWebPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navigation />
      
      {/* Custom Hero for Sitios Web */}
      <section className="relative w-full h-[70vh] md:h-[120vh] overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Web Elements */}
          <motion.div
            className="absolute top-24 left-12"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-24 h-16 bg-blue-500/20 rounded border border-blue-400/30 opacity-30">
              <div className="p-2">
                <div className="w-full h-2 bg-blue-400/40 rounded mb-1"></div>
                <div className="w-2/3 h-1 bg-blue-400/30 rounded mb-1"></div>
                <div className="w-1/2 h-1 bg-blue-400/20 rounded"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="absolute top-32 right-20"
            animate={{
              y: [0, 25, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="w-20 h-32 bg-blue-600/20 rounded-lg border border-blue-400/30 opacity-25">
              <div className="p-1">
                <div className="w-full h-1 bg-blue-400/50 rounded mb-1"></div>
                <div className="w-full h-8 bg-blue-400/20 rounded mb-1"></div>
                <div className="space-y-1">
                  {Array.from({length: 4}).map((_, i) => (
                    <div key={i} className="w-full h-1 bg-blue-400/30 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Browser Window Animation */}
          <motion.div
            className="absolute bottom-20 right-16"
            animate={{
              scale: [1, 1.1, 1],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <div className="w-32 h-24 bg-black/40 rounded border border-blue-400/40 opacity-40">
              <div className="flex space-x-1 p-1 border-b border-blue-400/30">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="p-2 space-y-1">
                <div className="w-full h-2 bg-blue-400/50 rounded"></div>
                <div className="w-3/4 h-1 bg-blue-400/30 rounded"></div>
                <div className="w-1/2 h-1 bg-blue-400/20 rounded"></div>
              </div>
            </div>
          </motion.div>

          {/* Code Elements */}
          <div className="absolute top-1/3 left-8">
            {['<html>', '<body>', '<div>', '</div>', '</body>', '</html>'].map((tag, i) => (
              <motion.div
                key={tag}
                className="mb-2 text-blue-400 opacity-20 font-mono text-sm"
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              >
                {tag}
              </motion.div>
            ))}
          </div>

          {/* Floating Design Elements */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${15 + i * 8}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            >
              <div className="w-3 h-3 border border-blue-400/30 rounded opacity-40" 
                   style={{ transform: `rotate(${i * 30}deg)` }} />
            </motion.div>
          ))}

          {/* Responsive Device Frames */}
          <motion.div
            className="absolute bottom-32 left-16"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative">
              {/* Desktop */}
              <div className="w-16 h-12 bg-blue-500/20 rounded border border-blue-400/40 opacity-30"></div>
              {/* Tablet */}
              <div className="absolute -right-6 top-2 w-8 h-10 bg-blue-500/15 rounded border border-blue-400/30 opacity-25"></div>
              {/* Mobile */}
              <div className="absolute -right-10 top-4 w-4 h-8 bg-blue-500/10 rounded border border-blue-400/20 opacity-20"></div>
            </div>
          </motion.div>

          {/* Network Connection Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" style={{ zIndex: 1 }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.line
                key={i}
                x1={`${20 + i * 15}%`}
                y1={`${30 + (i % 2) * 40}%`}
                x2={`${30 + i * 15}%`}
                y2={`${40 + (i % 2) * 30}%`}
                stroke="rgb(59, 130, 246)"
                strokeWidth="1"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
        </div>
        
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-8xl font-black leading-none text-white mb-4"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(59, 130, 246, 0.5)",
                  "0 0 20px rgba(59, 130, 246, 0.8)",
                  "0 0 10px rgba(59, 130, 246, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              SOLUCIONES DIGITALES COMPLETAS
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 2, delay: 0.5 }}
              className="overflow-hidden mx-auto"
            >
              <motion.p 
                className="text-xl sm:text-2xl md:text-3xl text-blue-200 mb-12 max-w-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Sitios Web • Marketing Digital • Software • Automatización IA
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Animated Web Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mb-12 flex flex-wrap justify-center gap-4 max-w-md mx-auto"
          >
            {['Sitios Web', 'Marketing', 'Software', 'IA Bot', 'Mobile'].map((tech, i) => (
              <motion.div
                key={tech}
                className="bg-black/50 backdrop-blur-md border border-blue-500/30 rounded-full px-4 py-2 text-blue-300 text-sm font-semibold"
                animate={{ 
                  scale: [1, 1.1, 1],
                  borderColor: ['rgba(59, 130, 246, 0.3)', 'rgba(59, 130, 246, 0.6)', 'rgba(59, 130, 246, 0.3)']
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.15 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/524491893068?text=Hola,%20me%20interesan%20sus%20soluciones%20digitales%20completas.%20¿Podrían%20enviarme%20más%20información%20sobre%20sus%20servicios?', '_blank')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-full transition-all shadow-xl"
          >
            CONOCER NUESTROS SERVICIOS
          </motion.button>
        </div>
      </section>

      {/* Desarrollo Básico Section */}
      <section className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: '#2a2a2a' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-full mb-6">
              <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Desarrollo Básico
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              La solución perfecta para establecer tu presencia digital profesional
            </p>
          </div>

          {/* Features Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-20 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/50 via-blue-400/50 to-blue-500/50"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 items-stretch">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/>
                    </svg>
                  ),
                  title: "Sitio web 100% personalizado",
                  description: "Diseño único adaptado a tu marca"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 4V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V10h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7z"/>
                    </svg>
                  ),
                  title: "Catálogo interactivo y sistema de reservas/pedidos",
                  description: "Funcionalidad completa de e-commerce"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/>
                    </svg>
                  ),
                  title: "Seguridad con certificado SSL",
                  description: "Protección total para tus datos"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  ),
                  title: "Dominio y hosting incluidos por 1 año",
                  description: "Todo listo para empezar"
                }
              ].map((feature, index) => (
                <div key={index} className="relative flex flex-col h-full">
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Feature Card */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group hover:transform hover:scale-105 h-full flex flex-col">
                    <div className="text-center flex-grow flex flex-col">
                      <div className="mb-4 group-hover:scale-110 transition-transform duration-300 text-blue-400 flex justify-center">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 leading-tight flex-grow flex items-center justify-center text-center min-h-[3rem]">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mt-auto">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Limitations Section */}
          <div className="mt-20 bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Limitaciones del Plan Básico
              </h3>
              <div className="w-16 h-0.5 bg-red-500 mx-auto mb-4"></div>
              <p className="text-gray-400">
                Aspectos a considerar antes de elegir este plan
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "⏰",
                  title: "Soporte técnico solo por 30 días",
                  description: "Tiempo limitado de asistencia"
                },
                {
                  icon: "📢",
                  title: "No incluye herramientas de marketing",
                  description: "Sin funciones promocionales"
                },
                {
                  icon: "⬆️",
                  title: "Escalable solo con el Paquete Premium",
                  description: "Actualización necesaria para crecer"
                }
              ].map((limitation, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/30 transition-colors">
                    <span className="text-2xl">{limitation.icon}</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-sm">
                    {limitation.title}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {limitation.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Desarrollo Premium Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-amber-600 via-yellow-600 to-orange-600">
        {/* Premium Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c13.255 0 24-10.745 24-24S53.255-8 40-8 16 2.745 16 16s10.745 24 24 24zm0-2c-12.15 0-22-9.85-22-22s9.85-22 22-22 22 9.85 22 22-9.85 22-22 22z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Premium Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Desarrollo Premium
            </h2>
            <div className="w-24 h-1 bg-white/50 mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-4">
              Incluye todo lo del paquete básico, más:
            </p>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-white font-semibold">✨ Funciones Avanzadas</span>
            </div>
          </div>

          {/* Premium Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "📧",
                title: "Recordatorios automáticos",
                subtitle: "(email y SMS)",
                description: "Mantén a tus clientes informados automáticamente",
                features: ["Email marketing", "SMS notifications", "Recordatorios de citas"]
              },
              {
                icon: "💬",
                title: "Chat en vivo y área privada",
                subtitle: "de clientes",
                description: "Comunicación directa y portal exclusivo",
                features: ["Chat en tiempo real", "Portal de cliente", "Historial de conversaciones"]
              },
              {
                icon: "📊",
                title: "Panel de administración",
                subtitle: "con reportes de ventas",
                description: "Analytics completos para tomar decisiones",
                features: ["Reportes detallados", "Métricas en tiempo real", "Análisis de tendencias"]
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 font-medium text-sm mb-4">
                      {feature.subtitle}
                    </p>
                    <p className="text-white/70 text-sm mb-6">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center text-white/80 text-sm">
                        <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium CTA */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 inline-block">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Listo para el siguiente nivel?
              </h3>
              <p className="text-white/80 mb-6">
                Potencia tu negocio con herramientas profesionales avanzadas
              </p>
              <button
                onClick={() => window.open('https://wa.me/524491893068?text=Hola,%20me%20interesa%20el%20Plan%20Premium%20para%20mi%20sitio%20web.%20¿Podrías%20enviarme%20más%20información?', '_blank')}
                className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Solicitar Plan Premium
              </button>
            </div>
          </div>
        </div>
      </section>


      <ProfessionalGuaranteeSection />
      <CredentialsSection />
      <ContactSection />
      <AdminPanelSection />
      <FaqSection />
      <DemosBanner />
    </div>
  );
}