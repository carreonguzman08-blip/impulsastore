import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Facebook, Instagram, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  phone: z.string().min(10, "El WhatsApp debe tener al menos 10 dígitos"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", {
        name: data.name,
        email: `${data.phone}@whatsapp.com`,
        phone: data.phone,
        message: `Demo solicitada por ${data.name} - WhatsApp: ${data.phone}`
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

  return (
    <section id="contacto" className="py-12 md:py-16 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 px-2">
            Solicita Tu <span className="text-amber-800">Demo Gratuita</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            ¿Listo para ver cómo quedaría su sitio web? Coordinemos un demo personalizado sin compromiso
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Button
              onClick={() => {
                const message = `¡Hola! Me interesa solicitar una demo gratuita para mi negocio. ¿Podemos coordinar una cita?`;
                const whatsappUrl = `https://wa.me/524494467639?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Demo Rápida por WhatsApp
            </Button>
          </motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">¿Por Qué Elegirnos?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-0.5 flex-shrink-0" size={16} />
                <div className="text-gray-300 text-sm">
                  <strong>Experiencia Comprobada:</strong> Más de 20 proyectos exitosos en Aguascalientes
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-0.5 flex-shrink-0" size={16} />
                <div className="text-gray-300 text-sm">
                  <strong>Soporte 24/7:</strong> Equipo local siempre disponible para cualquier ajuste
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-0.5 flex-shrink-0" size={16} />
                <div className="text-gray-300 text-sm">
                  <strong>ROI Garantizado:</strong> Inversión que se paga sola con el aumento en ventas
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-0.5 flex-shrink-0" size={16} />
                <div className="text-gray-300 text-sm">
                  <strong>Demo Sin Compromiso:</strong> Ve exactamente cómo quedaría antes de decidir
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-base font-semibold text-white mb-3">Síguenos</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-amber-800 rounded-lg flex items-center justify-center hover:bg-amber-900 transition-colors">
                  <Linkedin size={14} className="text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-amber-800 rounded-lg flex items-center justify-center hover:bg-amber-900 transition-colors">
                  <Facebook size={14} className="text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-amber-800 rounded-lg flex items-center justify-center hover:bg-amber-900 transition-colors">
                  <Instagram size={14} className="text-white" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...form.register("name")}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-transparent transition-colors text-gray-900 bg-white text-base"
                    placeholder="Ej: Juan Pérez"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...form.register("phone")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-transparent transition-colors text-gray-900 bg-white"
                    placeholder="Ej: +52 449 123 4567"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                {isSubmitting ? "PROCESANDO..." : "SOLICITAR DEMO GRATUITA"}
              </Button>
            </form>
          </motion.div>
        </div>
        
        {/* CTA fijo pie de página */}
        <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
          <Button
            onClick={() => {
              window.open('/contacto', '_blank');
            }}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-bold rounded-full shadow-2xl"
          >
            DEMO RÁPIDA POR WHATSAPP
          </Button>
        </div>
      </div>
    </section>
  );
}