import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated'

export default function ScrollComponent() {
    const scrollY = useSharedValue<number>(0);
    const ScrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    })

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: 1 - scrollY.value / 200
        }
    });

    const fontSize = useSharedValue<number>(11);
    const color = useSharedValue<string>("red");
    const animatedTxt = useAnimatedStyle(() => {
        return {
            fontSize: fontSize.value,
            color: color.value,

        }
    });

    useEffect(() => {
        fontSize.value = withTiming(25, { duration: 300 });
        color.value = withTiming("green", { duration: 400 });

    }, []);

    const translateY = useSharedValue(0);


    const animatedboxStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }]
        }
    })

    useEffect(() => {
        // translateY.value = withTiming(20, { duration: 200 }, () => {
        //     translateY.value = withSpring(10);
        //   });
        translateY.value = withRepeat(withSpring(20,), -1, true)
    }, [])


    return (
        <>

            <Animated.View className="bg-red-300 h-24 w-24 m-3 rounded-[12px]" style={[animatedboxStyle]} />

            <Animated.Text style={animatedTxt}>Hello, Reanimated!</Animated.Text>

            <Animated.ScrollView onScroll={ScrollHandler} scrollEventThrottle={26}>
                <Animated.View className="bg-yellow-300 p-20" style={animatedStyle}>
                    <Animated.Text className="text-2xl text-center">
                        Scroll Me
                    </Animated.Text>
                </Animated.View>
                {[...Array(14).keys()].map((_, index) => {
                    return (
                        <Animated.View className="bg-purple-100" key={index} style={{ height: 50, }}>
                            <Animated.Text style={animatedTxt}>
                                Item {index + 1}
                            </Animated.Text>
                        </Animated.View>
                    )
                })}

            </Animated.ScrollView>

        </>
    )
}

const styles = StyleSheet.create({})