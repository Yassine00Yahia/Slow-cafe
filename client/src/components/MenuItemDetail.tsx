import { motion, AnimatePresence } from "framer-motion";
import { MenuItem } from "../data/menuData";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

interface MenuItemDetailProps {
  item: MenuItem;
  onClose: () => void;
}

const MenuItemDetail = ({ item, onClose }: MenuItemDetailProps) => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 px-4"
        onClick={handleOverlayClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="relative w-full max-w-4xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 30
            }
          }}
          exit={{ scale: 0.9, opacity: 0 }}
          style={{
            clipPath: "circle(150% at center)"
          }}
        >
          <div 
            className="rounded-xl shadow-2xl overflow-hidden transition-theme"
            style={{
              backgroundColor: 'var(--card)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'var(--border)'
            }}
          >
            <div className="md:flex">
              <div className="relative md:w-1/2">
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white rounded-full p-2 z-10 shadow-md transition-theme"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)'
                  }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                </button>
                <div className="h-64 md:h-full" style={{ backgroundColor: theme === 'dark' ? '#222' : '#f5f5f5' }}>
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                  {/* Mobile title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden">
                    <h2 className="text-2xl font-bold text-white drop-shadow-lg">{item.name}</h2>
                    {item.description && (
                      <p className="text-gray-200 text-sm mt-1 drop-shadow-md">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 md:w-1/2">
                <div className="hidden md:block mb-6">
                  <h2 className="text-3xl font-bold transition-theme" style={{ color: 'var(--primary)' }}>{item.name}</h2>
                  {item.description && (
                    <p className="mt-2 transition-theme" style={{ color: 'var(--foreground)', opacity: 0.7 }}>{item.description}</p>
                  )}
                </div>
                
                <div 
                  className="rounded-lg p-4 mb-6 mt-6 md:mt-0 transition-theme"
                  style={{ backgroundColor: theme === 'dark' ? '#1e1e1e' : '#f4f4f4' }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold transition-theme" style={{ color: 'var(--primary)' }}>{t('price')}</h3>
                    <span className="text-2xl font-bold transition-theme" style={{ color: 'var(--primary)' }}>
                      {item.price} {t('currency')}
                    </span>
                  </div>
                  <p className="text-sm transition-theme italic" style={{ color: 'var(--foreground)', opacity: 0.5 }}>{t('tax_included')}</p>
                </div>
                
                <div className="mb-6">
                  <h3 
                    className="font-semibold text-lg mb-3 pb-2 transition-theme" 
                    style={{ 
                      color: 'var(--foreground)',
                      borderBottomWidth: '1px',
                      borderBottomStyle: 'solid',
                      borderBottomColor: 'var(--border)'
                    }}
                  >
                    {t('description')}
                  </h3>
                  <p className="leading-relaxed transition-theme" style={{ color: 'var(--foreground)', opacity: 0.9 }}>
                    {item.longDescription || t('default_description')}
                  </p>
                </div>
                
                {/* Footer section with a close button instead of cart controls */}
                <div 
                  className="pt-6 pb-3 transition-theme"
                  style={{ 
                    borderTopWidth: '1px',
                    borderTopStyle: 'solid',
                    borderTopColor: 'var(--border)'
                  }}
                >
                  <motion.button 
                    onClick={onClose}
                    className="w-full text-white py-4 px-8 rounded-lg font-semibold hover:shadow-lg transition-all mt-4 flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(to right, ${theme === 'dark' ? '#2a5939' : '#1A4021'}, ${theme === 'dark' ? '#3a7349' : '#2E5736'})` 
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    </svg>
                    {t('close')}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuItemDetail;
