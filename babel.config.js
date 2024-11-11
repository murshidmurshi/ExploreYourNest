module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    'nativewind/babel', //for nativewind
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};