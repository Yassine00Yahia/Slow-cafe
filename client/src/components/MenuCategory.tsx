import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { Category, MenuItem as MenuItemType } from "../data/menuData";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

interface MenuCategoryProps {
  category: Category;
  onItemClick: (item: MenuItemType) => void;
  isActive?: boolean;
}

const MenuCategory = ({ category, onItemClick, isActive = false }: MenuCategoryProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  // Apply highlight effect when this category becomes active
  useEffect(() => {
    // We don't need to scroll here as it's handled in the MenuPage component
  }, [isActive]);
  
  return (
    <motion.div 
      id={category.id} 
      ref={ref}
      className="menu-section mb-8 scroll-mt-24 md:scroll-mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: isActive ? 1.01 : 1,
        transition: {
          duration: 0.5,
          scale: {
            duration: 0.3,
            ease: "easeOut"
          }
        }
      }}
    >
      <motion.div 
        className="text-white px-6 py-5 rounded-t-lg shadow-md flex items-center transition-theme"
        style={{ 
          background: `linear-gradient(to right, ${theme === 'dark' ? '#2a5939' : '#1A4021'}, ${theme === 'dark' ? '#3a7349' : '#2E5736'})` 
        }}
        animate={{
          filter: isActive ? "brightness(110%)" : "brightness(100%)",
          transition: { duration: 0.3 }
        }}
      >
        <div className="w-1 h-8 bg-white mr-4 rounded"></div>
        <h2 className="text-2xl font-semibold tracking-wide">{t(category.id.toLowerCase())}</h2>
      </motion.div>
      <div 
        className="rounded-b-lg shadow-lg p-6 transition-theme" 
        style={{ 
          backgroundColor: 'var(--card)',
          borderWidth: '0 1px 1px 1px',
          borderStyle: 'solid',
          borderColor: 'var(--border)'
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {category.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: index * 0.05,
                  duration: 0.4
                }
              }}
              className="transition-theme"
            >
              <MenuItem 
                item={item}
                onClick={() => onItemClick(item)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCategory;
