import { StyleProp, TextStyle} from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper';

interface CustomTextProps{
  style?:StyleProp<TextStyle>,
  children:React.ReactNode;
  className?:string;
}

const CustomText:React.FC<CustomTextProps>=({style,className,children,...props})=>{
  return <Text style={[style]} {...props}>{children}</Text>
}

export default CustomText;
