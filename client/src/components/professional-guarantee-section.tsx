import { motion } from "framer-motion";
import { CheckCircle, Shield, Users, Clock } from "lucide-react";

export default function ProfessionalGuaranteeSection() {
  const guaranteeFeatures = [
    {
      icon: Shield,
      title: "Inversión Protegida",
      description: "Su inversión está protegida con resultados medibles"
    },
    {
      icon: Users,
      title: "Equipo Local",
      description: "Soporte de un equipo local siempre disponible"
    },
    {
      icon: Clock,
      title: "Soporte Continuo",
      description: "Ajustes y soporte técnico 24/7"
    }
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden" style={{ backgroundColor: '#444444' }}>
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <motion.div 
            className="flex items-center justify-center mb-4 md:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ 
                rotate: [0, 10, -10, 0],
                scale: 1.1
              }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle size={32} className="text-green-400 mr-2 md:mr-4" />
            </motion.div>
            <motion.h2 
              className="text-2xl md:text-4xl font-bold text-gray-300 leading-tight px-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Respaldo <span className="text-green-400">Profesional</span> Garantizado
            </motion.h2>
          </motion.div>

          <motion.p 
            className="text-base md:text-xl leading-relaxed mb-8 md:mb-12 max-w-4xl mx-auto text-gray-300 px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Todo esto, con el respaldo de un <span className="text-gray-300 font-bold">equipo local</span> que estará siempre disponible 
            para ajustes y soporte. Su inversión está protegida con resultados medibles y soporte continuo.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="mb-16">
          {/* Layout móvil: 2 arriba, 1 abajo */}
          <div className="block md:hidden px-4">
            {/* Primeros 2 elementos arriba horizontalmente */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {guaranteeFeatures.slice(0, 2).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.1 + (index * 0.05),
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all w-full"
                >
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg"
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon 
                      size={16} 
                      className="text-white" 
                      strokeWidth={1.5}
                    />
                  </motion.div>
                  
                  <h3 className="text-xs font-bold text-gray-300 group-hover:text-green-300 transition-colors leading-tight">
                    {feature.title}
                  </h3>
                </motion.div>
              ))}
            </div>
            
            {/* Tercer elemento centrado abajo */}
            <div className="flex justify-center">
              <div className="w-32">
                {guaranteeFeatures.slice(2, 3).map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.1 + (2 * 0.05),
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    className="text-center group cursor-pointer p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all w-full"
                  >
                    <motion.div 
                      className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg"
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon 
                        size={16} 
                        className="text-white" 
                        strokeWidth={1.5}
                      />
                    </motion.div>
                    
                    <h3 className="text-xs font-bold text-gray-300 group-hover:text-green-300 transition-colors leading-tight">
                      {feature.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Layout desktop: grid original de 3 columnas */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {guaranteeFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.1 + (index * 0.05),
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="text-center group cursor-pointer p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg"
                  whileHover={{ 
                    scale: 1.05
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon 
                    size={20} 
                    className="text-white" 
                    strokeWidth={1.5}
                  />
                </motion.div>
                
                <h3 className="text-base font-bold text-gray-300 group-hover:text-green-300 transition-colors">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto text-center border border-white/20 shadow-2xl"
        >
          <motion.h3 
            className="text-2xl lg:text-3xl font-bold mb-6 text-gray-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            ¿Listos para Ver Su Sitio en <span className="text-amber-400">Acción</span>?
          </motion.h3>
          
          <motion.p 
            className="text-lg mb-8 text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            Les preparamos una <span className="text-gray-300 font-bold">demo gratuita</span> de cómo quedaría su sitio y hablamos de inversión.
          </motion.p>
          
          <motion.button
            onClick={() => {
              window.open('/contacto', '_blank');
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-xl cursor-pointer border-none"
          >
            ¡Solicitar Demo Gratuita Ahora!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}