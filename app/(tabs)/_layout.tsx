import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Image } from "expo-image";

import discover from "../../assets/images/discover.png";

import { DiscoverImage } from "./styles";

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
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <DiscoverImage source={discover} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
