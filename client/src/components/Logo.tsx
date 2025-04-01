import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

interface LogoProps {
  small?: boolean;
  onClick?: () => void;
}

const Logo = ({ small = false, onClick }: LogoProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { theme } = useTheme();
  
  const handleClick = () => {
    if (onClick) {
      setIsAnimating(true);
      
      // Delay the actual navigation to allow the animation to complete
      setTimeout(() => {
        onClick();
      }, 700); // Animation duration plus a small buffer
    }
  };
  
  return (
    <motion.div
      className={`flex flex-col items-center cursor-pointer ${small ? 'scale-[0.6]' : ''}`}
      onClick={handleClick}
      whileHover={{ scale: small ? 0.65 : 1.05 }}
      animate={isAnimating ? { y: [-20, -150], opacity: [1, 0.8, 0] } : {}}
      transition={{ 
        duration: 0.6, 
        ease: "easeInOut",
      }}
    >
      <motion.div 
        className="mb-8 w-32 h-32 relative"
        animate={isAnimating ? { rotateY: 180 } : {}}
        transition={{ duration: 0.4 }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512" 
          className="w-full h-full"
          style={{ 
            filter: `drop-shadow(0 4px 6px ${theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'})` 
          }}
        >
          {/* Hourglass shape */}
          <path 
            d="M150 100 L362 100 L256 250 L362 400 L150 400 L256 250 L150 100 Z" 
            fill="none"
            stroke="#000000" 
            strokeWidth="12"
          />
          {/* Black sand in the bottom */}
          <path 
            d="M175 360 L337 360 L256 250 L175 360 Z" 
            fill="#000000"
          />
        </svg>
      </motion.div>
      
      <motion.div 
        className="w-28 h-12 mb-2 relative drop-shadow-md"
        animate={isAnimating ? { scale: [1, 1.2, 0.8] } : {}}
        transition={{ duration: 0.5 }}
      >
        <svg viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <text 
            x="90" 
            y="30" 
            textAnchor="middle" 
            dominantBaseline="middle" 
            fontFamily="Arial, sans-serif" 
            fontWeight="bold" 
            fontSize="42"
            fill="#2E5736"
          >
            SLOW
          </text>
          <text 
            x="90" 
            y="48" 
            textAnchor="middle" 
            dominantBaseline="middle" 
            fontFamily="Arial, sans-serif" 
            fontWeight="normal" 
            fontSize="12"
            fill="#2E5736"
          >
            By MezCo
          </text>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default Logo;
