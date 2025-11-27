import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TrendingUp, Users, Clock, Headphones } from "lucide-react";

export default function StatsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stats = [
    {
      icon: Users,
      number: "20+",
      label: "Negocios han confiado con nosotros este mes",
      color: "bg-blue-500"
    },
    {
      icon: TrendingUp,
      number: "70%",
      label: "Incrementaron sus ventas un 35%",
      color: "bg-green-500"
    },
    {
      icon: Clock,
      number: "3",
      label: "Años de experiencia en desarrollo web",
      color: "bg-purple-500"
    },
    {
      icon: Headphones,
      number: "24/7",
      label: "Soporte técnico especializado",
      color: "bg-teal-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section className="py-6 md:py-2 relative overflow-hidden" style={{ backgroundColor: '#c6c0c0' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4 md:mb-2"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-1 px-2">
            Respaldo <span className="text-amber-800">Certificado</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Nuestros resultados hablan por sí solos
          </p>
        </motion.div>

        {/* Carrusel de estadísticas con efecto circular */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-400/30 backdrop-blur-sm relative h-32 md:h-32" style={{ backgroundColor: '#c6c0c0' }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 flex items-center justify-center p-3 md:p-4 text-center"
                initial={{ 
                  opacity: 0, 
                  scale: 0.8,
                  rotateY: index * 90,
                  z: -200
                }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  scale: currentIndex === index ? 1 : 0.5,
                  rotateY: currentIndex === index ? [90, 0] : (index - currentIndex) * 90,
                  z: currentIndex === index ? 0 : -300,
                  x: currentIndex === index ? 0 : (index - currentIndex) * 100
                }}
                transition={{ 
                  duration: currentIndex === index ? 1.5 : 1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: currentIndex === index ? 0.1 : 0
                }}
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden"
                }}
              >
                <div className="flex flex-col items-center">
                  <motion.div 
                    className={`w-12 md:w-12 h-12 md:h-12 ${stat.color} rounded-full flex items-center justify-center mb-2 md:mb-2 shadow-lg`}
                    animate={{
                      scale: currentIndex === index ? [1, 1.15, 1.05, 1] : 0.8,
                      rotate: currentIndex === index ? [0, 180, 360] : 0,
                      boxShadow: currentIndex === index ? 
                        ["0 4px 6px -1px rgba(0, 0, 0, 0.1)", "0 20px 25px -5px rgba(0, 0, 0, 0.1)", "0 10px 15px -3px rgba(0, 0, 0, 0.1)"] :
                        "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{
                      duration: currentIndex === index ? 2.5 : 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: currentIndex === index ? 0.2 : 0
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: currentIndex === index ? [0, -180, -360] : 0
                      }}
                      transition={{
                        duration: currentIndex === index ? 2.5 : 0,
                        ease: "easeInOut",
                        delay: currentIndex === index ? 0.2 : 0
                      }}
                    >
                      <stat.icon size={20} className="text-white md:w-6 md:h-6" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-1"
                    animate={{
                      scale: currentIndex === index ? [0.7, 1.1, 0.95, 1] : 0.7,
                      opacity: currentIndex === index ? [0.5, 1] : 0.6,
                      y: currentIndex === index ? [20, -5, 0] : 20
                    }}
                    transition={{
                      duration: currentIndex === index ? 1.5 : 0.8,
                      ease: [0.34, 1.56, 0.64, 1],
                      delay: currentIndex === index ? 0.5 : 0
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <motion.p 
                    className="text-sm md:text-sm text-gray-600 max-w-md leading-tight"
                    animate={{
                      opacity: currentIndex === index ? [0, 0.7, 1] : 0.4,
                      y: currentIndex === index ? [30, 10, 0] : 30,
                      scale: currentIndex === index ? [0.9, 1.02, 1] : 0.9
                    }}
                    transition={{
                      duration: currentIndex === index ? 1.2 : 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: currentIndex === index ? 0.7 : 0
                    }}
                  >
                    {stat.label}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-amber-800/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>
    </section>
  );
}