import { View } from "react-native";

import Header from "../../components/header/header";
import DiscoverSection from "../../components/card-discover/card-discover";
import SectionGames from "../../components/section-games/section-games";

import { Container } from "./styles";

export default function Tab() {
  return (
    <>
      <Container>
        <Header title="Discover" isVisible={false} />

        <DiscoverSection />

        <SectionGames />
      </Container>
    </>
  );
}
