import { Image } from "expo-image";
import { View, Text, Dimensions, FlatList } from "react-native";

import Card from "./components/card/card";
import CardRecommend from "./components/card-recommend/card-recommend";

import user_logo from "../../assets/images/user.png";
import stream from "../../assets/images/stream.png";
import comments from "../../assets/images/comments.png";
import share from "../../assets/images/share.png";
import create from "../../assets/images/create.png";

import carousel_1 from "../../assets/images/card_carousel_1.png";
import carousel_2 from "../../assets/images/card_carousel_2.png";
import carousel_3 from "../../assets/images/card_carousel_3.png";

import recommend_1 from "../../assets/images/recommend_1.png";
import avatar_1 from "../../assets/images/avatar_1.png";
import recommend_2 from "../../assets/images/recommend_2.png";
import avatar_2 from "../../assets/images/avatar_2.png";

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
  Body,
  ContentFlatList,
  CardBody,
  ImageRecommend,
  Avatar,
  ContentAvatar,
  RowAvatar,
  TitleAvatar,
  TitleAvatarDescription,
  TagAvatar,
  TextAvatarTag,
  Dots,
  ContentDots,
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

        <ContentFlatList>
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
        </ContentFlatList>

        <Body>
          <Description>Channels Recommend for You</Description>

          <CardRecommend
            img_recommend={recommend_1}
            img_avatar={avatar_1}
            title={`Square Head`}
            description={`Whoop Whoop Space\nSpace Jam`}
            tag_1={`Space`}
            tag_2={`Jammin'`}
            tag_3={`Music`}
          />

          <CardRecommend
            img_recommend={recommend_2}
            img_avatar={avatar_2}
            title={`Yummy Burgers`}
            description={`I'm on a boat!\nBoat simulator`}
            tag_1={`Boat`}
            tag_2={`Water`}
            tag_3={`Fish`}
          />
        </Body>
      </Container>
    </>
  );
}
