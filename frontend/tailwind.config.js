module.exports = {
  purge: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        body: ['Open Sans', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: "#00205B",
        },
        secondary: {
          DEFAULT: "#FF4500",
        },
        // Add custom coffee brown color
        coffee: {
          DEFAULT: "#6F4E37",
        },
      },
      textDecoration: {
    
    none: 'none',
    // Add custom decoration style
    wave: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M0 0h24v24H0z\' stroke=\'none\'/%3E%3Cpath d=\'M5 12l5 5l10 -10\' /%3E%3C/svg%3E")',
},
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              backgroundImage: 'linear-gradient(90deg, #66E1FF, #66E1FF)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% .25em',
              backgroundPosition: '0 80%',
              textDecoration: 'none',
              '&:hover': {
                backgroundSize: '100% 100%',
              },
            },
          },
        },
      }),
      button: {
        base: {
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        },
        primary: {
          backgroundColor: '#00205B',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#001A4D',
          },
        },
        secondary: {
          backgroundColor: '#FF4500',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#E63900',
          },
        },
        // Add custom coffee brown button
        coffee: {
          backgroundColor: '#6F4E37',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#5A3B28',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
