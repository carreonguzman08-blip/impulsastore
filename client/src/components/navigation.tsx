import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogo from "./animated-logo";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToIntro = () => {
    const introSection = document.querySelector('#introduccion');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { name: 'Sitios Web', href: '/sitios-web' },
    { name: 'Marketing', href: '/marketing' },
    { name: 'Software', href: '/software' },
    { name: 'Automatización IA', href: '/automatizacion', isNew: true },
    { name: 'Contacto', href: '/contacto' }
  ];

  const handleMenuItemClick = (href: string) => {
    setIsMenuOpen(false);
    window.location.href = href;
  };

  return (
    <nav className="flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 relative z-20 max-w-full bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-lg border-b border-white/10" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div className="max-w-[50px] sm:max-w-[60px] md:max-w-[80px] flex items-center justify-center cursor-pointer" onClick={() => window.location.href = '/'}>
        <AnimatedLogo 
          size="sm"
          className="h-8 sm:h-10 md:h-12 w-auto max-w-full"
        />
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-2 md:gap-4 lg:gap-6 list-none font-normal text-white text-xs md:text-sm">
        <li 
          className="hover:text-blue-400 cursor-pointer whitespace-nowrap transition-colors duration-300 py-2 px-2 rounded hover:bg-white/5"
          onClick={() => window.location.href = '/sitios-web'}
        >
          Sitios Web
        </li>
        <li 
          className="hover:text-blue-400 cursor-pointer whitespace-nowrap transition-colors duration-300 py-2 px-2 rounded hover:bg-white/5"
          onClick={() => window.location.href = '/marketing'}
        >
          Marketing
        </li>
        <li 
          className="hover:text-blue-400 cursor-pointer whitespace-nowrap transition-colors duration-300 py-2 px-2 rounded hover:bg-white/5"
          onClick={() => window.location.href = '/software'}
        >
          Software
        </li>
        <li 
          className="hover:text-yellow-400 cursor-pointer whitespace-nowrap relative transition-colors duration-300 py-2 px-2 rounded hover:bg-white/5"
          onClick={() => window.location.href = '/automatizacion'}
        >
          <span>Automatización IA</span>
          <span className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-1.5 py-0.5 rounded-full animate-pulse shadow-lg">NEW</span>
        </li>
      </ul>
      
      {/* Desktop Contact Button */}
      <button 
        onClick={() => window.location.href = '/contacto'}
        className="hidden sm:block px-3 md:px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold cursor-pointer hover:from-blue-700 hover:to-blue-800 transition-all text-xs md:text-sm whitespace-nowrap rounded-lg shadow-lg hover:shadow-blue-500/25"
      >
        Contacto
      </button>

      {/* Mobile Hamburger Menu */}
      <div className="sm:hidden relative">
        <motion.button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center gap-2 transition-all hover:from-blue-700 hover:to-blue-800 rounded-lg shadow-lg"
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col w-5 h-4 justify-center">
            <motion.div 
              className="h-0.5 bg-current mb-1 rounded"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 6 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="h-0.5 bg-current mb-1 rounded"
              animate={{
                opacity: isMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="h-0.5 bg-current rounded"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -6 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span className="text-xs font-bold uppercase">Menú</span>
        </motion.button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Content */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full right-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-lg rounded-lg shadow-2xl border border-white/20 overflow-hidden z-50"
              >
                <div className="py-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                      className="px-4 py-3 text-white hover:bg-white/10 cursor-pointer transition-all border-b border-white/10 last:border-b-0 relative group"
                      onClick={() => handleMenuItemClick(item.href)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium group-hover:text-white">
                          {item.name}
                        </span>
                        {item.isNew && (
                          <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
                            NEW
                          </span>
                        )}
                      </div>
                      
                      {/* Hover indicator */}
                      <motion.div
                        className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500"
                        initial={{ scaleY: 0 }}
                        whileHover={{ scaleY: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Menu Footer */}
                <div className="px-4 py-3 bg-gray-800/50 border-t border-white/10">
                  <p className="text-xs text-gray-400 text-center">
                    Impulso 360° - Soluciones Digitales
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}