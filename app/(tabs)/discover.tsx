import { View } from "react-native";

import Header from "../../components/header/header";

import { Container } from "./styles";

export default function Tab() {
  return (
    <>
      <Container>
        <Header title="Discover" isVisible={false} />
      </Container>
    </>
  );
}
