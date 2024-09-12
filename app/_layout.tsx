import React, { useEffect } from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";
import Profile from "./Profile";
import ProfileDetail from "./ProfileDetail";

const Stack = createNativeStackNavigator();

const screenOptionStyle: NativeStackNavigationOptions = {
  headerShown: false,
};

function RootLayout() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null // Or you can render a simple loading indicator here
  } else {
    SplashScreen.hideAsync();
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
      </Stack.Navigator>
    );
  }
}

export default RootLayout;
