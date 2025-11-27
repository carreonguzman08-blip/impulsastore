import { motion } from "framer-motion";
import { Award, CheckCircle, Star, TrendingUp, Users, Shield } from "lucide-react";
import videoPath from "@assets/20250717_1912_Futuristic Business Logo_simple_compose_01k0dhdffsfn4afpxvrcvj17yq_1752802188976.mp4";
import logoPath from "@assets/ChatGPT Image 17 jul 2025, 06_47_47 p.m._1752801497878.png";

export default function CredentialsSection() {
  const credentials = [
    {
      icon: Award,
      title: "Google Ads Certified",
      description: "Certificación oficial en Google Ads y Analytics",
      badge: "Google Partners",
      color: "bg-blue-500",
      iconColor: "text-blue-600"
    },
    {
      icon: Star,
      title: "Meta Business Certified", 
      description: "Especialista certificado en Facebook e Instagram Ads",
      badge: "Meta Blueprint",
      color: "bg-blue-600",
      iconColor: "text-blue-700"
    },
    {
      icon: TrendingUp,
      title: "HubSpot Marketing",
      description: "Certificación en Marketing Digital y CRM", 
      badge: "HubSpot Academy",
      color: "bg-teal-600",
      iconColor: "text-teal-700"
    },
    {
      icon: Users,
      title: "Shopify Partner",
      description: "Partner oficial para desarrollo de e-commerce",
      badge: "Shopify Plus", 
      color: "bg-green-600",
      iconColor: "text-green-700"
    }
  ];

  const achievements = [
    {
      number: "20+",
      label: "Negocios han confiado con nosotros este mes",
      icon: CheckCircle
    },
    {
      number: "70%",
      label: "Incrementaron sus ventas un 35%",
      icon: TrendingUp
    },
    {
      number: "3 años",
      label: "Experiencia en Digital",
      icon: Award
    },
    {
      number: "24/7",
      label: "Soporte Técnico",
      icon: Shield
    }
  ];

  return (
    <section id="certificados" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-xl md:text-5xl font-bold text-white mb-3 md:mb-8 px-2 leading-tight">
            Respaldo <span className="text-amber-800">Profesional</span> Certificado
          </h2>
          <p className="text-sm md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto px-2">
            Nuestro equipo cuenta con certificaciones oficiales de las principales plataformas digitales
          </p>
        </motion.div>



        {/* Achievements Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 border border-gray-400/50"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-300 px-4 leading-tight">
            Resultados que <span className="text-amber-300">Hablan por Sí Solos</span>
          </h3>
          <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <achievement.icon className="text-amber-300 group-hover:scale-110 transition-transform duration-300" size={32} />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-300 mb-2 group-hover:scale-105 transition-transform duration-300">
                  {achievement.number}
                </div>
                <div className="text-gray-300 font-medium text-sm sm:text-base px-2 leading-tight">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}