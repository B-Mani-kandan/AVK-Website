module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleUpFade: { // add this
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
         dropShadow: {
        'custom-xl': '0 10px 15px rgba(0,0,0,0.8)',
        'custom-2xl': '0 20px 25px rgba(0, 0, 0, 0.9)',
      }
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        scaleUpFade: 'scaleUpFade 1s ease-out forwards', // add this
      },
    },
  },
  plugins: [],
}
