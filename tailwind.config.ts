import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        muted: '#1f293780',
        accent: '#1f2937',
        soft: '#f8fafc'
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 40px -24px rgba(15, 23, 42, 0.4)'
      }
    }
  },
  plugins: []
};

export default config;
