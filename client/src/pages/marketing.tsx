import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navigation />
      
      {/* Custom Hero for Marketing */}
      <section className="relative w-full h-[70vh] md:h-[120vh] overflow-hidden bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Social Media Icons */}
          <motion.div
            className="absolute top-20 left-16 opacity-20"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg className="w-12 h-12 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </motion.div>
          
          <motion.div
            className="absolute top-32 right-24 opacity-15"
            animate={{
              y: [0, 30, 0],
              rotate: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <svg className="w-16 h-16 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-32 left-24 opacity-10"
            animate={{
              y: [0, -35, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <svg className="w-20 h-20 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </motion.div>

          {/* Animated Growth Arrow */}
          <motion.div
            className="absolute top-1/2 right-16 transform -translate-y-1/2"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg className="w-24 h-24 text-teal-500 opacity-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            </svg>
          </motion.div>

          {/* Social Media Platforms Animation */}
          <div className="absolute top-1/4 left-8">
            {['FB', 'IG', 'TK'].map((platform, i) => (
              <motion.div
                key={platform}
                className="mb-4 w-12 h-12 bg-teal-600/20 rounded-full flex items-center justify-center text-orange-300 text-sm font-bold"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeInOut"
                }}
              >
                {platform}
              </motion.div>
            ))}
          </div>

          {/* Floating Analytics Charts */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            >
              <div className="w-16 h-12 bg-teal-500/10 rounded border border-orange-400/20">
                <div className="p-1">
                  <div className="flex items-end space-x-1 h-8">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <motion.div
                        key={j}
                        className="bg-teal-500/40 rounded-sm flex-1"
                        animate={{
                          height: [`${20 + Math.random() * 60}%`, `${30 + Math.random() * 50}%`]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: j * 0.2
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Floating Engagement Particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-teal-500 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -150, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
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
                  "0 0 10px rgba(251, 146, 60, 0.5)",
                  "0 0 20px rgba(251, 146, 60, 0.8)",
                  "0 0 10px rgba(251, 146, 60, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              MARKETING
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 2, delay: 0.5 }}
              className="overflow-hidden mx-auto"
            >
              <motion.p 
                className="text-xl sm:text-2xl md:text-3xl text-orange-200 mb-12 max-w-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Multiplicamos tus ventas con estrategias digitales comprobadas
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Animated Growth Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mb-12 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {[
              { label: "ROI", value: "300%", color: "text-green-400" },
              { label: "Alcance", value: "+500K", color: "text-teal-500" },
              { label: "Conversión", value: "15%", color: "text-blue-400" }
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                className="bg-black/50 backdrop-blur-md border border-teal-600/30 rounded-xl p-4 text-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              >
                <motion.div 
                  className={`text-2xl font-bold ${metric.color}`}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                >
                  {metric.value}
                </motion.div>
                <div className="text-xs text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(251, 146, 60, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/524491893068?text=Hola,%20me%20interesa%20multiplicar%20mis%20ventas%20con%20marketing%20digital.%20¿Podrías%20enviarme%20más%20información?', '_blank')}
            className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold rounded-full transition-all shadow-xl"
          >
            MULTIPLICAR MIS VENTAS
          </motion.button>
        </div>
      </section>

      {/* Marketing Digital Section */}
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-600/20 rounded-full mb-6">
              <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Marketing Digital
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Este servicio complementa tu página web para atraer más clientes y fidelizarlos
            </p>
          </div>

          {/* Phone Mockup and Features Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Marketing Dashboard SVG */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative max-w-lg">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="bg-gradient-to-br from-purple-600 to-orange-600 p-8 rounded-2xl shadow-2xl"
                >
                  {/* Marketing Metrics Display */}
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-6 border border-orange-400/30">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto bg-teal-600 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <path d="M12 2v4m0 12v4M2 12h4m12 0h4"/>
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Resultados Reales</h4>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">+250%</div>
                        <div className="text-sm text-gray-300">Ventas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">15.2K</div>
                        <div className="text-sm text-gray-300">Clicks</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">3.8x</div>
                        <div className="text-sm text-gray-300">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-teal-500">300%</div>
                        <div className="text-sm text-gray-300">Crecimiento</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-3.84 3.11-4.1V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 4.15-3.12 4.16z"/>
                    </svg>
                  </motion.div>

                  <motion.div 
                    className="absolute -bottom-4 -left-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.3, 1], y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  ),
                  title: "Publicidad profesional en Facebook, Instagram, TikTok y Google Ads",
                  description: "Campañas optimizadas en las principales plataformas digitales para maximizar tu alcance y conversiones"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  ),
                  title: "Gestión de redes sociales con contenido atractivo",
                  description: "Contenido profesional y estratégico que conecta con tu audiencia y construye una comunidad sólida"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                    </svg>
                  ),
                  title: "Reportes mensuales con métricas y ROI",
                  description: "Análisis detallados del rendimiento de tus campañas con métricas claras y retorno de inversión"
                }
              ].map((feature, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="flex items-start space-x-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-600/30 transition-all duration-300 hover:bg-white/10">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-teal-600/20 rounded-2xl flex items-center justify-center group-hover:bg-teal-600/30 transition-colors text-teal-500">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-md rounded-2xl p-8 border border-teal-600/20 inline-block">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Quieres duplicar tus ventas en los próximos 3 meses?
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Descubre cómo nuestras estrategias de marketing digital han ayudado a empresas como la tuya a generar más clientes y aumentar sus ingresos
              </p>
              <button
                onClick={() => window.open('https://wa.me/524491893068?text=Hola,%20me%20interesa%20duplicar%20mis%20ventas%20con%20marketing%20digital', '_blank')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl flex items-center mx-auto"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.306"/>
                </svg>
                Quiero Duplicar Mis Ventas
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}