import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuItem, categories } from "../data/menuData";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

interface RecommendationsProps {
  onItemClick: (item: MenuItem) => void;
}

const Recommendations = ({ onItemClick }: RecommendationsProps) => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [recommendations, setRecommendations] = useState<MenuItem[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Generate random recommendations
  useEffect(() => {
    // Flatten all items from all categories
    const allItems = categories.flatMap(category => category.items);
    
    // Shuffle and select 3 random items
    const shuffled = [...allItems].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    
    setRecommendations(selected);
    
    // Show recommendations after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="my-8 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl md:text-2xl font-bold mb-4 transition-theme text-center" style={{ color: 'var(--primary)' }}>
        {t('recommendations')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AnimatePresence>
          {recommendations.map((item, index) => (
            <motion.div
              key={item.id}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-theme"
              style={{ 
                backgroundColor: 'var(--card)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'var(--border)'
              }}
              onClick={() => onItemClick(item)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <motion.div 
                    className="bg-yellow-400 text-gray-900 rounded-full px-2 py-1 text-xs font-bold shadow-lg"
                    initial={{ rotate: -5 }}
                    animate={{ rotate: 5 }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: "reverse", 
                      duration: 0.5 
                    }}
                  >
                    {t('staffPick')}
                  </motion.div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold transition-theme" style={{ color: 'var(--foreground)' }}>
                  {item.name}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-medium transition-theme" style={{ color: 'var(--primary)' }}>
                    {item.price} {t('currency')}
                  </span>
                  <motion.div 
                    className="text-sm flex items-center font-medium transition-theme"
                    style={{ color: 'var(--foreground)' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 mr-1 transition-theme" 
                      style={{ color: 'var(--primary)' }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 10V3L4 14h7v7l9-11h-7z" 
                      />
                    </svg>
                    {t('tryIt')}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Recommendations;