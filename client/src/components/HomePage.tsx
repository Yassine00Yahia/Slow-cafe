import { motion } from "framer-motion";
import Logo from "./Logo";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

interface HomePageProps {
  onLogoClick: () => void;
}

const HomePage = ({ onLogoClick }: HomePageProps) => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  
  const resetIntroAnimation = () => {
    localStorage.removeItem('slowCafeVisited');
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition-theme">
      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo onClick={onLogoClick} />
        
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 
            className={`text-4xl font-semibold uppercase mb-4 transition-theme ${
              language === 'ar' ? 'text-5xl' : ''
            }`} 
            style={{ color: 'var(--primary)' }}
          >
            {t('menu')}
          </h2>
          <div 
            className="w-40 h-16 flex items-center justify-center transition-theme" 
            style={{ backgroundColor: 'var(--primary)' }}
          >
            <div className="flex space-x-2">
              {[...Array(6)].map((_, i) => (
                <span 
                  key={i} 
                  className={`h-2 w-2 rounded-full transition-theme ${
                    i === 0 ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 opacity-50 transition-theme"
        style={{ color: 'var(--foreground)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 animate-bounce" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.div>
      
      <motion.button
        onClick={resetIntroAnimation}
        className="absolute bottom-20 text-sm rounded-md py-1 px-3 transition-theme"
        style={{
          backgroundColor: 'var(--card)',
          color: 'var(--primary)',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'var(--primary)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ 
          scale: 1.05,
          opacity: 1
        }}
      >
        {t('resetIntro')}
      </motion.button>
    </div>
  );
};

export default HomePage;
