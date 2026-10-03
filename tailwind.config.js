export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        red: '#CB0101',
        'red-dark': '#A80000',
        dark: '#262626',
        darker: '#1E1E1E',
        gray: '#F0F0F0',
        soft: '#F7F7F7',
        muted: '#7D7D7D',
        line: '#E2E2E2',
        taxi: '#FFCD1C',
        green: '#31A43B',
        rate: '#4CB963',
        star: '#FFB800',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 40px rgba(0, 0, 0, 0.08)',
        soft: '0 4px 20px rgba(0, 0, 0, 0.06)',
      },
      maxWidth: {
        site: '1440px',
      },
    },
  },
}
