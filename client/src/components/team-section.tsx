import { motion } from "framer-motion";

export default function TeamSection() {
  const teamMembers = [
    {
      initial: "A",
      name: "Ana Rodríguez",
      role: "La directora de marketing digital. Ama las estrategias digitales, las tendencias y algo de analítica.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      initial: "H",
      name: "Hugo Martínez",
      role: "El estratega y planificador. Protocolario. Las relaciones públicas son lo suyo.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      initial: "P",
      name: "Patricia López",
      role: "La diseñadora senior, especialista en darle brillo al packaging de las empresas.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      initial: "M",
      name: "María González",
      role: "La motion designer. Apasionada por la ilustración y darle vida a los diseños. Brandea todo a su paso.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      initial: "M",
      name: "Manuel Durón",
      role: "El multimedia designer, atrás del lente captura las mejores fotos y videos. Además diseña logos súper chidos.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      initial: "B",
      name: "Bernardo Rojas",
      role: "Web designer / front end. La creatividad detrás del UX. Le da vida y diseño a las páginas web.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    }
  ];

  return (
    <section id="equipo" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand-dark">
            Nuestro Equipo
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {member.initial}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
