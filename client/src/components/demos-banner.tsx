import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users } from "lucide-react";

export default function DemosBanner() {
  const [demosAvailable, setDemosAvailable] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasShownAfter15Seconds, setHasShownAfter15Seconds] = useState(false);

  useEffect(() => {
    const calculateDemosAvailable = () => {
      const now = new Date();
      const startOfWeek = new Date(now);
      
      // Obtener el lunes de la semana actual
      const dayOfWeek = now.getDay();
      const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
      startOfWeek.setDate(now.getDate() + daysToMonday);
      startOfWeek.setHours(0, 0, 0, 0);
      
      // Calcular días desde el lunes
      const daysSinceMonday = Math.floor((now.getTime() - startOfWeek.getTime()) / (1000 * 60 * 60 * 24));
      
      // Cronograma específico: Lunes=6, Miércoles=5, Viernes=2, Sábado=1, reinicia el lunes
      const schedule: Record<number, number> = {
        0: 6, // Lunes
        1: 4, // Martes (random entre 3-5)
        2: 5, // Miércoles
        3: 3, // Jueves (random entre 2-4)
        4: 2, // Viernes
        5: 1, // Sábado
        6: 3  // Domingo (random entre 2-4)
      };
      
      return schedule[daysSinceMonday] || 6;
    };

    setDemosAvailable(calculateDemosAvailable());
    
    // Detectar scroll para mostrar/ocultar banner SOLO cuando esté en la 3ra sección
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Mostrar banner únicamente cuando esté en la 3ra sección (aprox 2 pantallas de scroll)
      const thirdSectionPosition = viewportHeight * 2;
      setIsVisible(scrollY > thirdSectionPosition);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Actualizar cada hora para detectar cambios de día
    const interval = setInterval(() => {
      setDemosAvailable(calculateDemosAvailable());
    }, 60 * 60 * 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll al final de la página
      window.scrollTo({ 
        top: document.body.scrollHeight, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -100 
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-30 bg-purple-900 text-purple-100 shadow-lg border-b border-purple-700 ${!isVisible ? 'pointer-events-none' : ''}`}
    >
      <div className="container mx-auto px-3 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center"
            >
              <Calendar size={10} className="text-white" />
            </motion.div>
            
            <div className="flex items-center space-x-1">
              <h3 className="font-bold text-sm md:text-base text-purple-100">Demos Disponibles Esta Semana</h3>
              <div className="flex items-center space-x-2 bg-purple-600 rounded-full px-3 py-1 shadow-lg shadow-purple-500/50">
                <Users size={14} className="text-white" />
                <span className="font-bold text-sm md:text-base text-white">{demosAvailable}</span>
                <span className="text-sm text-white">restantes</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-xs text-purple-300">
              <Clock size={10} />
              <span>Reserva ahora</span>
            </div>
            
            <motion.button
              onClick={handleDemoClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-3 py-1 rounded-full font-bold text-xs hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/50 cursor-pointer"
              type="button"
            >
              Solicitar Demo
            </motion.button>
          </div>

          {/* Versión móvil */}
          <motion.button
            onClick={handleDemoClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden bg-purple-600 text-white px-2 py-1 rounded-full font-bold text-xs hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/50 cursor-pointer"
            type="button"
          >
            Demo
          </motion.button>
        </div>
      </div>

      {/* Línea de progreso animada */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"
      />
    </motion.div>
  );
}