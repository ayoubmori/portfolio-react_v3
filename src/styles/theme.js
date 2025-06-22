export const theme = {
  colors: {
    primary: '#4338CA',
    primaryDark: '#3730A3',
    secondary: '#E0E7FF',
    text: {
      primary: '#FFFFFF',
      secondary: '#4A5568',
      dark: '#333333',
    },
    background: {
      dark: '#000000',
      light: '#F8F9FA',
      white: '#FFFFFF',
    },
    success: { light: '#C6F6D5', dark: '#2F855A' },
    error: { light: '#FED7D7', dark: '#C53030' },
  },
  shadows: {
    sm: '0 2px 4px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 4px 20px rgba(0,0,0,0.1)',
  },
  spacing: {
    0: '0', 1: '0.25rem', 2: '0.5rem', 3: '0.75rem',
    4: '1rem', 6: '1.5rem', 8: '2rem', 12: '3rem',
    16: '4rem', 24: '6rem',
  },
  typography: {
    fontSize: {
      sm: '0.875rem', base: '1rem', lg: '1.125rem',
      xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontFamily: {
      sans: "'Poppins', sans-serif",
      heading: "'Montserrat', sans-serif",
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  borderRadius: {
    none: '0', sm: '0.125rem', md: '0.375rem',
    lg: '0.5rem', xl: '0.75rem', full: '9999px',
  },
  transitions: {
    default: 'all 0.3s ease-in-out',
  },
  breakpoints: {
    sm: '640px', md: '768px', lg: '1024px', xl: '1280px',
  },
};