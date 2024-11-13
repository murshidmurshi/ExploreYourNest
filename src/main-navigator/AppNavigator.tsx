import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../component/customeText/CustomText'
import { fonts } from '../component/customeText/fonts'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated'
import { Button, useTheme } from 'react-native-paper'
export default function AppNavigator() {
  let theme = useTheme()
  const width = useSharedValue<number>(100);
  const translateX = useSharedValue<number>(0);
  const initialWidth = Dimensions.get("screen").width * 0.9;
  const btnwidth = useSharedValue<number>(initialWidth);
  const btnopaticy = useSharedValue<number>(1);

  const handleTransform = () => {
    translateX.value = withSpring(translateX.value + 20);
    width.value = withSpring(width.value + 20);
  }

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      width: btnwidth.value,
      opacity: btnopaticy.value,
    };
  });


  const handleSubmit = () => {
    btnwidth.value = withSpring(0); // Animate width to 0 on press
    btnopaticy.value = withSpring(0); // Animate width to 0 on press
  };
  const animatedStyle = useAnimatedStyle(() => ({
    width: withSpring(width.value + 50),
    transform: [{ translateX: withSpring(translateX.value * 2) }],
  }
  ))

  const handleShow = () => {
    btnwidth.value = withTiming(initialWidth); // Animate width back to initial width
    btnopaticy.value = withTiming(1); // Animate opacity back to 1
  }

  return (
    <>
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>

        <CustomText style={{ fontFamily: fonts.ThinItalic }}>
          Murshid
        </CustomText>
        <CustomText style={{ fontFamily: fonts.ExtraBold }}>
          Murshid
        </CustomText>


        <Animated.View style={[{
          height: 100,
          backgroundColor: 'violet',
          alignSelf: "center",
        }, animatedStyle]}>
          <CustomText style={{
            fontFamily: fonts.Bold,
          }}>
            Murshid
          </CustomText>
        </Animated.View>
        <Button onPress={handleTransform}>
          Transform
        </Button>

        <Animated.View style={styles.container}>
          <Animated.View style={[styles.buttonContainer, animatedStyle2]}>

            <Button
              style={[styles.button, { backgroundColor: theme.colors.onBackground }]}
              onPress={handleSubmit}
            >
              Submit
            </Button>

          </Animated.View>
          <Button
            style={[styles.button,]}
            onPress={handleShow}
          >
            Show Btn
          </Button>

        </Animated.View>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    overflow: 'hidden', // To avoid any text or shadow overflow
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
})