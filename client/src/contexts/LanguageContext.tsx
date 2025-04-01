import { createContext, useContext, useState, ReactNode } from 'react';
import { Language, translations, TranslationKeys } from '../lib/translations';

// Define the context type
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create the provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function that accepts any string but gives type checking for known keys
  const t = (key: string) => {
    // Type assertion to handle dynamic category keys properly
    return (key in translations[language]) 
      ? translations[language][key as keyof TranslationKeys] 
      : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};