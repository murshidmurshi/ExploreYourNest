import { StyleProp, TextStyle} from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper';

interface CustomTextProps{
  style?:StyleProp<TextStyle>,
  children:React.ReactNode;
}

const CustomText:React.FC<CustomTextProps>=({style,children,...props})=>{
  return <Text style={[style]} {...props}>{children}</Text>
}

export default CustomText;
