import { motion } from "framer-motion";
import { useState } from "react";
import { X, FileText, Shield } from "lucide-react";
import logoPath from "@assets/ChatGPT Image 17 jul 2025, 06_47_47 p.m._1752801497878.png";

export default function Footer() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showReturnPolicy, setShowReturnPolicy] = useState(false);


  const PolicyModal = ({ 
    isOpen, 
    onClose, 
    title, 
    content, 
    icon: Icon 
  }: { 
    isOpen: boolean; 
    onClose: () => void; 
    title: string; 
    content: string; 
    icon: React.ElementType;
  }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-gray-900 rounded-xl max-w-4xl max-h-[80vh] overflow-hidden shadow-2xl border border-gray-700"
        >
          <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-gray-700 to-gray-800 text-white border-gray-600">
            <div className="flex items-center">
              <Icon className="mr-3" size={24} />
              <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="prose prose-lg max-w-none">
              {content.split('\n').map((paragraph, index) => {
                if (paragraph.trim() === '') return null;
                
                // Handle numbered sections
                if (paragraph.match(/^\d+\./)) {
                  return (
                    <h3 key={index} className="text-xl font-bold text-white mt-6 mb-3">
                      {paragraph}
                    </h3>
                  );
                }
                
                // Handle bullet points
                if (paragraph.trim().startsWith('- ')) {
                  return (
                    <li key={index} className="text-gray-300 ml-4 mb-2">
                      {paragraph.substring(2)}
                    </li>
                  );
                }
                
                // Regular paragraphs
                return (
                  <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  const privacyPolicyContent = `Política de Privacidad

1. Identidad del responsable
Este sitio web y sus servicios son operados por Impulso360 Digital, con domicilio en Aguascalientes, México.

2. Datos que recopilamos
- Datos personales: nombre, correo electrónico, teléfono.
- Información de uso: páginas visitadas, hora de acceso, IP.
- Cookies y rastreadores: para mejorar la experiencia de usuario.

3. Finalidades del tratamiento
- Proveer y mantener el servicio.
- Enviar actualizaciones, promociones y novedades.
- Mejorar la funcionalidad y personalización del sitio.

4. Base legal
El tratamiento se basa en el consentimiento del usuario y en la ejecución de un contrato o prestación de servicio.

5. Transferencia y difusión de datos
No compartiremos sus datos con terceros, salvo por obligaciones legales o proveedores de servicio (por ejemplo, hosting o envío de correo), quienes están obligados a mantener la confidencialidad.

6. Derechos del usuario
- Derecho de acceso, rectificación, cancelación u oposición.
- Derecho a la portabilidad de los datos.
- Para ejercerlos, contacta a privacidad@impulso360.mx.

7. Conservación de los datos
Guardaremos sus datos mientras exista una relación comercial o por el tiempo legal requerido.

8. Cambios en la política
Nos reservamos el derecho de actualizar esta política. La versión vigente estará siempre en nuestro sitio.`;

  const returnPolicyContent = `Política de Devoluciones

1. Alcance
Aplica a todos los servicios y productos digitales desarrollados por Impulso360 Digital.

2. Plazo de devolución
El cliente puede solicitar devolución dentro de los primeros 7 días naturales posteriores a la entrega del producto digital o implementación del servicio, siempre que no se haya iniciado el uso o implementación en producción.

3. Condiciones
- El servicio no debe haber sido completamente entregado o utilizado.
- El cliente debe presentar la solicitud de devolución por escrito (correo electrónico).

4. Proceso de solicitud
1. Enviar correo a soporte@impulso360.mx con asunto "Solicitud de devolución".
2. Incluir nombre, proyecto contratado y motivo de la solicitud.
3. Recibirá confirmación de recepción en 2 días hábiles.

5. Reembolso
- Una vez aprobada, el reembolso se hará al mismo método de pago en un plazo de 15 días hábiles.
- La cantidad reembolsada será el monto pagado menos gastos administrativos (hasta 10% del total).

6. Excepciones
No se aceptan devoluciones de servicios ya iniciados o completados, ni de diseños personalizados una vez aprobados.

7. Modificaciones a la política
Impulso360 Digital puede ajustar esta política; la versión vigente estará disponible en nuestro sitio.`;

  return (
    <>
      <footer className="bg-gradient-to-br from-neutral-900 via-stone-800 to-neutral-900 text-white py-16 relative overflow-hidden">
        {/* Animated tech elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-8 right-8 w-8 h-8 border border-stone-400/40 rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 120, 240]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-8 left-8 w-6 h-6 bg-neutral-400/30 rounded-lg"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src={logoPath} 
                  alt="Impulso 360° Digital Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transformamos su negocio con páginas web profesionales que generan confianza, 
                aumentan ventas y posicionan su marca como líder en el mercado.
              </p>
              <div className="space-y-2 text-gray-300">
                <p>Aguascalientes, México</p>
                <p>+52 449 446 7639</p>
                <p>contacto@impulso360.mx</p>
              </div>
            </div>



            {/* Quick Actions */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contacto Rápido</h4>
              <div className="space-y-4">
                <button
                  onClick={() => {
                    const message = `¡Hola! Me interesa solicitar una demo gratuita. ¿Podemos coordinar una cita?`;
                    const whatsappUrl = `https://wa.me/5244944667639?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  WhatsApp
                </button>
                <button
                  onClick={() => {
                    window.open('/contacto', '_blank');
                  }}
                  className="w-full bg-amber-800 hover:bg-amber-900 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  Formulario
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Impulso 360° Digital. Todos los derechos reservados.
              </div>
              <div className="flex space-x-6 text-sm">
                <button
                  onClick={() => setShowPrivacyPolicy(true)}
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <Shield size={16} className="mr-1" />
                  Política de Privacidad
                </button>
                <button
                  onClick={() => setShowReturnPolicy(true)}
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <FileText size={16} className="mr-1" />
                  Política de Devoluciones
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy Modals */}
      <PolicyModal
        isOpen={showPrivacyPolicy}
        onClose={() => setShowPrivacyPolicy(false)}
        title="Política de Privacidad"
        content={privacyPolicyContent}
        icon={Shield}
      />

      <PolicyModal
        isOpen={showReturnPolicy}
        onClose={() => setShowReturnPolicy(false)}
        title="Política de Devoluciones"
        content={returnPolicyContent}
        icon={FileText}
      />
    </>
  );
}