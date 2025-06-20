import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Image } from "expo-image";

import discover from "../../assets/images/discover.png";
import discoverActive from "../../assets/images/discover_active.png";

import icon_browse from "../../assets/images/icon_browse.png";
import icon_browse_active from "../../assets/images/icon_browse_active.png";

import { ImageCustom } from "./styles";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#9147FF" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Following",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="heart" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ImageCustom source={discoverActive} />
            ) : (
              <ImageCustom source={discover} />
            ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="browse"
        options={{
          title: "Browse",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ImageCustom source={icon_browse_active} />
            ) : (
              <ImageCustom source={icon_browse} />
            ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
