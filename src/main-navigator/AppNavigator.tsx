import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomText from '../component/customeText/CustomText'
import { fonts } from '../component/customeText/fonts'
import Animated, { Easing, ReduceMotion, useAnimatedProps, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSpring, withTiming } from 'react-native-reanimated'
import { Button, useTheme } from 'react-native-paper'
import Svg, { Circle } from 'react-native-svg'
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

  const AnimatedCircle = Animated.createAnimatedComponent(Circle)
  const r = useSharedValue<number>(20);
  const handlePress = () => {
    r.value += 10;
  };



  const animatedProps = useAnimatedProps(() => ({
    r: withSpring(r.value),
    fill: 'orange',
    stroke: 'black',
    strokeWidth: r.value / 10,
  }))





  const linearAnim = useSharedValue<number>(160);
  const defaultAnim = useSharedValue<number>(160);

  const duration = 2000;



  const animtedLinear = useAnimatedStyle(() => ({
    transform: [{ translateX: linearAnim.value }]
  }))
  const animtedDefault = useAnimatedStyle(() => ({
    transform: [{ translateX: defaultAnim.value }]
  }))



  // // WithTiming
  // useEffect(() => {
  //   linearAnim.value = withRepeat(withTiming(-linearAnim.value,
  //     {
  //       duration,
  //       easing: Easing.linear,
  //       // reduceMotion:ReduceMotion.System
  //     }
  //   ), -1,true)
  //   defaultAnim.value = withRepeat(withTiming(-defaultAnim.value, { duration, easing: Easing.linear }), -1,true)
  // }, []);


  // WithSpring
  useEffect(() => {
    linearAnim.value = withRepeat(withSpring(-linearAnim.value, { mass: 3, damping: 10 }), -1, true);
    defaultAnim.value = withRepeat(withSpring(-defaultAnim.value, { mass: 3, damping: 30, stiffness: 69 }), -1, true);
  }, [])




  return (
    <>
      <ScrollView className='bg-red-100 flex-1'>


        <View className='bg-green-900'>
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
        {/* <Button mode="contained" onPress={handlePress}  >
          Click me
        </Button>
        <Svg className=" justify-center items-center bg-yellow-100">
          <AnimatedCircle animatedProps={animatedProps} r={r.value} cx="50%" cy={"50%"} fill={"red"} />
        </Svg>

 */}


        {/* Practise withTiming */}
        <View className='bg-black' style={styles.boxContainer}>
          <Animated.View style={[styles.box, animtedLinear]}>
            <Text style={styles.btext}>Linear</Text>
          </Animated.View>
          <Animated.View style={[styles.box, animtedDefault]}>
            <Text style={styles.btext}>Default</Text>
          </Animated.View>
        </View>

      </ScrollView>

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
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',

  }, box: {
    height: 80,
    width: 80,
    margin: 20,
    borderWidth: 1,
    borderColor: '#b58df1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btext: {
    color: '#b58df1',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
})