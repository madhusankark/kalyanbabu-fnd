/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom branding colors for Pawan Kalyan / Jana Sena theme
        pspk: {
          red: '#E21F26',    // Signature Janasena Red
          gold: '#FFD700',   // Power Star Gold
          charcoal: '#1A1A1A', // Professional dark background
        }
      },
      keyframes: {
        // The "Popping" animation for the Hero Name
        pop: {
          '0%': { 
            transform: 'scale(0.5) translateY(20px)', 
            opacity: '0',
            filter: 'blur(10px)' 
          },
          '80%': { 
            transform: 'scale(1.1)', 
            opacity: '1',
            filter: 'blur(0px)' 
          },
          '100%': { 
            transform: 'scale(1)', 
            opacity: '1' 
          },
        },
        // Smooth fade-in for biography text as you scroll
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Subtle glow effect for the FAQ questions
        glow: {
          '0%, 100%': { textShadow: '0 0 5px rgba(226, 31, 38, 0.2)' },
          '50%': { textShadow: '0 0 20px rgba(226, 31, 38, 0.6)' },
        }
      },
      animation: {
        'pop-hero': 'pop 0.8s cubic-bezier(0.26, 0.53, 0.74, 1.48) forwards',
        'fade-in': 'fade-in 1.2s ease-out forwards',
        'glow-text': 'glow 2s infinite',
      },
    },
  },
  plugins: [],
}