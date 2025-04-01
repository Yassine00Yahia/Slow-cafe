import { motion } from "framer-motion";
import { MenuItem } from "../data/menuData";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

interface MenuItemProps {
  item: MenuItem;
  onClick: () => void;
}

const MenuItemComponent = ({ item, onClick }: MenuItemProps) => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  return (
    <motion.div 
      className="rounded-lg overflow-hidden shadow-md cursor-pointer transition-theme perspective-effect"
      style={{
        backgroundColor: 'var(--card)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'var(--border)',
        transformStyle: 'preserve-3d'
      }}
      onClick={onClick}
      whileHover={{ 
        y: -5,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
        boxShadow: theme === 'dark' 
          ? '0 15px 30px -10px rgba(0, 0, 0, 0.5)' 
          : '0 15px 30px -10px rgba(0, 0, 0, 0.2)'
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        duration: 0.3 
      }}
    >
      <div className="h-44 relative" style={{ backgroundColor: theme === 'dark' ? '#222' : '#f5f5f5' }}>
        {item.image && (
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-12">
          <h3 className="font-medium text-lg text-white drop-shadow-md">{item.name}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="font-semibold text-lg transition-theme" style={{ color: 'var(--primary)' }}>{item.name}</h3>
            {item.description && (
              <p className="text-sm mt-1 transition-theme opacity-70" style={{ color: 'var(--foreground)' }}>{item.description}</p>
            )}
          </div>
          <div className="price-tag ml-2 font-medium">
            {item.price} {t('currency')}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItemComponent;
