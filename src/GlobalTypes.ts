import { Dimensions as deviceDimension } from "react-native"

export type RootParamList={
    OnBoarding:undefined, 
    Login:undefined, 
    Register:undefined, 
    BottomTab:{role:string},
    Home:undefined,  // Add Home screen as per your requirement
    Explore:undefined,  // Add Home screen as per your requirement
    BookMark:undefined,  // Add Home screen as per your requirement
    Profile:undefined,  // Add Home screen as per your requirement
};
export type Dimensions={
    width:number,
    height:number,
};

export const windowDimension:Dimensions={
    width:deviceDimension.get("window").width,
    height:deviceDimension.get("window").height,
};


