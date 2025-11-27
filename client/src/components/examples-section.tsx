import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { useState } from "react";

export default function ExamplesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const examples = [
    {
      title: "Restaurante La Terraza",
      category: "Restaurante",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      description: "Sistema de reservas + menú digital",
      results: "+25% en reservas online"
    },
    {
      title: "Boutique Elegance",
      category: "Tienda de Ropa",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      description: "Catálogo + pagos online",
      results: "+40% en ventas digitales"
    },
    {
      title: "Dr. Martínez Dental",
      category: "Clínica Dental",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      description: "Citas online + información médica",
      results: "+60% en citas programadas"
    }
  ];

  const moreExamples = [
    {
      title: "Café Central",
      category: "Cafetería",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop"
    },
    {
      title: "Spa Relajación",
      category: "Spa & Wellness",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop"
    },
    {
      title: "Gym Fitness Pro",
      category: "Gimnasio",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      title: "Inmobiliaria Torres",
      category: "Bienes Raíces",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
    },
    {
      title: "Academia de Idiomas",
      category: "Educación",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop"
    },
    {
      title: "Taller Mecánico Express",
      category: "Automotriz",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#c6c0c0' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-gray-700">Ejemplos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Casos reales de negocios que han transformado sus ventas con nuestros sitios web
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {examples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-600"
            >
              {/* Imagen con hover effect */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={example.image}
                  alt={example.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay que aparece en hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    onClick={() => setIsModalOpen(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg"
                  >
                    <Eye size={20} />
                    Ver ejemplo →
                  </motion.button>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-700 font-medium bg-gray-100 px-3 py-1 rounded-full">
                    {example.category}
                  </span>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-gray-700 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{example.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{example.description}</p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 text-sm font-medium">
                    📈 Resultado: {example.results}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA para ver más ejemplos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-600 transition-colors duration-300 shadow-lg"
          >
            Ver más ejemplos reales
          </motion.button>
        </motion.div>

        {/* Modal con más ejemplos */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Más Ejemplos de Nuestro Trabajo</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {moreExamples.map((example, index) => (
                  <motion.div
                    key={example.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={example.image}
                      alt={example.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full mb-2">
                        {example.category}
                      </span>
                      <h4 className="font-semibold text-gray-900">{example.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center mt-6">
                <p className="text-gray-600 mb-4">¿Te interesa ver alguno de estos proyectos en detalle?</p>
                <button
                  onClick={() => {
                    const message = encodeURIComponent("¡Hola! Vi los ejemplos en su sitio web y me interesa conocer más detalles de sus proyectos. ¿Podrían mostrarme casos específicos?");
                    const whatsappUrl = `https://wa.me/524494467639?text=${message}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Contactar por WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}