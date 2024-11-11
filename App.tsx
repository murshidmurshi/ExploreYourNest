import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import RNBootSplash from 'react-native-bootsplash'; // Import the BootSplash module
import { Provider } from "react-redux"
import store, { RootState } from "./src/redux/store/store";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppWithTheme from './src/main-navigator/AppWithTheme';

export default function App() {
  useEffect(() => {
    const init = async () => {
      // Simulate some asynchronous tasks like fetching data or initializing services
      await new Promise((resolve) => setTimeout(resolve, 100)); // Example async task
    };
    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);

  return (
    <>
     {/* this gesture handler for bottom sheet */}
      <GestureHandlerRootView style={{ flex: 1 }}> 
        {/* Provider for Redux Store */}
        <Provider store={store}>
         <AppWithTheme />
        </Provider>
      </GestureHandlerRootView>
    </>
  )
}

const styles = StyleSheet.create({})