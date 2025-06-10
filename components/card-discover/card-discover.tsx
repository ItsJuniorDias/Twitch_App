import React from "react";
import { FlatList, View } from "react-native";

import cardDiscover_1 from "../../assets/images/card_discover.png";

import { Container, ImageDiscover, Title, Row, Description } from "./styles";
import Tag from "../Tag/tag";

interface CardProps {}

export default function CardDiscover({}: CardProps) {
  const DATA = [
    {
      id: "",
      image: cardDiscover_1,
    },
    {
      id: "",
      image: cardDiscover_1,
    },
  ];

  const Item = ({ image }) => (
    <Container activeOpacity={0.7}>
      <ImageDiscover source={image} />

      <Row>
        <Title>Mario_Challenges</Title>
        <Description>Mario on the moon</Description>
      </Row>

      <Row>
        <Tag title="Mario" />
        <Tag title="Cart" />
        <Tag title="Banana" />
        <Tag title="Race" />
      </Row>
    </Container>
  );

  return (
    <FlatList
      data={DATA}
      horizontal
      renderItem={({ item }) => <Item image={item.image} />}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
    />
  );
}
