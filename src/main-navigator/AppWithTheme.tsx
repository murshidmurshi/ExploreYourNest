// import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AppNavigator from "./AppNavigator"
import { PaperProvider, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from '../redux/store/store';
import { loadTheme, setTheme } from '../redux/slices/theme';
import { darkTheme, lightTheme } from '../theme/appTheme';
import { Appearance } from 'react-native';


export default function AppWithTheme() {

  const themes=useSelector((theme:RootState)=>theme.theme);
  const dispatch = useDispatch<AppDispatch>(); // Correctly type dispatch as AppDispatch

  useEffect(() => {
    // Load theme on app start
    dispatch(loadTheme());
    // Add system appearance listener
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      console.log(colorScheme,'colorScheme');
      
      dispatch(setTheme(colorScheme)); // Update theme in Redux store
    });

    // Cleanup listener on unmount
    return () => listener.remove();
  }, [dispatch]);
  
const currentTheme =themes.theme=="dark"?darkTheme:lightTheme;
  return (
   <>
    {/* Paper Provider for REACT-NATIVE-PAPER */}
    <PaperProvider theme={currentTheme} >
            {/* Theme Provider to provide the theme  */}
            <AppNavigator />
            {/* Main App Navigator */}
            </PaperProvider>
   </>
  )
}

// const styles = StyleSheet.create({})