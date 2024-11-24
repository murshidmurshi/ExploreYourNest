import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '../../GlobalTypes';


interface AppHeaderProps {
  screenName: string;
};


export default function AppHeader({screenName}:AppHeaderProps){
    let theme=useTheme();
    let navigation=useNavigation<NativeStackNavigationProp<RootParamList>>();
    const handleBackPress=()=>{
        navigation.goBack();
    }
    return (
    <>
    <Appbar.Header style={{backgroundColor:theme.colors.background}}>
        <Appbar.BackAction  onPress={handleBackPress}/>
        <Appbar.Content title={screenName} 
        titleStyle={{
            fontSize: 18,
            fontFamily: 'Poppins-Medium',
            color: theme.colors.onBackground,
          }}/>


    </Appbar.Header>
    </>
  )
}

const styles = StyleSheet.create({})