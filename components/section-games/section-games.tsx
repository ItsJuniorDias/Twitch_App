import React from "react";
import { FlatList, View } from "react-native";

import icon_games from "../../assets/images/icon_games.png";
import icon_esports from "../../assets/images/icon_esports.png";

import { Container, Title, Image } from "./styles";

export default function SectionGames() {
  const DATA = [
    {
      id: "1",
      title: "Games",
      image: icon_games,
    },
    {
      id: "2",
      title: "Esport",
      image: icon_esports,
    },
    {
      id: "3",
      title: "Games",
      image: icon_games,
    },
  ];

  const Item = ({ title, image }) => (
    <Container activeOpacity={0.7}>
      <Title>{title}</Title>

      <Image source={image} />
    </Container>
  );

  return (
    <FlatList
      data={DATA}
      horizontal
      renderItem={({ item }) => <Item title={item.title} image={item.image} />}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
    />
  );
}
