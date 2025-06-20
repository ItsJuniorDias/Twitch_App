import { View } from "react-native";
import { Image } from "expo-image";

import Browse from "../(browse)/components/browse";

import { Container } from "./styles";

export default function Tab() {
  return (
    <>
      <Container>
        <Browse />
      </Container>
    </>
  );
}
