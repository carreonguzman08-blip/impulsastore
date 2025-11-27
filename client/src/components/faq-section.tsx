import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar mi sitio web?",
      answer: "El desarrollo completo toma entre 7-14 días hábiles, dependiendo de la complejidad. Incluye diseño, desarrollo, pruebas y capacitación. Durante este tiempo, mantenemos comunicación constante para ajustes."
    },
    {
      question: "¿Qué incluye exactamente el precio del sitio web?",
      answer: "Incluye diseño personalizado, desarrollo responsive, sistema de pagos, formularios de contacto, optimización SEO básica, capacitación, hosting por 1 año y soporte técnico por 3 meses."
    },
    {
      question: "¿Necesito conocimientos técnicos para manejar mi sitio?",
      answer: "No. Diseñamos todo para que sea fácil de usar. Te damos capacitación personalizada de 1 hora y acceso a tutoriales en video. Además, nuestro soporte está disponible para cualquier duda."
    },
    {
      question: "¿Qué pasa si no estoy satisfecho con el resultado?",
      answer: "Ofrecemos revisiones ilimitadas durante el desarrollo y garantía de satisfacción. Si después de entregado no cumple tus expectativas, trabajamos hasta lograr el resultado deseado o devolvemos tu inversión."
    },
    {
      question: "¿El sitio web funcionará en celulares y tablets?",
      answer: "Sí, todos nuestros sitios son 100% responsive. Se adaptan perfectamente a cualquier dispositivo: celulares, tablets, laptops y pantallas grandes. Probamos en diferentes dispositivos antes de entregar."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 bg-gray-800 relative overflow-hidden">
      {/* Animated tech elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-16 w-6 h-6 bg-rose-400/30 rounded-full"
          animate={{ 
            scale: [1, 1.6, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 left-10 w-4 h-4 border border-pink-400/50 rounded-lg"
          animate={{ 
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 px-2">
            Preguntas <span className="text-rose-400">Frecuentes</span>
          </h2>
          <p className="text-base md:text-xl text-rose-100 max-w-3xl mx-auto px-2">
            Resolvemos las dudas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-gray-700 rounded-2xl shadow-lg border border-gray-600 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 md:px-6 py-5 md:py-6 text-left flex items-center justify-between hover:bg-gray-600 transition-colors duration-200"
                >
                  <h3 className="text-sm md:text-lg font-semibold text-white pr-2 md:pr-4 leading-tight">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp size={24} className="text-amber-800" />
                    ) : (
                      <ChevronDown size={24} className="text-gray-400" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA después del FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gray-700 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-gray-300 mb-6">
              Estamos aquí para resolver todas tus dudas de forma personalizada
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent("¡Hola! Tengo algunas preguntas sobre sus servicios de desarrollo web. ¿Podrían ayudarme?");
                const whatsappUrl = `https://wa.me/524494467639?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Preguntar por WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}