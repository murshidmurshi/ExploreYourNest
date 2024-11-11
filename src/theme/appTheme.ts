import {
    MD3LightTheme as DefaultTheme,
    MD3DarkTheme as DarkTheme,
  } from 'react-native-paper';
  
  // Define custom light theme
  export const lightTheme = {
    ...DefaultTheme,
    custom: 'lightTheme',
    colors: {
      ...DefaultTheme.colors,
      background: '#f2f2f2',
    },
    roundness: 10,
  };
  
  // Define custom dark theme
  export const darkTheme = {
    ...DarkTheme,
    custom: 'darkTheme',
    colors: {
      ...DarkTheme.colors,
      background: '#1a1c1e',
    },
    roundness: 10,
  };
  