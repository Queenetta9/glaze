"use client"

import { useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs'

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode');
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {isDarkMode ? (
        <BsSun />
      ) : (
        <BsMoon />
      )}
    </button>
  );
}

export default ThemeToggle;
