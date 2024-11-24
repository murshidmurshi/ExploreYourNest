
import 'react-native-paper';

// Extend the theme's colors interface to include custom properties
declare module 'react-native-paper' {
  export interface MD3Colors {
    transparentGrey: string; // Add the `transparent` property
  }
}

