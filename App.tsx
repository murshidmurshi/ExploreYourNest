import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import RNBootSplash from 'react-native-bootsplash'; // Import the BootSplash module
import { Provider } from "react-redux"
import store, { RootState } from "./src/redux/store/store";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppWithTheme from './src/main-navigator/AppWithTheme';

// App.jsx
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { useTheme } from 'react-native-paper';
import { toastConfig } from './src/utils/Toast';



export default function App() {
  useEffect(() => {
    const init = async () => {
      // Simulate some asynchronous tasks like fetching data or initializing services
      await new Promise((resolve) => setTimeout(resolve, 100)); // Example async task
    };
    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

let theme=useTheme();


  return (
    <>
      {/* this gesture handler for bottom sheet */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* Provider for Redux Store */}
        <Provider store={store}>
          <AppWithTheme />
        </Provider>
      </GestureHandlerRootView>
      {/* For Toast Message  */}
      <Toast  config={toastConfig}/>

    </>
  )
}

const styles = StyleSheet.create({
  toastContainer: {
    height: 60,
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.834)', // Transparent white
    borderRadius: 12,
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 10, textAlign: 'center', flexDirection: 'row', justifyContent: 'center'
  },
})