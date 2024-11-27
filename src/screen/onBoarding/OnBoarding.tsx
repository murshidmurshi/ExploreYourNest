import { StyleSheet ,TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { RootParamList, windowDimension } from '../../GlobalTypes';
import CustomText from '../../component/customeText/CustomText';
import { fonts } from '../../component/customeText/fonts';
import { useTheme } from 'react-native-paper';
import FindHouse from '../../../assets/Image/findHouse.svg'
import MapProperty from '../../../assets/Image/MapProperty.svg'
import Arrange from '../../../assets/Image/Arrange.svg'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const fisrtScreen = (theme: any) => ({
  backgroundColor: theme.colors.background,
  title: (
    <>
      <View className='flex-row gap-1 mx-6'>
        <CustomText className="text-2xl" style={{ fontFamily: fonts.Bold, }}>
          Find
        </CustomText>
        <CustomText className="text-2xl" style={{ fontFamily: fonts.Bold, color: theme.colors.secondary }}>
          Your Perfect Home
        </CustomText>
      </View>
      <CustomText className="text-2xl" style={{ fontFamily: fonts.Bold }}>
        with Us Today
      </CustomText>
    </>
  ),
  subtitle: (
    <>
      <View className='mt-5  mx-4'>
        <CustomText className="text-1xl text-center" style={{ fontFamily: fonts.Regular }}>
          Discover a wide range of homes, from cozy apartments to spacious villas, all tailored to meet your preferences.
        </CustomText>
      </View>
    </>
  ),
  image: (
    <View style={styles.imageContainer}>
      <FindHouse style={styles.image} />
    </View>
  ),
});

const secondScreen = (theme: any) => ({
  backgroundColor: theme.colors.background,
  title: (
    <>
      <View className='flex-row gap-1 mx-6'>
        <CustomText className="text-2xl" style={{ fontFamily: fonts.Bold }}>
          Discover Properties
        </CustomText>
        <CustomText className="text-2xl" style={{ fontFamily: fonts.Bold, color: theme.colors.secondary }}>

          Using
        </CustomText>
      </View>
      <CustomText className="text-2xl" style={{ fontFamily: fonts.Bold, color: theme.colors.secondary }}>
        The Map
      </CustomText>
    </>
  ),
  subtitle: (
    <>
      <View className='mt-5  mx-4'>
        <CustomText className="text-1xl text-center" style={{ fontFamily: fonts.Regular }}>
          Find properties easily using the interactive map, from homes to commercial spaces.
        </CustomText>
      </View>
    </>
  ),
  image: (
    <View style={styles.imageContainer}>
      <MapProperty style={styles.image} />
    </View>
  ),
});
const thirdScreen = (theme: any) => ({
  backgroundColor: theme.colors.background,
  title: (
    <>
      <View className='flex-row gap-1 mx-6'>
        <CustomText className="text-2xl" style={{ fontFamily: fonts.Bold, color: theme.colors.secondary }}>

          Arrange Tours
        </CustomText>
        <CustomText className="text-2xl" style={{ fontFamily: fonts.Bold }}>

          to View
        </CustomText>
      </View>
      <CustomText className="text-2xl" style={{ fontFamily: fonts.Bold, }}>
        Properties
      </CustomText>
    </>
  ),
  subtitle: (
    <>
      <View className='mt-5  mx-4'>
        <CustomText className="text-1xl text-center" style={{ fontFamily: fonts.Regular }}>
          Easily book property tours to see your next home or investment.
        </CustomText>
      </View>
    </>
  ),
  image: (
    <View style={styles.imageContainer}>
      <Arrange style={styles.image} />
    </View>
  ),
});


type CustomPaginationProps = {
  selected: boolean;
}

type NavigationProps = NativeStackNavigationProp<RootParamList, "Login">;

export default function OnBoarding() {
  let theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  let navigation = useNavigation<NavigationProps>();
  const handleNavigate = () => {
    navigation.navigate("Login")
  };

  const pageIndexCallback = (pageIndex: number) => {
    setActiveIndex(pageIndex)
  }

  const CustomPagination: React.FC<CustomPaginationProps> = ({ selected }) => {
    const backgroundColor = { backgroundColor: selected ? theme.colors.secondary : theme.colors.inversePrimary }
    return (
      <View
        style={[
          styles.dot,
          backgroundColor,// Highlight the active dot
        ]}
      />);
  };


  return (
    <>
      <Onboarding
        NextButtonComponent={() => {
          return (
            <TouchableOpacity activeOpacity={0.7} onPress={handleNavigate} className='right-5 '>
              <CustomText style={{ fontFamily: fonts.Medium, fontSize: 15, color: theme.colors.secondary }}>
                Skip
              </CustomText>
            </TouchableOpacity>
          )
        }}
        onDone={handleNavigate}
        showSkip={false}
        bottomBarHighlight={false}
        pageIndexCallback={pageIndexCallback} // Pass the callback function here
        containerStyles={{ flex: 1, justifyContent: 'flex-start' }}
        pages={[fisrtScreen(theme), secondScreen(theme), thirdScreen(theme)]}
        DotComponent={CustomPagination} // Pass the component, NOT JSX
      />
    </>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    zIndex: 1, // Ensure the image appears above the content
  },
  image: {
    width: windowDimension.width,
    height: windowDimension.width,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red'
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 50,
    marginHorizontal: 5,
    bottom: 40
  },
})