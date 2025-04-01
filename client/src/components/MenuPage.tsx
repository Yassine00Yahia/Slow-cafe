import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import MenuCategory from "./MenuCategory";
import MenuItemComponent from "./MenuItem";
import SocialLinks from "./SocialLinks";
import AIRecommendations from "./AIRecommendations";
import { MenuItem, categories, Category } from "../data/menuData";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

interface MenuPageProps {
  onBackClick: () => void;
  onItemClick: (item: MenuItem) => void;
}

const MenuPage = ({ onBackClick, onItemClick }: MenuPageProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    // Set first category as active initially
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0].id);
    }
  }, [activeCategory]);

  const handleCategoryClick = (categoryId: string) => {
    // Set active category with animation
    setActiveCategory(categoryId);
    
    // Enhanced scrolling behavior
    const element = document.getElementById(categoryId);
    if (element) {
      // Add a slight delay to allow state changes to occur first
      setTimeout(() => {
        const headerOffset = isMobile ? 150 : 20; // Different offset for mobile and desktop
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 50);
    }
  };

  // Filter function for search
  const filteredItems = useMemo(() => {
    if (!searchTerm) return [];
    return categories.flatMap(category => 
      category.items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    );
  }, [categories, searchTerm]);

  return (
    <div className="min-h-screen transition-theme">
      <div className="container mx-auto px-4 py-8">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between mb-6 bg-card shadow-md p-4 rounded-lg sticky top-0 z-20 transition-theme">
          <motion.button 
            onClick={onBackClick}
            className="p-2 rounded-full shadow-sm flex items-center transition-theme border"
            style={{ 
              color: 'var(--primary)', 
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={t('back')}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            <span className="sr-only">{t('back')}</span>
          </motion.button>
          <div className="flex items-center">
            <div className="w-8 h-12 mr-2 relative">
              <svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="topGradient-mobile" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={theme === 'dark' ? '#333333' : '#ffffff'} />
                    <stop offset="100%" stopColor={theme === 'dark' ? '#222222' : '#f0f0f0'} />
                  </linearGradient>
                  <linearGradient id="bottomGradient-mobile" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={theme === 'dark' ? '#2a5939' : '#1A4021'} />
                    <stop offset="100%" stopColor={theme === 'dark' ? '#3a7349' : '#2E5736'} />
                  </linearGradient>
                </defs>
                <path d="M0 0 L50 60 L100 0 Z" fill="url(#topGradient-mobile)" />
                <path d="M0 140 L50 80 L100 140 Z" fill="url(#bottomGradient-mobile)" />
              </svg>
            </div>
            <h1 className="font-bold text-xl transition-theme" style={{ color: 'var(--primary)' }}>SLOW</h1>
          </div>
          <div className="w-6"></div>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Desktop Sidebar */}
          <div className="hidden md:block md:w-1/4 pr-8">
            <div className="sticky top-8 flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                onClick={onBackClick}
                className="mb-8 cursor-pointer"
              >
                <Logo small />
              </motion.div>

              <div className="font-semibold w-full space-y-3 transition-theme" style={{ color: 'var(--primary)' }}>
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    className="w-full text-left px-4 py-2 rounded transition-theme relative"
                    style={{
                      backgroundColor: activeCategory === category.id ? 'var(--primary)' : 'transparent',
                      color: activeCategory === category.id ? 'var(--primary-foreground)' : 'var(--primary)'
                    }}
                    onClick={() => handleCategoryClick(category.id)}
                    whileHover={{ 
                      scale: 1.03,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      y: activeCategory === category.id ? 0 : 0,
                      scale: activeCategory === category.id ? 1.03 : 1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {t(category.id.toLowerCase())}
                    {activeCategory === category.id && (
                      <motion.div 
                        className="absolute inset-y-0 left-0 w-1 bg-white rounded-l"
                        layoutId="activeCategoryIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              <div className="mt-8">
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Menu Content */}
          <div className="md:w-3/4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 2rem)' }}>
            {/* Search Bar */}
            <div className="mb-6 rounded-lg shadow-md sticky top-24 md:top-0 z-20 transition-theme" style={{ backgroundColor: 'var(--card)' }}>
              <div className="p-3 flex items-center">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 opacity-60 transition-theme" 
                      style={{ color: 'var(--foreground)' }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder={t('search')}
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setIsSearching(e.target.value.length > 0);
                    }}
                    className="w-full pl-10 pr-10 py-2 rounded-lg transition-theme"
                    style={{
                      backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5',
                      color: 'var(--foreground)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'var(--border)'
                    }}
                  />
                  {searchTerm && (
                    <button
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => {
                        setSearchTerm('');
                        setIsSearching(false);
                      }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 opacity-60 transition-theme" 
                        style={{ color: 'var(--foreground)' }}
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
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Menu Categories - Show only when not searching */}
            {!isSearching && (
              <div className="md:hidden mb-6 rounded-lg shadow-md overflow-x-auto sticky top-40 z-10 transition-theme" style={{ backgroundColor: 'var(--card)' }}>
                <div className="flex p-3 space-x-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      className="relative whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-theme"
                      style={{
                        backgroundColor: activeCategory === category.id 
                          ? 'var(--primary)' 
                          : 'transparent',
                        color: activeCategory === category.id 
                          ? 'var(--primary-foreground)' 
                          : 'var(--primary)',
                        borderWidth: activeCategory === category.id ? '0px' : '1px',
                        borderColor: 'var(--border)',
                        boxShadow: activeCategory === category.id ? 'var(--shadow)' : 'none'
                      }}
                      onClick={() => handleCategoryClick(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        scale: activeCategory === category.id ? 1.05 : 1,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {t(category.id.toLowerCase())}
                      {activeCategory === category.id && (
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-white/30"
                          layoutId="mobileActiveCategoryIndicator"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Menu Sections - Regular view when not searching */}
            <AnimatePresence mode="wait">
              {!isSearching ? (
                <motion.div 
                  key="categories"
                  className="space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {categories.map((category) => (
                    <MenuCategory 
                      key={category.id}
                      category={category}
                      onItemClick={onItemClick}
                      isActive={activeCategory === category.id}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="search-results"
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold transition-theme" style={{ color: 'var(--primary)' }}>
                    {t('searchResults')}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {filteredItems.map((item, index) => (
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
                      >
                        <MenuItemComponent 
                          item={item}
                          onClick={() => onItemClick(item)}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* No results message */}
                  {filteredItems.length === 0 && (
                    <motion.div 
                      className="text-center py-12 transition-theme"
                      style={{ color: 'var(--foreground)' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-12 w-12 mx-auto mb-4 opacity-60" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1} 
                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                      <p className="text-lg font-medium">{t('noResults')}</p>
                      <p className="text-sm mt-2 opacity-70">{t('tryDifferentSearch')}</p>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* AI Recommendations - Only shown when not searching */}
            {!isSearching && (
              <AIRecommendations onItemClick={onItemClick} />
            )}
            
            {/* Mobile Footer */}
            <div className="md:hidden mt-8 flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
