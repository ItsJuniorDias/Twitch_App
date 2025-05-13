import { Image } from "expo-image";
import { View } from "react-native";

import logo from "../../assets/images/logo.png";

import { Container, Logo } from "./styles";

export default function SplashScreen() {
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
}
