// import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AppNavigator from "./AppNavigator"
import { PaperProvider, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from '../redux/store/store';
import { loadTheme } from '../redux/slices/theme';
import { darkTheme, lightTheme } from '../theme/appTheme';


export default function AppWithTheme() {

  const themes=useSelector((theme:RootState)=>theme.theme);
  const dispatch = useDispatch<AppDispatch>(); // Correctly type dispatch as AppDispatch
  
  useEffect(()=>{
    dispatch(loadTheme())
  },[dispatch]);
const currentTheme =themes.theme=="dark"?darkTheme:lightTheme;
  return (
   <>
    {/* Paper Provider for REACT-NATIVE-PAPER */}
    <PaperProvider theme={currentTheme}>
            {/* Theme Provider to provide the theme  */}
            <AppNavigator />
            {/* Main App Navigator */}
            </PaperProvider>
   </>
  )
}

// const styles = StyleSheet.create({})