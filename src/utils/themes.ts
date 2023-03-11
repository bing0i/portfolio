interface Theme {
  colors: {
    text: string;
    contrastText: string;
    background: string;
    secondaryBackground: string;
    contrastBackground: string;
    contrastSecondaryBackground: string;
  };
}

const defaultTheme: Theme = {
  colors: {
    text: '#0F1020',
    contrastText: '#FFFFFF',
    background: '#2F195F',
    secondaryBackground: '#7353BA',
    contrastBackground: '#FAA6FF',
    contrastSecondaryBackground: '#EFC3F5',
  },
};

export { defaultTheme };
