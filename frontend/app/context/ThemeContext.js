'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('sunset');
  const [isLoaded, setIsLoaded] = useState(false);

  // Available themes
  const themes = [
    { id: 'dark', name: 'Dark', icon: '🌙', description: 'Classic dark theme' },
    {
      id: 'light',
      name: 'Light',
      icon: '☀️',
      description: 'Clean light theme',
    },
    {
      id: 'sunset',
      name: 'Sunset',
      icon: '🌅',
      description: 'Warm sunset colors',
    },
    { id: 'ocean', name: 'Ocean', icon: '🌊', description: 'Cool ocean blues' },
    {
      id: 'forest',
      name: 'Forest',
      icon: '🌲',
      description: 'Natural green tones',
    },
  ];

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    setIsLoaded(true);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (isLoaded) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, isLoaded]);

  // Toggle between themes
  const toggleTheme = () => {
    const currentIndex = themes.findIndex(t => t.id === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].id);
  };

  // Set specific theme
  const changeTheme = newTheme => {
    if (themes.find(t => t.id === newTheme)) {
      setTheme(newTheme);
    }
  };

  // Get current theme info
  const getCurrentTheme = () => {
    return themes.find(t => t.id === theme) || themes[0];
  };

  // Get next theme for cycling
  const getNextTheme = () => {
    const currentIndex = themes.findIndex(t => t.id === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    return themes[nextIndex];
  };

  const value = {
    theme,
    themes,
    isLoaded,
    toggleTheme,
    changeTheme,
    getCurrentTheme,
    getNextTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
