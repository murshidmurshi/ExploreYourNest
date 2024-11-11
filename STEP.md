Created using :
# npx @react-native-community init ExploreYourNest

Then downloaded some package for react navigation:
# npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context react-native-gesture-handler

For navigation edit MainActivity page that is :
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }

and make sure to add the following import statement at the top of this file below your package statement:
import android.os.Bundle;

# npm i react-native-vector-icons:
And below setup for Vector icon
**
Edit android/app/build.gradle (NOT android/build.gradle) and add:
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
**
Edit the android/settings.gradle file as shown below:
+ include ':react-native-vector-icons'
+ project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
**
Edit the android/app/build.gradle (located in the app folder) as shown below:
dependencies {
  implementation fileTree(dir: "libs", include: ["*.jar"])
  //noinspection GradleDynamicVersion
  implementation "com.facebook.react:react-native:+"  // From node_modules
+ implementation project(':react-native-vector-icons')
}
**


For React Native Paper 
# npm install react-native-paper
From v5 there is a need to install react-native-safe-area-context for handling safe area.
If you're on a vanilla React Native project, you also need to install and link react-native-vector-icons.
And add below inside babel.config.js file 
 env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },



For tailwind css npm install nativewind tailwindcss AND Run npx tailwindcss init to create a tailwind.config.js file
Inside that file add :

only install # npm i tailwindcss@3.3.2 and natiwind**

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      //  customeColor
      },
    },
  },
  plugins: [],
}
You also need to include the babel plugin
# plugins: ["nativewind/babel"],

And for TS :
make nativewind.d,ts inside types folder 
also inside tsconfig,json include 
  # "include": ["src","types"], // Specify folders to include, e.g., your source folder

For Splash Screen :
# npm i react-native-bootsplash
Then 
Edit your android/app/src/main/java/com/yourapp/MainActivity.{java,kt} file:

// add these required imports:
# import android.os.Bundle
# import com.zoontek.rnbootsplash.RNBootSplash
class MainActivity : ReactActivity() {

  // …

  override fun onCreate(savedInstanceState: Bundle?) {
    RNBootSplash.init(this, R.style.BootTheme) // ⬅️ initialize the splash screen
    super.onCreate(savedInstanceState) // super.onCreate(null) with react-native-screens
  }
}

And also in AndroidManifest.xml change the 
 android:theme="@style/AppTheme"
  To
 android:theme="@style/BootTheme"

 And in styles.xml Add the 
  <style name="BootTheme" parent="Theme.BootSplash">
        <item name="bootSplashBackground">#000</item>
        <item name="bootSplashLogo">@drawable/applogo</item>   ///logo 
        <item name="postBootSplashTheme">@style/AppTheme</item>
    </style>



To user react-native-reanimated :
# npm install react-native-reanimated

Add this inside babel.config.js 
  module.exports = {
    presets: [
      ... // don't add it here :
    ],
    plugins: [
      ...
      'react-native-reanimated/plugin', ///Here
    ],
  };
 Clear Metro bundler cache (recommended)
# npm start -- --reset-cache
Clean the graldew and restart the project



And import  at top of index.js file
# import 'react-native-gesture-handler';
# import 'react-native-reanimated';

To clear the cache 
# npx react-native start --reset-cache


For Redux:
# npm install @reduxjs/toolkit react-redux;
make setup 

For BlurView
# npm i @react-native-community/blur

For AsyncStorage
# npm install @react-native-async-storage/async-storage
