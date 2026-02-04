/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'brand-yellow': '#FFD700', // Slightly more golden
        'brand-dark': '#030508', // Deeper black/blue
        'brand-dark-rich': '#0A0F1C', // Richer dark for cards
        'brand-card': '#0F1629', // Lighter card bg
        'brand-accent': '#38bdf8', // Light blue accent
        
        // VS Code Theme Colors
        'vscode-bg': '#1e1e1e',
        'vscode-sidebar': '#252526',
        'vscode-activity': '#333333',
        'vscode-status': '#007acc',
        'vscode-title': '#3c3c3c',
        'vscode-tab-active': '#1e1e1e',
        'vscode-tab-inactive': '#2d2d2d',
        'vscode-text': '#cccccc',
        'vscode-keyword': '#569cd6',
        'vscode-variable': '#9cdcfe',
        'vscode-comment': '#6a9955',
        'vscode-string': '#ce9178',
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.5)",
        glow: "0 0 20px rgba(255, 215, 0, 0.3)",
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-up': 'slide-up 1s ease-out forwards',
        'background-pan': 'background-pan 3s linear infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'background-pan': {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      },
    },
  },
  plugins: [],
}
