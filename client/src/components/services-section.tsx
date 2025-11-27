import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      id: "branding",
      nextId: "multimedia",
      title: "BRANDING",
      items: [
        "• Desarrollo de Marca",
        "• Identidad Visual Corporativa",
        "• Arquigrafía",
        "• Packaging"
      ],
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Branding design materials",
      imageFirst: true,
      bgColor: "bg-white"
    },
    {
      id: "multimedia",
      nextId: "mkt-offline",
      title: "MULTIMEDIA",
      items: [
        "• Fotografía",
        "• Video",
        "• Animación"
      ],
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Video production equipment",
      imageFirst: false,
      bgColor: "bg-gray-50"
    },
    {
      id: "mkt-offline",
      nextId: "mkt-online",
      title: "MKT OFFLINE",
      items: [
        "• Catálogos",
        "• Stands",
        "• Espectaculares",
        "• Diseño Editorial",
        "• Material POP"
      ],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Print marketing materials",
      imageFirst: true,
      bgColor: "bg-white"
    },
    {
      id: "mkt-online",
      nextId: "consultoria",
      title: "MKT ONLINE",
      items: [
        "• WebSites",
        "• Redes Sociales",
        "• Campañas Digitales",
        "• SEO & SEM"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Digital marketing dashboard",
      imageFirst: false,
      bgColor: "bg-gray-50"
    },
    {
      id: "consultoria",
      nextId: "workshops",
      title: "CONSULTORÍA DE MARCA",
      items: [
        "• Estrategias Comerciales",
        "• Plan de Medios",
        "• Mentorías",
        "• Modelos de Negocio"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Business strategy meeting",
      imageFirst: true,
      bgColor: "bg-white"
    },
    {
      id: "workshops",
      nextId: "contacto",
      title: "WORKSHOPS & CONFERENCIAS",
      items: [],
      description: "Aprenderás la importancia de la imagen personal en el ámbito profesional. Te ayudaremos a proyectarte de la mejor manera con tus públicos objetivos. Usaremos la vestimenta y tus movimientos para que seas un excelente comunicador.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Professional presentation workshop",
      imageFirst: false,
      bgColor: "bg-gray-50",
      isLast: true
    }
  ];

  const handleNext = (nextId: string) => {
    const nextSection = document.querySelector(`#${nextId}`);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`min-h-[60vh] md:min-h-screen flex items-center justify-center py-12 md:py-20 ${service.bgColor}`}
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center max-w-6xl mx-auto">
              <div className={`${service.imageFirst ? 'order-1' : 'order-2 md:order-1'}`}>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-6xl font-bold mb-4 md:mb-8 text-brand-dark">
                    {service.title}
                  </h2>
                  {service.items.length > 0 && (
                    <div className="space-y-2 md:space-y-4 text-sm md:text-xl text-gray-700 mb-4 md:mb-8">
                      {service.items.map((item, itemIndex) => (
                        <p key={itemIndex}>{item}</p>
                      ))}
                    </div>
                  )}
                  {service.description && (
                    <div className="text-sm md:text-lg text-gray-700 mb-4 md:mb-8 leading-relaxed">
                      <p>{service.description}</p>
                    </div>
                  )}
                  <Button
                    onClick={() => handleNext(service.nextId)}
                    className={`px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium transition-colors ${
                      service.isLast 
                        ? 'bg-brand-green text-white hover:bg-green-700' 
                        : 'bg-brand-blue text-white hover:bg-blue-700'
                    }`}
                  >
                    {service.isLast ? 'CUÉNTANOS TU PROYECTO' : 'SIGUIENTE'}
                  </Button>
                </div>
              </div>
              <div className={`${service.imageFirst ? 'order-2' : 'order-1 md:order-2'}`}>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="rounded-xl shadow-lg w-full h-auto hover-scale"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
