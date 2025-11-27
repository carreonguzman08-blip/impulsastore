import { motion } from "framer-motion";

export default function ClientsSection() {
  // Using placeholder boxes as per the design reference
  const clientLogos = Array.from({ length: 36 }, (_, i) => ({
    id: i + 1,
    name: `Logo ${i + 1}`
  }));

  return (
    <section id="clientes" className="py-20" style={{ backgroundColor: '#c6c0c0' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand-dark">
            CLIENTES
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              viewport={{ once: true }}
              className="bg-gray-100 h-20 rounded-lg flex items-center justify-center hover-scale cursor-pointer"
            >
              <span className="text-gray-400 text-sm">{logo.name}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg">
            Más de 100 empresas confían en nosotros para impulsar sus marcas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
