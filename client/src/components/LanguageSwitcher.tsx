import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../lib/translations';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇹🇳' }
  ];

  // Initialize from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('slowCafeLanguage') as Language | null;
    if (savedLanguage && ['en', 'fr', 'ar'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
      
      // Set direction
      if (savedLanguage === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.classList.add('rtl');
      }
    }
  }, [setLanguage]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
    
    // Save to localStorage for persistence
    localStorage.setItem('slowCafeLanguage', lang);
    
    // If language is Arabic, add RTL class to body, otherwise remove it
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.body.classList.add('rtl');
    } else {
      document.documentElement.dir = 'ltr';
      document.body.classList.remove('rtl');
    }
  };

  const currentLanguage = languages.find(l => l.code === language);

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white bg-opacity-90 rounded-full px-3 py-1.5 shadow-md hover:shadow-lg transition-all"
      >
        <span className="text-xl">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-12 right-0 bg-white rounded-lg shadow-lg overflow-hidden min-w-[140px]"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 ${
                    language === lang.code ? 'bg-gray-50 text-[#2E5736] font-medium' : ''
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;