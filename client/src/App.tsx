import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import MenuItemDetail from "./components/MenuItemDetail";
import IntroAnimation from "./components/IntroAnimation";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ThemeToggle from "./components/ThemeToggle";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Toaster } from "@/components/ui/toaster";
import { MenuItem } from "./data/menuData";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showIntro, setShowIntro] = useState(true);
  
  // Use localStorage to determine if this is the first visit
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('slowCafeVisited');
    if (hasVisitedBefore) {
      setShowIntro(false);
    } else {
      // Set the visited flag for future visits
      localStorage.setItem('slowCafeVisited', 'true');
    }
  }, []);
  
  const handleIntroComplete = () => {
    setShowIntro(false);
  };
  
  const handleLogoClick = () => {
    setShowMenu(true);
  };
  
  const handleBackClick = () => {
    setShowMenu(false);
  };
  
  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
  };
  
  const handleCloseDetail = () => {
    setSelectedItem(null);
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen transition-theme">
          {/* Language and Theme Controls */}
          <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
          
          {/* Reset Intro Button - for testing */}
          <button 
            onClick={() => {
              localStorage.removeItem('slowCafeVisited');
              setShowIntro(true);
            }}
            className="fixed bottom-4 left-4 z-50 py-1 px-3 text-xs rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-md transition-theme"
          >
            Reset Intro
          </button>
          
          {/* Intro Animation */}
          {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
          
          {/* Main Content */}
          <AnimatePresence mode="wait">
            {!showMenu ? (
              <motion.div 
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="transition-theme"
              >
                <HomePage onLogoClick={handleLogoClick} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="transition-theme"
              >
                <MenuPage 
                  onBackClick={handleBackClick} 
                  onItemClick={handleItemClick}
                />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Menu Item Detail Modal */}
          <AnimatePresence>
            {selectedItem && (
              <MenuItemDetail 
                item={selectedItem} 
                onClose={handleCloseDetail}
              />
            )}
          </AnimatePresence>
          
          <Toaster />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
