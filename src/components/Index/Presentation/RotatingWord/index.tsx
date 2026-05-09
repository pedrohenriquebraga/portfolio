import React, { useState, useEffect } from "react";
import { RotatingWordContainer } from "./styles";

interface RotatingWordProps {
  words: string[];
  interval?: number;
}

const RotatingWord: React.FC<RotatingWordProps> = ({ 
  words, 
  interval = 3000 
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <RotatingWordContainer isVisible={isVisible}>
      {words[currentWordIndex]}
    </RotatingWordContainer>
  );
};

export default RotatingWord;
