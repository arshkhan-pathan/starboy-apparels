'use client';
import { useTheme } from '../context/ThemeContext';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { FiTruck } from 'react-icons/fi';

export default function ThemeDemo() {
  const { theme, themes, changeTheme } = useTheme();

  return (
    <div
      className='min-h-screen transition-all duration-500'
      style={{ background: 'var(--color-bg-primary)' }}
    >
      {/* Header */}
      <header
        className='p-6 border-b'
        style={{ borderColor: 'var(--color-border-secondary)' }}
      >
        <div className='max-w-6xl mx-auto flex items-center justify-between'>
          <ThemeSwitcher />
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-6xl mx-auto p-6'>
        {/* Current Theme Info */}
        <div
          className='mb-8 p-6 rounded-xl border'
          style={{
            background: 'var(--color-bg-card)',
            borderColor: 'var(--color-border-primary)',
          }}
        >
          <h2
            className='text-xl font-semibold mb-4'
            style={{ color: 'var(--color-text-primary)' }}
          >
            Current Theme: {themes.find(t => t.id === theme)?.name}
          </h2>
          <p className='mb-4' style={{ color: 'var(--color-text-secondary)' }}>
            {themes.find(t => t.id === theme)?.description}
          </p>
          <div className='flex items-center space-x-2'>
            <span className='text-2xl'>
              {themes.find(t => t.id === theme)?.icon}
            </span>
            <span
              className='text-sm'
              style={{ color: 'var(--color-text-muted)' }}
            >
              Theme ID: {theme}
            </span>
          </div>
        </div>

        {/* Theme Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          {themes.map(themeOption => (
            <div
              key={themeOption.id}
              className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 hover:scale-105 ${
                theme === themeOption.id ? 'ring-2 ring-offset-2' : ''
              }`}
              style={{
                background:
                  theme === themeOption.id
                    ? 'var(--color-bg-card)'
                    : 'var(--color-bg-secondary)',
                borderColor:
                  theme === themeOption.id
                    ? 'var(--color-border-accent)'
                    : 'var(--color-border-primary)',
                ringColor:
                  theme === themeOption.id
                    ? 'var(--color-primary-500)'
                    : 'transparent',
              }}
              onClick={() => changeTheme(themeOption.id)}
            >
              <div className='text-center'>
                <span className='text-4xl mb-3 block'>{themeOption.icon}</span>
                <h3
                  className='text-lg font-semibold mb-2'
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {themeOption.name}
                </h3>
                <p
                  className='text-sm'
                  style={{ color: 'var(--color-text-tertiary)' }}
                >
                  {themeOption.description}
                </p>
                {theme === themeOption.id && (
                  <div className='mt-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800'>
                    <FiTruck className='w-3 h-3 mr-1' />
                    Active
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Color Palette Demo */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Primary Colors */}
          <div
            className='p-6 rounded-xl border'
            style={{
              background: 'var(--color-bg-card)',
              borderColor: 'var(--color-border-primary)',
            }}
          >
            <h3
              className='text-lg font-semibold mb-4'
              style={{ color: 'var(--color-text-primary)' }}
            >
              Primary Colors
            </h3>
            <div className='grid grid-cols-5 gap-3'>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
                <div key={shade} className='text-center'>
                  <div
                    className='w-12 h-12 rounded-lg mb-2 mx-auto border'
                    style={{
                      background: `var(--color-primary-${shade})`,
                      borderColor: 'var(--color-border-secondary)',
                    }}
                  ></div>
                  <span
                    className='text-xs'
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {shade}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Colors */}
          <div
            className='p-6 rounded-xl border'
            style={{
              background: 'var(--color-bg-card)',
              borderColor: 'var(--color-border-primary)',
            }}
          >
            <h3
              className='text-lg font-semibold mb-4'
              style={{ color: 'var(--color-text-primary)' }}
            >
              Secondary Colors
            </h3>
            <div className='grid grid-cols-5 gap-3'>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
                <div key={shade} className='text-center'>
                  <div
                    className='w-12 h-12 rounded-lg mb-2 mx-auto border'
                    style={{
                      background: `var(--color-secondary-${shade})`,
                      borderColor: 'var(--color-border-secondary)',
                    }}
                  ></div>
                  <span
                    className='text-xs'
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {shade}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gradient Demo */}
        <div
          className='mt-8 p-6 rounded-xl border'
          style={{
            background: 'var(--color-bg-card)',
            borderColor: 'var(--color-border-primary)',
          }}
        >
          <h3
            className='text-lg font-semibold mb-4'
            style={{ color: 'var(--color-text-primary)' }}
          >
            Gradients
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div
              className='h-20 rounded-lg'
              style={{ background: 'var(--gradient-primary)' }}
            ></div>
            <div
              className='h-20 rounded-lg'
              style={{ background: 'var(--gradient-secondary)' }}
            ></div>
            <div
              className='h-20 rounded-lg'
              style={{ background: 'var(--gradient-text)' }}
            ></div>
          </div>
          <div className='mt-4 text-center'>
            <p
              className='text-sm'
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              These gradients automatically adapt to the selected theme
            </p>
          </div>
        </div>

        {/* Text Demo */}
        <div
          className='mt-8 p-6 rounded-xl border'
          style={{
            background: 'var(--color-bg-card)',
            borderColor: 'var(--color-border-primary)',
          }}
        >
          <h3
            className='text-lg font-semibold mb-4'
            style={{ color: 'var(--color-text-primary)' }}
          >
            Typography
          </h3>
          <div className='space-y-3'>
            <h1
              className='text-4xl font-bold'
              style={{ color: 'var(--color-text-primary)' }}
            >
              Heading 1 - Primary Text
            </h1>
            <h2
              className='text-2xl font-semibold'
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Heading 2 - Secondary Text
            </h2>
            <p
              className='text-lg'
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              Body text - Tertiary text color for longer content
            </p>
            <p className='text-sm' style={{ color: 'var(--color-text-muted)' }}>
              Small text - Muted text for captions and metadata
            </p>
          </div>
        </div>

        {/* Button Demo */}
        <div
          className='mt-8 p-6 rounded-xl border'
          style={{
            background: 'var(--color-bg-card)',
            borderColor: 'var(--color-border-primary)',
          }}
        >
          <h3
            className='text-lg font-semibold mb-4'
            style={{ color: 'var(--color-text-primary)' }}
          >
            Buttons
          </h3>
          <div className='flex flex-wrap gap-4'>
            <button
              className='px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105'
              style={{
                background: 'var(--gradient-button)',
                color: 'var(--color-text-primary)',
              }}
            >
              Primary Button
            </button>
            <button
              className='px-6 py-3 rounded-lg font-semibold border transition-all duration-300 hover:scale-105'
              style={{
                borderColor: 'var(--color-border-primary)',
                color: 'var(--color-text-secondary)',
                background: 'transparent',
              }}
            >
              Secondary Button
            </button>
            <button
              className='px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105'
              style={{
                background: 'var(--color-accent-green)',
                color: 'var(--color-text-primary)',
              }}
            >
              Success Button
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
