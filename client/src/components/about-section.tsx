import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-12 md:py-24 bg-gray-900 relative overflow-hidden">
      {/* Animated tech elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-16 left-16 w-12 h-12 border border-emerald-400/40 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 w-8 h-8 bg-teal-400/30 rounded-lg"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-8">Sobre Nosotros</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-6 md:mb-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-emerald-100 leading-relaxed mb-8">
              En <span className="font-bold text-teal-400">Impulso 360°</span> nos especializamos en transformar ideas en presencia digital exitosa. 
              Creamos sitios web profesionales, estrategias de marketing efectivas y software personalizado que impulsa el crecimiento de tu negocio.
            </p>
            <p className="text-base md:text-lg text-emerald-200 leading-relaxed">
              Nuestro compromiso es ayudarte a aumentar tus ventas hasta un 15% en 30 días, 
              brindando soluciones completas que conectan con tus clientes y fortalecen tu marca en el mercado digital.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}