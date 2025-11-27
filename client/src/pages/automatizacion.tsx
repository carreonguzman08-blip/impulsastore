import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import { Bot, MessageSquare, Calendar, Phone, Star, CheckCircle, ArrowRight, Clock, Users, TrendingUp } from "lucide-react";

export default function AutomatizacionPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen pt-20 md:pt-0 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 opacity-20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Bot className="w-16 h-16 text-blue-400" />
          </motion.div>
          
          <motion.div
            className="absolute top-40 right-20 opacity-15"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <MessageSquare className="w-20 h-20 text-purple-400" />
          </motion.div>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Tu secretaria digital <span className="text-blue-400">24/7</span>: responde, agenda y vende aunque estés ocupado
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Por una fracción de un sueldo, ahorras tiempo y además incrementas ventas con respuestas al instante en WhatsApp/IG y llamadas de voz.
            </motion.p>

            {/* Quick Benefits */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                "Respuestas automáticas 24/7 en WhatsApp e Instagram",
                "Agenda citas y confirma por voz", 
                "Seguimiento automático y recordatorios (no-shows ↓)",
                "Solicita reseñas y recupera cotizaciones 'frías'"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#demo"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center group"
              >
                Ver demo en vivo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+16187422049"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
              >
                Llamar al Bot: +1 (618) 742-2049
              </a>
            </motion.div>

            {/* Micro Guarantee */}
            <motion.div
              className="bg-green-900/30 border border-green-400/30 rounded-lg p-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-green-300 text-sm">
                <strong>Microgarantía:</strong> Si en 30 días no ves más citas o respuestas, te optimizamos gratis el siguiente mes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cost of Not Automating */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lo que hoy te cuesta <span className="text-red-500">no contestar en 5 minutos</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Clock,
                title: "Leads perdidos",
                description: "por tardar más de 15 min en responder"
              },
              {
                icon: Calendar,
                title: "Citas sin confirmar",
                description: "= huecos en tu agenda"
              },
              {
                icon: TrendingUp,
                title: "Cotizaciones sin seguimiento",
                description: "= dinero en la mesa"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <item.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-red-300 mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Salary Comparison */}
          <motion.div
            className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-400/30 rounded-xl p-8 max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Sueldo vs. Secretaria Digital</h3>
            <p className="text-lg text-gray-300 mb-6">
              Una secretaria tiempo completo = sueldo, turnos, ausencias.<br />
              <span className="text-blue-400 font-semibold">Impulso = secretaria digital 24/7 que no descansa, por una fracción del costo… y además vende por ti.</span>
            </p>
            <a
              href="https://wa.me/524491893068?text=Hola,%20quiero%20información%20sobre%20la%20secretaria%20digital%20de%20Impulso360"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center"
            >
              Quiero esa secretaria digital
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-green-900/10"></div>
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-green-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Todo el ciclo: de <span className="text-blue-400">'hola'</span> a <span className="text-green-400">'cita confirmada y reseña'</span>
          </motion.h2>

          <div className="max-w-6xl mx-auto">
            {/* Top Row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: MessageSquare,
                  title: "WhatsApp/IG DM",
                  description: "respuestas inteligentes, menú, ubicación, cotizaciones rápidas",
                  color: "blue",
                  delay: 0.1
                },
                {
                  icon: Calendar,
                  title: "Agenda & Recordatorios",
                  description: "confirma horas, envía recordatorios y reduce no-shows",
                  color: "purple",
                  delay: 0.2
                },
                {
                  icon: Phone,
                  title: "Voz que agenda",
                  description: "un agente telefónico que atiende y reserva sin humanos",
                  color: "indigo",
                  delay: 0.3
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-${item.color}-400/30 rounded-2xl p-8 hover:border-${item.color}-400/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-${item.color}-500/20`}
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: item.delay }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center mb-6 mx-auto relative z-10`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-4 text-center text-white relative z-10">{item.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed relative z-10">{item.description}</p>
                  
                  {/* Animated border */}
                  <motion.div
                    className={`absolute inset-0 border-2 border-${item.color}-400 rounded-2xl opacity-0 group-hover:opacity-100`}
                    initial={false}
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom Row - 2 cards centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: TrendingUp,
                  title: "Seguimiento",
                  description: "si no te contestan, reintenta con mensajes programados",
                  color: "orange",
                  delay: 0.4
                },
                {
                  icon: Star,
                  title: "Reseñas & Recompra",
                  description: "pide reseña y activa ofertas para que vuelvan",
                  color: "green",
                  delay: 0.5
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-${item.color}-400/30 rounded-2xl p-8 hover:border-${item.color}-400/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-${item.color}-500/20`}
                  initial={{ opacity: 0, y: 50, rotateY: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: item.delay }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center mb-6 mx-auto relative z-10`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-4 text-center text-white relative z-10">{item.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed relative z-10">{item.description}</p>
                  
                  {/* Animated border */}
                  <motion.div
                    className={`absolute inset-0 border-2 border-${item.color}-400 rounded-2xl opacity-0 group-hover:opacity-100`}
                    initial={false}
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              ))}
            </div>


          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Quieres ver cómo es nuestro <span className="text-blue-400">agente en las llamadas</span>? ¡Pruébalo tú mismo!
          </motion.h2>

          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="tel:+16187422049"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-blue-500/25"
            >
              <Phone className="mr-3 w-6 h-6" />
              Llamar al Bot: +1 (618) 742-2049
            </a>
          </motion.div>

          <motion.div
            className="bg-gray-800/50 border border-blue-400/30 rounded-xl p-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Panel Administrativo Único Para Ti</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Control Total en Tiempo Real</h4>
                    <p className="text-gray-300 text-sm">Supervisa cada conversación y toma el control cuando lo necesites. Cambia de IA a modo manual instantáneamente.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MessageSquare className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Monitoreo de Conversaciones</h4>
                    <p className="text-gray-300 text-sm">Ve en tiempo real quién escribe, qué preguntan y cómo responde tu agente IA.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Gestión de Clientes</h4>
                    <p className="text-gray-300 text-sm">Registra automáticamente a las personas que envían mensajes y llaman, convirtiéndolos en tu base de clientes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Intervención Inmediata</h4>
                    <p className="text-gray-300 text-sm">Cuando quieras escribir tú mismo, simplemente tomas el control y la IA se desactiva al instante.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-900/30 rounded-lg border border-blue-400/20">
              <p className="text-blue-100 text-center">
                <strong>💡 Control Híbrido:</strong> Lo mejor de ambos mundos - automatización inteligente con supervisión humana cuando la necesites.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lo que pasa cuando tienes <span className="text-green-400">secretaria digital 24/7</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                business: "Cafetería X",
                result: "+27% citas confirmadas",
                period: "en 30 días"
              },
              {
                business: "Clínica Y", 
                result: "-38% no-shows",
                period: "con recordatorios automáticos"
              },
              {
                business: "Restaurante Z",
                result: "4.8★ en Google",
                period: "tras pedir reseñas por WhatsApp"
              }
            ].map((case_study, index) => (
              <motion.div
                key={index}
                className="bg-green-900/20 border border-green-400/30 rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-green-300 mb-2">{case_study.business}</h3>
                <p className="text-2xl font-bold text-white mb-2">{case_study.result}</p>
                <p className="text-gray-300">{case_study.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lo tienes funcionando <span className="text-blue-400">esta semana</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Onboarding de 30 min",
                description: "(tu oferta, horarios, FAQs)"
              },
              {
                step: "2", 
                title: "Conectar canales",
                description: "(WhatsApp/IG/voz) y calendario"
              },
              {
                step: "3",
                title: "Lanzamos, medimos y optimizamos",
                description: "mensajes"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center mb-8 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Preguntas Frecuentes
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "¿Y si mi equipo no entiende la tech?",
                answer: "Entrenamiento guiado y guías en WhatsApp."
              },
              {
                question: "¿Y si no tengo CRM?",
                answer: "Te damos uno simple o conectamos Sheets."
              },
              {
                question: "¿Y si falla internet?",
                answer: "Voz/WhatsApp reintentan; nunca pierdes el lead."
              },
              {
                question: "¿Necesito textos?",
                answer: "Te entregamos prompts y mensajes aprobados para tu giro."
              },
              {
                question: "¿Me van a saturar mensajes?",
                answer: "Filtramos y priorizamos; escalado a humano cuando aplique."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-3 text-blue-400">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Listo para tu <span className="text-yellow-400">secretaria digital 24/7</span>?
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="https://wa.me/524491893068?text=Hola,%20quiero%20empezar%20con%20mi%20secretaria%20digital%20de%20Impulso360"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Empezar Ahora por WhatsApp
            </a>
            <a
              href="#demo"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
            >
              Ver Demo Nuevamente
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <span className="text-blue-400">Servicios de Automatización</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estructura de servicios paso a paso
            </p>
          </motion.div>

          {/* Flowchart Structure */}
          <div className="max-w-6xl mx-auto">
            {/* Step 1: Setup (Required) */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-400/30 rounded-2xl p-8 max-w-md mx-auto">
                <div className="text-center mb-6">
                  <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Setup (Única vez)</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-2">$2,000 MXN</div>
                  <p className="text-gray-300 text-sm">Configuración inicial obligatoria</p>
                </div>
                
                <div className="space-y-2 mb-6 text-left">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Entrenamiento del bot</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Configuración de FAQs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Integración de calendario</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Pruebas completas</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/524491893068?text=Hola,%20quiero%20información%20sobre%20la%20configuración%20inicial%20de%20la%20secretaria%20digital"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  Solicitar Setup
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center my-8">
                <div className="w-px h-12 bg-gray-600"></div>
                <div className="absolute mt-10">
                  <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-90" />
                </div>
              </div>
            </motion.div>

            {/* Step 2: Choose Plan */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center text-white mb-8">
                Elige tu <span className="text-blue-400">Plan Mensual</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Chat 1 */}
                <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-green-400/30 rounded-2xl p-6">
                  <div className="text-center mb-6">
                    <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Chat 1</h4>
                    <div className="text-2xl font-bold text-green-400 mb-1">$3,000 MXN<span className="text-sm text-gray-400">/mes</span></div>
                    <p className="text-gray-300 text-sm">WhatsApp o Instagram</p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Hasta 400 mensajes/mes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Respuestas automáticas 24/7</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Calendario integrado</span>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/524491893068?text=Hola,%20quiero%20información%20sobre%20el%20plan%20Chat%201"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-sm"
                  >
                    Elegir Chat 1
                    <ArrowRight className="ml-2 w-3 h-3" />
                  </a>
                </div>

                {/* Chat 2 */}
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-400/30 rounded-2xl p-6">
                  <div className="text-center mb-6">
                    <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Chat 2</h4>
                    <div className="text-2xl font-bold text-purple-400 mb-1">$4,500 MXN<span className="text-sm text-gray-400">/mes</span></div>
                    <p className="text-gray-300 text-sm">WhatsApp + Instagram</p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Hasta 800 mensajes/mes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">WhatsApp e Instagram DM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Reportes avanzados</span>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/524491893068?text=Hola,%20quiero%20información%20sobre%20el%20plan%20Chat%202"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-sm"
                  >
                    Elegir Chat 2
                    <ArrowRight className="ml-2 w-3 h-3" />
                  </a>
                </div>

                {/* Chat 3 / Plan Full */}
                <div className="relative bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-400/30 rounded-2xl p-6">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      RECOMENDADO
                    </div>
                  </div>
                  
                  <div className="text-center mb-6 mt-2">
                    <div className="bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <Star className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Chat 3 / Plan Full</h4>
                    <div className="text-2xl font-bold text-yellow-400 mb-1">$6,500 MXN<span className="text-sm text-gray-400">/mes</span></div>
                    <p className="text-gray-300 text-sm">Todo incluido</p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">WhatsApp + Instagram</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">200 min de voz incluidos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Reportes y mejoras</span>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/524491893068?text=Hola,%20quiero%20información%20sobre%20el%20Plan%20Full%20(Chat%203)"
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-black py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-sm"
                  >
                    Elegir Plan Full
                    <ArrowRight className="ml-2 w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Step 3: Optional Add-on */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Arrow Down */}
              <div className="flex justify-center mb-8">
                <div className="w-px h-12 bg-gray-600"></div>
                <div className="absolute mt-10">
                  <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-90" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">
                <span className="text-yellow-400">Adicional:</span> Llamadas de Voz (IA)
              </h3>
              
              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <Phone className="w-12 h-12 text-teal-500 mr-4" />
                  <div className="text-left">
                    <h4 className="text-2xl font-bold text-white">+$1,500 MXN/mes</h4>
                    <p className="text-gray-300">Solo para Chat 1 y Chat 2</p>
                    <p className="text-sm text-teal-500">(Chat 3/Plan Full ya lo incluye)</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">150 minutos incluidos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Bot agenda las citas automáticamente</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Minutos extra: $2.50/min</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Integración completa</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/524491893068?text=Hola,%20quiero%20agregar%20el%20add-on%20de%20llamadas%20de%20voz%20IA%20a%20mi%20plan"
                  className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  Agregar Llamadas de Voz
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}