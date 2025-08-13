'use client';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiChevronDown, FiCheck } from 'react-icons/fi';

export default function ThemeSwitcher() {
  const { theme, themes, changeTheme, getCurrentTheme, getNextTheme } =
    useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentTheme = getCurrentTheme();
  const nextTheme = getNextTheme();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleThemeChange = newTheme => {
    changeTheme(newTheme);
    setIsOpen(false);
  };

  const handleQuickToggle = () => {
    changeTheme(nextTheme.id);
  };

  return (
    <div className='relative' ref={dropdownRef}>
      {/* Quick Theme Toggle Button */}
      <button
        onClick={handleQuickToggle}
        className='group relative p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105'
        title={`Quick switch to ${nextTheme.name} theme`}
        aria-label={`Quick switch to ${nextTheme.name} theme`}
      >
        <div className='w-5 h-5 flex items-center justify-center'>
          <span className='text-lg group-hover:scale-110 transition-transform duration-200'>
            {nextTheme.icon}
          </span>
        </div>

        {/* Tooltip */}
        <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap'>
          Switch to {nextTheme.name}
          <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80'></div>
        </div>
      </button>

      {/* Theme Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='ml-2 p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105'
        title='Open theme selector'
        aria-label='Open theme selector'
        aria-expanded={isOpen}
      >
        <FiChevronDown className='w-5 h-5' />
      </button>

      {/* Theme Dropdown */}
      {isOpen && (
        <div className='absolute top-full right-0 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-50 overflow-hidden'>
          {/* Header */}
          <div className='px-4 py-3 border-b border-white/10 bg-gradient-to-r from-white/50 to-white/30'>
            <h3 className='text-sm font-semibold text-gray-800'>
              Choose Theme
            </h3>
            <p className='text-xs text-gray-600 mt-1'>
              Customize your experience
            </p>
          </div>

          {/* Current Theme Display */}
          <div className='px-4 py-3 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <span className='text-2xl'>{currentTheme.icon}</span>
                <div>
                  <p className='text-sm font-medium text-gray-800'>
                    {currentTheme.name}
                  </p>
                  <p className='text-xs text-gray-600'>
                    {currentTheme.description}
                  </p>
                </div>
              </div>
              <div className='w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center'>
                <FiCheck className='w-4 h-4 text-white' />
              </div>
            </div>
          </div>

          {/* Theme Options */}
          <div className='max-h-64 overflow-y-auto'>
            {themes.map(themeOption => (
              <button
                key={themeOption.id}
                onClick={() => handleThemeChange(themeOption.id)}
                className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                  theme === themeOption.id
                    ? 'bg-purple-50 border-l-4 border-purple-500'
                    : ''
                }`}
                disabled={theme === themeOption.id}
              >
                <div className='flex items-center space-x-3'>
                  <span className='text-xl'>{themeOption.icon}</span>
                  <div className='flex-1'>
                    <p
                      className={`text-sm font-medium ${
                        theme === themeOption.id
                          ? 'text-purple-800'
                          : 'text-gray-800'
                      }`}
                    >
                      {themeOption.name}
                    </p>
                    <p
                      className={`text-xs ${
                        theme === themeOption.id
                          ? 'text-purple-600'
                          : 'text-gray-600'
                      }`}
                    >
                      {themeOption.description}
                    </p>
                  </div>
                  {theme === themeOption.id && (
                    <FiCheck className='w-4 h-4 text-purple-500' />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className='px-4 py-3 bg-gray-50 border-t border-gray-100'>
            <p className='text-xs text-gray-500 text-center'>
              Theme preference saved automatically
            </p>
          </div>
        </div>
      )}

      {/* Theme Preview Indicator */}
      <div className='absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse'></div>
    </div>
  );
}
