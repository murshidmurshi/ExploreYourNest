import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withDecay, withSpring, withTiming } from 'react-native-reanimated';

import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'

export default function GestureComponent() {
  
  const pressed = useSharedValue<boolean>(false);
  const offset = useSharedValue<number>(0);
  const offsetY = useSharedValue<number>(0);
  const animatedStyles6 = useAnimatedStyle(() => {
    return {
      transform: [{ scale: pressed.value ? withTiming(1.3, { duration: 100 }) : 1 }, { translateX: offset.value, }, { translateY: offsetY.value, }],
      backgroundColor: 'red',
    }
  })

  const tap = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      offset.value = withSpring(event.translationX);
      offsetY.value = withSpring(event.translationY);
    })
    .onFinalize((event) => {
      offset.value = withDecay({
        velocity: event.translationX, // Use `translationY` for vertical movement
        deceleration: 0.928, // Optional: customize deceleration for a smoother effect
        clamp: [-300, 100], // Limit vertical movement between -300 and 300
        rubberBandEffect: true,
        rubberBandFactor: 0.6,
      });
      pressed.value = false;

    });
    


  return (
 <>
 
 
 <GestureHandlerRootView className='flex-1 justify-center items-center'>

<GestureDetector gesture={tap}>
  <Animated.View style={[styles.circle, animatedStyles6]} />

</GestureDetector>
</GestureHandlerRootView>
</>
  )
}

const styles = StyleSheet.create({
  circle: {
    height: 120,
    width: 120,
    borderRadius: 500,
  }
})