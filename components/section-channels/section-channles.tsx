import React from "react";
import { FlatList, View } from "react-native";

import {
  Container,
  Title,
  Image,
  Avatar,
  Description,
  Row,
  TitleAvatar,
} from "./styles";

export default function SectionChannels({ data }) {
  const Item = ({ image, avatar, description }) => (
    <>
      <Container activeOpacity={0.7}>
        <Image source={image} />

        <Row>
          <Avatar source={avatar} />

          <View>
            <TitleAvatar>Geek_69</TitleAvatar>
            <Description>{description}</Description>
          </View>
        </Row>
      </Container>
    </>
  );

  return (
    <>
      <Title>Channels Recommended for You</Title>

      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => (
          <Item
            title={item.title}
            description={item.description}
            image={item.image}
            avatar={item.avatar}
          />
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}
