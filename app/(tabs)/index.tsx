import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import { Image } from "expo-image";

import Card from "../(home)/components/card/card";
import CardRecommend from "../(home)/components/card-recommend/card-recommend";
import Header from "../../components/header/header";
import CardStreams from "../(home)/components/card-streams/card-streams";

import carousel_1 from "../../assets/images/card_carousel_1.png";
import carousel_2 from "../../assets/images/card_carousel_2.png";
import carousel_3 from "../../assets/images/card_carousel_3.png";

import recommend_1 from "../../assets/images/recommend_1.png";
import avatar_1 from "../../assets/images/avatar_1.png";
import recommend_2 from "../../assets/images/recommend_2.png";
import avatar_2 from "../../assets/images/avatar_2.png";
import recommend_3 from "../../assets/images/recommend_3.png";
import avatar_3 from "../../assets/images/avatar_3.png";
import recommend_4 from "../../assets/images/recommend_4.png";
import avatar_4 from "../../assets/images/avatar_4.png";
import recommend_5 from "../../assets/images/recommend_5.png";
import avatar_5 from "../../assets/images/avatar_5.png";

import avatar_user from "../../assets/images/avatar_user.png";

import {
  Container,
  Description,
  Body,
  ContentFlatList,
  Footer,
  FooterUser,
  AvatarUser,
  DescriptionUser,
  TitleUser,
} from "./styles";

export default function Tab() {
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
        <Header title="Following" isVisible />

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

          <CardRecommend
            img_recommend={recommend_3}
            img_avatar={avatar_3}
            title={`BasUI`}
            description={`Dark times ahead?\nWW1 repeat`}
            tag_1={`WW1`}
            tag_2={`History`}
            tag_3={`Nurse`}
          />

          <CardRecommend
            img_recommend={recommend_4}
            img_avatar={avatar_4}
            title={`Monstah`}
            description={`Desert walk\nGTA X`}
            tag_1={`Desert`}
            tag_2={`GTA`}
            tag_3={`Loco`}
          />

          <CardRecommend
            img_recommend={recommend_5}
            img_avatar={avatar_5}
            title={`Great Samurai`}
            description={`Samurai fights soldiers\nThe Lost Samurai`}
            tag_1={`WW1`}
            tag_2={`Samurai`}
            tag_3={`Time`}
          />
        </Body>

        <Footer>
          <Description>Upcoming Streams</Description>

          <CardStreams />

          <Description>Upcoming Streams</Description>

          <FooterUser>
            <AvatarUser source={avatar_user} />

            <View>
              <TitleUser>Streamergurl92</TitleUser>

              <DescriptionUser>4 new videos</DescriptionUser>
            </View>
          </FooterUser>
        </Footer>
      </Container>
    </>
  );
}
