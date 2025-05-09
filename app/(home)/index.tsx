import { Image } from "expo-image";
import { View, Text, Dimensions, FlatList } from "react-native";

// import Carousel from "react-native-reanimated-carousel";

import Card from "./components/card/card";

import user_logo from "../../assets/images/user.png";
import stream from "../../assets/images/stream.png";
import comments from "../../assets/images/comments.png";
import share from "../../assets/images/share.png";
import create from "../../assets/images/create.png";

import carousel_1 from "../../assets/images/card_carousel_1.png";
import carousel_2 from "../../assets/images/card_carousel_2.png";
import carousel_3 from "../../assets/images/card_carousel_3.png";

import {
  Container,
  ImageCustom,
  Content,
  ContentRight,
  ButtonCreate,
  TextCreate,
  TitleHeader,
  Header,
  Description,
} from "./styles";

const windowWidth = Dimensions.get("window").width;
const VISIBLE_ITEMS = 3;
const ITEM_SPACING = 10;
const ITEM_WIDTH =
  (windowWidth - ITEM_SPACING * (VISIBLE_ITEMS - 1)) / VISIBLE_ITEMS;

export default function HomeScreen() {
  const data = [
    {
      title: "World of Warcraft",
      description: "30,3k",
      image: carousel_1,
    },
    {
      title: "Baldurs Gate 3",
      description: "100,8k",
      image: carousel_2,
    },
    {
      title: "Age of Empire",
      description: "90,2k",
      image: carousel_3,
    },
  ];

  return (
    <>
      <Container>
        <Header>
          <Content>
            <ImageCustom source={user_logo} />

            <ContentRight>
              <ImageCustom source={stream} />

              <ImageCustom source={comments} />

              <ImageCustom source={share} />

              <ButtonCreate>
                <ImageCustom source={create} />

                <TextCreate>Create</TextCreate>
              </ButtonCreate>
            </ContentRight>
          </Content>

          <TitleHeader>Following</TitleHeader>

          <Description>Followed Categories</Description>
        </Header>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Card
                description={item.description}
                title={item.title}
                image={item.image}
              />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Container>
    </>
  );
}
