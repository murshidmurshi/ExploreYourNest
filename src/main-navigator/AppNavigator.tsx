import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../component/customeText/CustomText'
import { fonts } from '../component/customeText/fonts'
export default function AppNavigator() {
  return (
    <>
      <CustomText style={{ fontFamily: fonts.ThinItalic }}>
        Murshid
      </CustomText>
      <CustomText style={{ fontFamily: fonts.ExtraBold }}>
        Murshid
      </CustomText>
    </>
  )
}

const styles = StyleSheet.create({})