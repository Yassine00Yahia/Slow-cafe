import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../data/menuData";
import { useLanguage } from "../contexts/LanguageContext";

interface AIRecommendationsProps {
  onItemClick: (item: MenuItem) => void;
}

const AIRecommendations = ({ onItemClick }: AIRecommendationsProps) => {
  const { t } = useLanguage();
  const [recommendations, setRecommendations] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Simulate AI-powered recommendations based on browsing history and popular items
  useEffect(() => {
    // In a real implementation, this would be a call to a recommendation API
    // For now, we'll simulate AI recommendations with setTimeout
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      // Import all menu items dynamically
      import("../data/menuData").then(({ categories }) => {
        // Flatten all menu items into a single array
        const allItems = categories.flatMap(category => category.items);
                
        // Simulate personalized logic - in a real app, this would be based on 
        // user preferences or machine learning models
        
        // Randomly select 3 items to recommend
        const personalizedItems = allItems
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        
        setRecommendations(personalizedItems);
        setIsLoading(false);
      });
    }, 1200); // Simulate loading time
    
    return () => clearTimeout(timer);
  }, []);

  if (recommendations.length === 0 && !isLoading) {
    return null;
  }

  return (
    <motion.div
      className="bg-card rounded-lg shadow-md overflow-hidden transition-theme mb-8"
      style={{ backgroundColor: 'var(--card)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4 pb-2" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{t('recommendations')}</h3>
          
          <motion.div 
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v6"></path>
              <circle cx="12" cy="14" r="6"></circle>
              <path d="M12 18v4"></path>
              <path d="M8 14l8 0"></path>
            </svg>
          </motion.div>
        </div>
      </div>
      
      <div className="p-4">
        {isLoading ? (
          <div className="flex flex-col space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-md w-16 h-16 transition-theme animate-pulse"></div>
                <div className="flex-1 space-y-2">
                  <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded transition-theme animate-pulse"></div>
                  <div className="bg-gray-200 dark:bg-gray-700 h-4 w-3/4 rounded transition-theme animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {recommendations.map((item, index) => (
              <motion.div 
                key={item.id}
                className="flex items-center p-2 rounded-lg hover:bg-card-hover cursor-pointer transition-theme"
                style={{ backgroundColor: 'var(--card)' }}
                onClick={() => onItemClick(item)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden mr-3 rounded-md w-16 h-16 bg-gray-100 dark:bg-gray-800 transition-theme flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                  {index === 0 && (
                    <div 
                      className="absolute top-0 right-0 bg-amber-500 text-white text-xs px-1 py-0.5 rounded-bl-md font-medium"
                    >
                      {t('staffPick')}
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium text-sm item-name">{item.name}</h4>
                  <p className="text-xs opacity-70 item-description line-clamp-1">
                    {item.description || t('default_description')}
                  </p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs price-tag">
                      {item.price} {t('currency')}
                    </span>
                    <button 
                      className="ml-2 text-xs font-medium text-primary hover:text-primary/80"
                      onClick={(e) => {
                        e.stopPropagation();
                        onItemClick(item);
                      }}
                    >
                      {t('tryIt')}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AIRecommendations;