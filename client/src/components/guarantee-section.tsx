import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <section className="py-8 md:py-16 relative overflow-hidden" style={{ backgroundColor: '#dbd7d7' }}>
      {/* Imágenes de móviles con conversaciones reales */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primera imagen - móvil con conversación gris */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -5 }}
          whileInView={{ opacity: 0.9, x: 0, rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-1/4 left-1 md:left-8 w-16 md:w-80 h-auto"
        >
          <img
            src="/phone-conversation-1.png"
            alt="Móvil con conversación de clientes satisfechos"
            className="w-full h-auto object-contain drop-shadow-2xl opacity-70 md:opacity-90"
          />
        </motion.div>
        
        {/* Segunda imagen - móvil con conversación verde */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          whileInView={{ opacity: 0.9, x: 0, rotate: 0 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-1/2 right-1 md:right-8 w-16 md:w-80 h-auto"
        >
          <img
            src="/phone-conversation-2.png"
            alt="Móvil con conversación sobre garantías"
            className="w-full h-auto object-contain drop-shadow-2xl transform scale-x-[-1] opacity-70 md:opacity-90"
          />
        </motion.div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título y texto centrado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <CheckCircle size={32} className="text-green-500 mr-2 md:mr-4" />
            <h2 className="text-xl md:text-4xl font-bold text-gray-900">
              Garantía de Éxito<br />
              <span className="text-green-600">o Devolución</span>
            </h2>
          </div>
          
          <p className="text-base md:text-xl leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto text-gray-700 px-2">
            Si su sitio web no genera resultados medibles en los primeros 60 días, 
            le devolvemos el 100% de su inversión.
          </p>


        </motion.div>

        {/* Testimonio centrado y más abajo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-gray-700 rounded-2xl p-3 md:p-8 border border-gray-600 shadow-lg max-w-sm md:max-w-2xl mx-2 md:mx-0">
            <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                alt="Carlos Mendoza"
                className="w-8 md:w-16 h-8 md:h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="text-xs md:text-lg font-bold text-white">Carlos Mendoza</h4>
                <p className="text-gray-300 text-xs md:text-sm">Propietario, Restaurante La Terraza</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-yellow-400 text-yellow-400 md:w-4 md:h-4" />
                  ))}
                </div>
              </div>
            </div>
            <blockquote className="text-gray-300 text-xs md:text-lg leading-relaxed text-center">
              "Desde que lanzamos nuestro sitio web con Impulso360, las reservas aumentaron un 
              <strong className="text-white"> 18% en solo 3 semanas</strong>. El equipo cumplió todo lo prometido."
            </blockquote>
          </div>
        </motion.div>
      </div>


    </section>
  );
}