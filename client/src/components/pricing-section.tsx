import { motion } from "framer-motion";
import { Check, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const packages = [
    {
      name: "Desarrollo Básico",
      price: "$5,000 MXN",
      subtitle: "Pago único",
      description: "Perfecto para iniciar tu presencia digital profesional",
      features: [
        "Diseño 100% a la medida de tu marca",
        "Catálogo interactivo de productos/servicios",
        "Sistema de reservas/pedidos online",
        "Sistema de pagos integrado",
        "Hosting en Replit incluido",
        "Soporte técnico durante 1 mes",
        "Optimización para móviles",
        "Certificado SSL de seguridad"
      ],
      popular: false,
      buttonText: "Solicitar Demo",
      color: "bg-gray-700"
    },
    {
      name: "Paquete Premium",
      price: "$7,500 MXN",
      subtitle: "Pago único",
      description: "La solución completa para negocios que buscan destacar",
      features: [
        "Todo lo incluido en el paquete básico",
        "Recordatorios automáticos por email/SMS",
        "Chat en vivo integrado",
        "Área privada para clientes",
        "Panel de administración avanzado",
        "Reportes de ventas y analíticas",
        "Integración con redes sociales",
        "Soporte prioritario 24/7"
      ],
      popular: true,
      buttonText: "¡Más Popular!",
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-500"
    }
  ];

  const handleScrollToContact = () => {
    const contactSection = document.querySelector('#contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="precios" className="py-16 md:py-24" style={{ backgroundColor: '#c6c0c0' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
            Conoce Nuestros Precios
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Planes transparentes y accesibles. Sin mensualidades ocultas, sin sorpresas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className={`${pkg.color} rounded-2xl shadow-lg p-6 md:p-8 relative hover:shadow-xl transition-shadow duration-300 border ${pkg.popular ? 'border-blue-500' : 'border-gray-200'}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
                    <Star size={14} className="mr-1" />
                    MÁS POPULAR
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pkg.name}</h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-blue-600">{pkg.price}</span>
                  <p className="text-gray-600 mt-1 text-sm">{pkg.subtitle}</p>
                </div>
                <p className="text-gray-600 text-sm">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => {
                  const message = `¡Hola! Me interesa el ${pkg.name} (${pkg.price}). ¿Podemos programar la demo gratuita?`;
                  const whatsappUrl = `https://wa.me/5244944667639?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className={`w-full py-3 rounded-lg font-semibold text-base transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300'
                }`}
              >
                {pkg.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center border border-gray-200"
        >
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="text-blue-600 mr-3" size={32} />
            <h3 className="text-2xl font-bold text-gray-900">Marketing Digital Opcional</h3>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            ¿Quieres más clientes? Agregamos campañas profesionales en redes sociales
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-700 rounded-xl p-6 shadow-sm border border-gray-600">
              <h4 className="font-bold text-white mb-2">Campañas en Redes</h4>
              <p className="text-gray-300 text-sm">Facebook, Instagram y Google Ads optimizados</p>
            </div>
            <div className="bg-gray-700 rounded-xl p-6 shadow-sm border border-gray-600">
              <h4 className="font-bold text-white mb-2">Gestión de Contenido</h4>
              <p className="text-gray-300 text-sm">Posts atractivos y estrategia de contenido</p>
            </div>
            <div className="bg-gray-700 rounded-xl p-6 shadow-sm border border-gray-600">
              <h4 className="font-bold text-white mb-2">Reportes Mensuales</h4>
              <p className="text-gray-300 text-sm">Análisis detallado de resultados y ROI</p>
            </div>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-green-600">$3,000 MXN</span>
            <p className="text-green-800 mt-2">por mes (opcional)</p>
            <Button
              onClick={() => {
                const message = `¡Hola! Me interesa el servicio de Marketing Digital ($3,000/mes). ¿Podemos programar una demo gratuita?`;
                const whatsappUrl = `https://wa.me/5244944667639?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="mt-4 bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Consultar por WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}