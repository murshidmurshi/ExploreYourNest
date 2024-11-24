import { Dimensions, StyleSheet, View } from "react-native";
import Toast, { ToastConfig } from "react-native-toast-message";
import CustomText from "../component/customeText/CustomText";
import { fonts } from "../component/customeText/fonts";
import LinearGradient from "react-native-linear-gradient";

type ToastType = "success" | "error" | "warning";
const showToast = (message: string, type: ToastType = "success") => {
  const toastParams = {
    type,
    text1: message,
    visibilityTime: 2000,
    autoHide: true,
    topOffset: 20,
    bottomOffset: 20,
  }
  Toast.show(toastParams)
}

const toastConfig: ToastConfig = {
  success: ({ text1 }) => (
    <LinearGradient
      colors={["#8eb2e2", "#ddd"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.toastContainer]}
    >
      <View  >
        <CustomText style={{ fontFamily: fonts.Medium, fontSize: 16 }}>{text1}</CustomText>
      </View>
    </LinearGradient>
  ),
  error: ({ text1 }) => (
    <LinearGradient
      colors={["#e5a2a2", "#ddd"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.toastContainer]}
    >
      <View  >
        <CustomText style={{ fontFamily: fonts.Medium, fontSize: 16 }}>{text1}</CustomText>
      </View>
    </LinearGradient>
  )

}
export { showToast, toastConfig }



// Styles for the toast
const styles = StyleSheet.create({
  toastContainer: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: Dimensions.get("window").width - 35,
    backgroundColor: '#fff'
  },
  toastText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
