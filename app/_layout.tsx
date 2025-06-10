import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { useEffect } from "react";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
    RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
    RobotoSemiBold: require("../assets/fonts/Roboto-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />

      <Stack>
        <Stack.Screen name="(app)/index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
