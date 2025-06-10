import { Image } from "expo-image";
import { View } from "react-native";

import logo from "../../assets/images/logo.png";

import { useRouter } from "expo-router";

import { Container, Logo } from "./styles";
import { useEffect } from "react";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      return router.push("/(tabs)");
    }, 2000);
  }, [router]);

  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
}
