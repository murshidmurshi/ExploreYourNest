import { Dimensions as deviceDimension } from "react-native"

export type RootParamList={
    OnBoarding:undefined, 
    Login:undefined, 
    Register:undefined, 
    Parent:{role:string}, 
};

export type Dimensions={
    width:number,
    height:number,
};

export const windowDimension:Dimensions={
    width:deviceDimension.get("window").width,
    height:deviceDimension.get("window").height,
};


