import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { X, CheckCircle } from "lucide-react";
import astronautVideoPath from "@assets/20250717_1923_Commercial Space Exploration_simple_compose_01k0dj2rgne5yb4wdme0j992n8_1752803134433.mp4";
import logoPath from "@assets/Diseño sin título_1753986866824.png";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  phone: z.string().min(10, "El WhatsApp debe tener al menos 10 dígitos"),
  business: z.string().min(5, "Describe brevemente tu negocio (mínimo 5 caracteres)"),
  interests: z.string().min(10, "Comparte qué esperas lograr (mínimo 10 caracteres)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactFormModal() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      business: "",
      interests: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", {
        name: data.name,
        email: `${data.phone}@whatsapp.com`,
        phone: data.phone,
        message: `Demo solicitada por ${data.name} - WhatsApp: ${data.phone}\n\nNegocio: ${data.business}\n\nIntereses/Objetivos: ${data.interests}`
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "¡Solicitud enviada!",
        description: "Te contactaremos pronto por WhatsApp.",
      });
      form.reset();
      setIsSubmitting(false);
      // Cerrar ventana después de 2 segundos
      setTimeout(() => {
        window.close();
      }, 2000);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Hubo un problema. Inténtalo de nuevo.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      window.close();
    }, 300);
  };

  useEffect(() => {
    // Cerrar con tecla Escape
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="min-h-screen bg-gray-700 relative overflow-hidden">
      {/* Video de fondo de astronautas */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src={astronautVideoPath} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gray-900/50" />
      {/* Header Profesional */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-6 flex justify-between items-center shadow-lg relative z-10">
        <div className="flex items-center space-x-4">
          <img 
            src={logoPath} 
            alt="Impulso 360 Digital" 
            className="h-16 w-auto object-contain"
          />
          <div>
            <p className="text-gray-100 text-sm">Especialistas en Desarrollo Web</p>
          </div>
        </div>
        <button 
          onClick={handleClose}
          className="p-2 hover:bg-gray-200/30 rounded-full transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* Sección de Credibilidad */}
      <div className="bg-gray-700/90 py-8 relative z-10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-700 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-white mb-1">+25</div>
              <p className="text-sm text-gray-300">Sitios Web Entregados</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-400 mb-1">98%</div>
              <p className="text-sm text-gray-300">Clientes Satisfechos</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-400 mb-1">3</div>
              <p className="text-sm text-gray-300">Años de Experiencia</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
              <p className="text-sm text-gray-300">Soporte Disponible</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Solicita Tu <span className="text-gray-700">Demo Personalizada</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Te preparamos una demostración específica para tu tipo de negocio. 
            Cuéntanos más sobre ti para crear una propuesta a tu medida.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
              <CheckCircle className="text-green-600 mx-auto mb-3" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">100% Gratuita</h3>
              <p className="text-sm text-gray-700">Sin costo ni compromiso de compra</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <CheckCircle className="text-blue-600 mx-auto mb-3" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Totalmente Personalizada</h3>
              <p className="text-sm text-gray-700">Diseñada específicamente para tu negocio</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
              <CheckCircle className="text-gray-600 mx-auto mb-3" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Respuesta Inmediata</h3>
              <p className="text-sm text-gray-700">Te contactamos en menos de 2 horas</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-700/95 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 shadow-2xl"
        >
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Información de Contacto</h3>
            <p className="text-gray-300">Completa los siguientes datos para una demo personalizada</p>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  {...form.register("name")}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-800 text-white focus:bg-gray-700"
                  placeholder="Ingresa tu nombre completo"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                  Número de WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...form.register("phone")}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-800 text-white focus:bg-gray-700"
                  placeholder="+52 449 123 4567"
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="business" className="block text-sm font-semibold text-white mb-2">
                Cuéntanos sobre tu negocio *
              </label>
              <textarea
                id="business"
                {...form.register("business")}
                rows={3}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-800 text-white focus:bg-gray-700 resize-none"
                placeholder="Ej: Restaurante de comida mexicana en el centro de Aguascalientes, con 5 años de experiencia..."
              />
              {form.formState.errors.business && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.business.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="interests" className="block text-sm font-semibold text-white mb-2">
                ¿Qué esperas lograr con tu sitio web? *
              </label>
              <textarea
                id="interests"
                {...form.register("interests")}
                rows={3}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-800 text-white focus:bg-gray-700 resize-none"
                placeholder="Ej: Aumentar las reservas online, mostrar mi catálogo de productos, generar más confianza en mis clientes..."
              />
              {form.formState.errors.interests && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.interests.message}</p>
              )}
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-lg">
              <div className="flex">
                <CheckCircle className="text-gray-600 mr-3 mt-1" size={20} />
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">Garantía de Privacidad</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Tu información es completamente confidencial y solo la usaremos para preparar tu demo personalizada.
                  </p>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-6 py-4 text-lg font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 transform hover:scale-[1.02]"
            >
              {isSubmitting ? "PROCESANDO SOLICITUD..." : "SOLICITAR DEMO PERSONALIZADA"}
            </Button>
          </form>
        </motion.div>

        {/* Testimonios de Confianza */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-gray-700/90 backdrop-blur-sm rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Lo Que Dicen Nuestros Clientes</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                  alt="Carlos M."
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-white">Carlos M.</h4>
                  <p className="text-sm text-gray-300">Restaurante La Terraza</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">
                "Profesionales desde el primer contacto. El sitio aumentó nuestras reservas un 18% en 3 semanas."
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b4c0?w=50&h=50&fit=crop&crop=face"
                  alt="María G."
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-white">María G.</h4>
                  <p className="text-sm text-gray-300">Boutique Elegancia</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">
                "El equipo entendió perfectamente lo que necesitaba. Soporte excelente y resultados inmediatos."
              </p>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="text-green-600 mr-2" size={20} />
              <span className="font-semibold text-green-800">Proceso 100% Seguro</span>
            </div>
            <p className="text-green-700 text-sm">
              Al enviar este formulario, aceptas que te contactemos por WhatsApp para coordinar tu demo gratuita. 
              Tu información está protegida y nunca será compartida con terceros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}