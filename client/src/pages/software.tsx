import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navigation />
      
      {/* Custom Hero for Software */}
      <section className="relative w-full h-[70vh] md:h-[120vh] overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Restaurant Icons */}
          <motion.div
            className="absolute top-20 left-10 opacity-20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-.78-.78-2.05-.78-2.83 0l-.01.01c-.78.78-.78 2.05 0 2.83l7.02 7.01zM14.88 11.53c1.28-.68 2.46-1.56 3.42-2.61-.95-1.05-2.14-1.93-3.42-2.61L12 4.53l-2.88 1.78c-1.28.68-2.46 1.56-3.42 2.61.95 1.05 2.14 1.93 3.42 2.61L12 13.31l2.88-1.78z"/>
            </svg>
          </motion.div>
          
          <motion.div
            className="absolute top-40 right-20 opacity-15"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <svg className="w-16 h-16 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-40 left-20 opacity-10"
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <svg className="w-20 h-20 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </motion.div>

          {/* Animated Code Lines */}
          <div className="absolute inset-0 opacity-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-purple-400 h-0.5"
                style={{
                  top: `${15 + i * 12}%`,
                  left: `${10 + (i % 2) * 30}%`,
                  width: `${20 + i * 8}%`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ 
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Floating Particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Digital Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
              }}
            />
          </div>
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
                  "0 0 10px rgba(147, 51, 234, 0.5)",
                  "0 0 20px rgba(147, 51, 234, 0.8)",
                  "0 0 10px rgba(147, 51, 234, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              SOFTWARE
            </motion.h1>
            
            {/* Animated Subtitle with Typewriter Effect */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 2, delay: 0.5 }}
              className="overflow-hidden mx-auto"
            >
              <motion.p 
                className="text-xl sm:text-2xl md:text-3xl text-purple-200 mb-12 max-w-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Transformamos restaurantes con tecnología inteligente
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Animated Restaurant Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mb-12 relative"
          >
            <div className="bg-black/50 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs text-purple-300">Restaurant Dashboard</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Órdenes activas:</span>
                  <motion.span 
                    className="text-green-400 font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    24
                  </motion.span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Mesas ocupadas:</span>
                  <motion.span 
                    className="text-teal-500 font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    18/25
                  </motion.span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Ventas hoy:</span>
                  <motion.span 
                    className="text-purple-400 font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    $2,450
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <button
              className="custom-purple-button"
              onClick={() => window.open('https://wa.me/524491893068?text=Hola,%20me%20interesa%20transformar%20mi%20restaurante%20con%20el%20software%20de%20gestión.%20¿Podrías%20enviarme%20más%20información?', '_blank')}
            >
              <div className="bg"></div>
              <div className="outline"></div>
              <div className="wrap">
                <div className="content">
                  <div className="char state-1">
                    <span style={{"--i": 1} as React.CSSProperties} data-label="T">T</span>
                    <span style={{"--i": 2} as React.CSSProperties} data-label="r">r</span>
                    <span style={{"--i": 3} as React.CSSProperties} data-label="a">a</span>
                    <span style={{"--i": 4} as React.CSSProperties} data-label="n">n</span>
                    <span style={{"--i": 5} as React.CSSProperties} data-label="s">s</span>
                    <span style={{"--i": 6} as React.CSSProperties} data-label="f">f</span>
                    <span style={{"--i": 7} as React.CSSProperties} data-label="o">o</span>
                    <span style={{"--i": 8} as React.CSSProperties} data-label="r">r</span>
                    <span style={{"--i": 9} as React.CSSProperties} data-label="m">m</span>
                    <span style={{"--i": 10} as React.CSSProperties} data-label="a">a</span>
                    <span style={{"--i": 11} as React.CSSProperties} data-label="r">r</span>
                  </div>
                  <div className="icon">
                    <div></div>
                  </div>
                </div>
              </div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Software de Gestión para Restaurantes */}
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500/20 rounded-full mb-6">
              <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Software de Gestión para Restaurantes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              "El sistema que elimina papel y errores en restaurantes"
            </p>
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full inline-block font-semibold">
              PWA instalable + Mapa de mesas + KDS con timers + Reportes diarios
            </div>
          </div>

          {/* Problemas que resuelve */}
          <div className="mb-20">
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white text-center mb-12"
            >
              Problemas que Resolvemos
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  svg: (
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  ),
                  title: "Errores en pedidos",
                  description: "Meseros y cocina se confunden → platos equivocados o cancelaciones",
                  delay: 0.1
                },
                {
                  svg: (
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                    </svg>
                  ),
                  title: "Falta de información",
                  description: "No saben ventas reales al día, platillos más vendidos o horarios más llenos",
                  delay: 0.2
                },
                {
                  svg: (
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  ),
                  title: "Mala gestión de mesas",
                  description: "Sin control visual → clientes esperando más de lo necesario",
                  delay: 0.3
                }
              ].map((problem, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: problem.delay }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group perspective-1000"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-500 h-full transform-gpu hover:shadow-2xl hover:shadow-red-500/20">
                    <div className="text-center">
                      <motion.div 
                        className="w-20 h-20 bg-black/30 rounded-full flex items-center justify-center mx-auto mb-6 text-red-400"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {problem.svg}
                      </motion.div>
                      <h4 className="text-xl font-bold text-white mb-4">{problem.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Beneficios Principales */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-purple-600/20 to-purple-700/20 rounded-3xl p-8 md:p-12 border border-purple-500/20 mb-20 relative overflow-hidden"
          >
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <motion.div
                className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-10 -right-10 w-24 h-24 bg-purple-400/10 rounded-full"
                animate={{ rotate: -360, scale: [1, 1.3, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="text-center mb-12 relative z-10">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-bold text-white mb-4"
              >
                Impulsa la Eficiencia y Rentabilidad
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-purple-200 text-lg"
              >
                Ahorra hasta $15,000 MXN al mes en costos operativos
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  svg: (
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 2.05v2.02c4.39.54 7.5 4.53 6.96 8.92-.39 3.16-2.9 5.68-6.07 6.07C9.53 19.6 5.54 16.49 5 12.1c-.47-3.9 2.23-7.56 6.1-8.05V2.05c-5.78.55-10.28 5.56-9.73 11.34.47 4.9 4.48 8.91 9.38 9.38 5.78.55 10.79-3.95 11.34-9.73.55-5.78-3.95-10.79-9.73-11.34V2.05z"/>
                      <path d="M12 7l-5 5 1.4 1.4 3.6-3.6 3.6 3.6L17 12l-5-5z"/>
                    </svg>
                  ),
                  title: "Velocidad Inigualable",
                  description: "Demo inicial en solo una semana, MVP en 7 días",
                  delay: 0.1
                },
                {
                  svg: (
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ),
                  title: "Calidad & Confianza",
                  description: "Equipo joven, creativo y comprometido con tu éxito",
                  delay: 0.2
                },
                {
                  svg: (
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                    </svg>
                  ),
                  title: "Precio Competitivo",
                  description: "Aproximadamente 50% por debajo del estándar local",
                  delay: 0.3
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: benefit.delay }}
                  whileHover={{ y: -10 }}
                  className="text-center group"
                >
                  <motion.div 
                    className="w-20 h-20 bg-black/40 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-300 group-hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {benefit.svg}
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                  <p className="text-purple-200">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plan Básico */}
      <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Plan Básico: Optimización Esencial
            </h2>
            <div className="w-24 h-1 bg-white/50 mx-auto mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-white font-bold">Entrega MVP</div>
                <div className="text-blue-200">7 días</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-white font-bold">Entrega Final</div>
                <div className="text-blue-200">14 días</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-white font-bold">Soporte incluido</div>
                <div className="text-blue-200">1 mes</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                svg: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 2v2h2v2h-2v2h-2V6h-2V4h2V2h2zM1 7h6v2H1V7zm0 4h6v2H1v-2zm0 4h6v2H1v-2zM9 7h12v2H9V7zm0 4h12v2H9v-2zm0 4h12v2H9v-2z"/>
                  </svg>
                ),
                title: "App de mesero",
                features: ["Toma de pedidos con modificadores", "Envío inmediato a Pantalla de Cocina (KDS)"],
                delay: 0.1
              },
              {
                svg: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                  </svg>
                ),
                title: "KDS con timers",
                features: ["Órdenes en cola", "Cronómetros por platillo", "Alertas de demora (verde/amarillo/rojo)"],
                delay: 0.2
              },
              {
                svg: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                ),
                title: "Mapa de mesas",
                features: ["Estados: libre/ocupada/esperando", "Timer por mesa", "Visualizar tiempos de ocupación"],
                delay: 0.3
              },
              {
                svg: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                  </svg>
                ),
                title: "Reportes básicos",
                features: ["Ventas día/semana/mes", "Ticket promedio", "Top platillos", "Exportar CSV/PDF"],
                delay: 0.4
              },
              {
                svg: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                ),
                title: "Resumen diario",
                features: ["Ventas por correo", "Tickets procesados", "Top 5 platillos"],
                delay: 0.5
              },
              {
                svg: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 1z"/>
                  </svg>
                ),
                title: "Características técnicas",
                features: ["Offline-ready", "Sincronización automática", "Branding básico", "Capacitación remota"],
                delay: 0.6
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group perspective-1000"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-blue-400/50 transition-all duration-500 h-full transform-gpu hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="text-center mb-4">
                    <motion.div 
                      className="w-16 h-16 bg-black/50 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-300"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {feature.svg}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <motion.li 
                        key={idx} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: feature.delay + (idx * 0.1) }}
                        className="flex items-start text-blue-200 text-sm"
                      >
                        <div className="w-2 h-2 bg-blue-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Avanzado */}
      <section className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: '#2a2a2a' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Plan Avanzado: Gestión Completa
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Incluye todo del Plan Básico, más funciones avanzadas para restaurantes que buscan máxima eficiencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                svg: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 4V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V10h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7zM5 6v2H4V6h1zm14-2V2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2h-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V10h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1zM17 6v2h-1V6h1z"/>
                  </svg>
                ),
                title: "Inventario 1.0 por receta",
                description: "Descarga insumos por venta (receta base) y alertas de mínimos",
                features: ["Control automático de stock", "Alertas de reposición", "Gestión por recetas"],
                delay: 0.1
              },
              {
                svg: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                ),
                title: "Reservas y lista de espera",
                description: "Agenda simple y turnos; aviso cuando mesa está lista",
                features: ["Gestión de reservas", "Lista de espera", "Notificaciones automáticas"],
                delay: 0.2
              },
              {
                svg: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-3.84 3.11-4.1V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 4.15-3.12 4.16z"/>
                  </svg>
                ),
                title: "División de cuentas y propina",
                description: "Split por ítems o entre personas; propina sugerida",
                features: ["División flexible", "Cálculo de propinas", "Múltiples formas de pago"],
                delay: 0.3
              },
              {
                svg: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                ),
                title: "Panel con filtros y mini-insights",
                description: "Comparativos semana vs semana; aviso de caída de ventas",
                features: ["Analytics avanzados", "Comparativas temporales", "Alertas inteligentes"],
                delay: 0.4
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: feature.delay }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-green-500/10">
                  <div className="flex items-start space-x-6">
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-20 h-20 bg-black/50 rounded-2xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300 text-green-400">
                        {feature.svg}
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-400 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <motion.li 
                            key={idx} 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: feature.delay + (idx * 0.1) }}
                            className="flex items-center text-green-200 text-sm"
                          >
                            <motion.div 
                              className="w-2 h-2 bg-green-400 rounded-full mr-3"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                            ></motion.div>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proceso de Implementación */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-green-600/20 to-green-700/20 rounded-3xl p-8 md:p-12 border border-green-500/20 relative overflow-hidden"
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{ 
                background: [
                  "radial-gradient(circle at 20% 80%, #10b981 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 20%, #059669 0%, transparent 50%)",
                  "radial-gradient(circle at 40% 40%, #10b981 0%, transparent 50%)"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />

            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-bold text-white text-center mb-12 relative z-10"
            >
              Proceso de Implementación: Tu Éxito Paso a Paso
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {[
                {
                  step: "1",
                  title: "Anticipo y arranque",
                  description: "Recibimos el anticipo y ese mismo día nos ponemos a trabajar",
                  delay: 0.1
                },
                {
                  step: "2",
                  title: "Sesión Kick-Off",
                  description: "Sesión inicial para alinear objetivos y requisitos",
                  delay: 0.2
                },
                {
                  step: "3",
                  title: "Demo MVP",
                  description: "Demo en 7 días, segundo pago al aceptar la demo",
                  delay: 0.3
                },
                {
                  step: "4",
                  title: "Entrega final",
                  description: "Software completo en 14-21 días máximo y pago final",
                  delay: 0.4
                }
              ].map((step, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: step.delay }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="text-center group"
                >
                  <motion.div 
                    className="w-16 h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.step}
                  </motion.div>
                  
                  {/* Connection line (except for last item) */}
                  {index < 3 && (
                    <motion.div 
                      className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-green-400/30"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: step.delay + 0.2 }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                  
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-green-200 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 inline-block">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Te interesa mejorar hasta un 70% el orden interno de tu restaurante?
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Descubre cómo eliminar errores, optimizar operaciones y aumentar tu rentabilidad en solo 7 días
              </p>
              <button
                onClick={() => window.open('https://wa.me/524491893068?text=Hola,%20me%20interesa%20mejorar%20hasta%20un%2070%25%20el%20orden%20interno%20de%20mi%20restaurante%20con%20el%20software%20de%20gestión', '_blank')}
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl flex items-center mx-auto"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.306"/>
                </svg>
                Mejorar 70% Mi Orden Interno
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}