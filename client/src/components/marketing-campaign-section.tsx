import { motion } from "framer-motion";
import { TrendingUp, Target, BarChart3 } from "lucide-react";

export default function MarketingCampaignSection() {
  const marketingFeatures = [
    {
      icon: TrendingUp,
      title: "Crecimiento exponencial en redes",
      description: "Hacemos que sus redes sociales crezcan de forma constante"
    },
    {
      icon: Target,
      title: "Contenido atractivo y pautas",
      description: "Facebook, Instagram y Google Ads optimizados"
    },
    {
      icon: BarChart3,
      title: "Análisis y optimización",
      description: "Cada peso invertido mide al máximo con ajustes en tiempo real"
    }
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden" style={{ backgroundColor: '#444444' }}>
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.h2 
            className="text-xl md:text-3xl font-bold text-gray-300 mb-4 md:mb-6 leading-tight px-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Además, Nuestra <span className="text-amber-400">Campaña de Marketing Digital</span>
          </motion.h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Layout móvil: 2 arriba, 1 abajo */}
          <div className="block md:hidden px-4">
            {/* Primeros 2 elementos arriba horizontalmente */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {marketingFeatures.slice(0, 2).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + (index * 0.1),
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer w-full bg-gray-700/30 rounded-lg p-2 border border-gray-600"
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg"
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon 
                      size={20} 
                      className="text-white" 
                      strokeWidth={1.5}
                    />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xs font-bold text-gray-300 mb-1 group-hover:text-amber-300 transition-colors leading-tight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 leading-tight text-xs group-hover:text-gray-200 transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
            
            {/* Tercer elemento centrado abajo */}
            <div className="flex justify-center">
              <div className="w-40">
                {marketingFeatures.slice(2, 3).map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.2 + (2 * 0.1),
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ once: true }}
                    className="text-center group cursor-pointer w-full bg-gray-700/30 rounded-lg p-2 border border-gray-600"
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg"
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon 
                        size={20} 
                        className="text-white" 
                        strokeWidth={1.5}
                      />
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xs font-bold text-gray-300 mb-1 group-hover:text-amber-300 transition-colors leading-tight"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + (2 * 0.1) }}
                    >
                      {feature.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-300 leading-tight text-xs group-hover:text-gray-200 transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 + (2 * 0.1) }}
                    >
                      {feature.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Layout desktop: grid original de 3 columnas */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12">
            {marketingFeatures.map((feature, index) => (
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
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl"
                  whileHover={{ 
                    scale: 1.05
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon 
                    size={36} 
                    className="text-white" 
                    strokeWidth={1.5}
                  />
                </motion.div>
                
                <motion.h3 
                  className="text-lg lg:text-xl font-bold text-gray-300 mb-4 group-hover:text-amber-300 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 leading-relaxed text-base lg:text-lg group-hover:text-gray-200 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Separador decorativo */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-16 rounded-full"
        ></motion.div>
      </div>
    </section>
  );
}