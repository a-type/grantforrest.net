import { ThemeValue } from 'grommet';

const theme: ThemeValue = {
  global: {
    font: {
      family: '"Noto Serif", serif',
      size: '14px',
      height: '20px',
    },
    colors: {
      brand: '#00136c',
      'accent-1': '#f87d42',
      'accent-2': '#c3f1ff',
      'accent-3': '#db3951',
      'accent-4': '#FFCA58',
      'neutral-1': '#3e6873',
      'neutral-2': '#7f212f',
    },
  },

  button: {
    border: {
      width: '1px',
    },
  },

  heading: {
    font: {
      //family: "",
    },
    weight: 200,
  },

  paragraph: {
    medium: {
      maxWidth: '720px',
      height: '32px',
    },
  },

  anchor: {
    color: {
      dark: 'accent-1',
      light: 'neutral-1',
    },
  },
};

export default theme;
