import { FlatList, View } from "react-native";

import Header from "../../components/header/header";
import Card from "../(home)/components/card/card";
import DiscoverSection from "../../components/card-discover/card-discover";
import SectionGames from "../../components/section-games/section-games";
import SectionChannels from "../../components/section-channels/section-channles";

import icon_channels from "../../assets/images/icon_channels.png";
import icon_avatar from "../../assets/images/icon_channels_avatar.png";

import carousel_1 from "../../assets/images/card_carousel_1.png";
import carousel_2 from "../../assets/images/card_carousel_2.png";
import carousel_3 from "../../assets/images/card_carousel_3.png";

import carousel_followed_1 from "../../assets/images/carousel_followed_1.png";
import carousel_followed_2 from "../../assets/images/carousel_followed_2.png";
import carousel_followed_3 from "../../assets/images/carousel_followed_3.png";

import icon_channels_1 from "../../assets/images/icon_channels_1.png";
import icon_avatar_channels_1 from "../../assets/images/icon_avatar_channels_1.png";

import icon_channels_2 from "../../assets/images/icon_channels_2.png";
import icon_avatar_channels_2 from "../../assets/images/icon_avatar_channels_2.png";

import icon_channels_3 from "../../assets/images/icon_channels_3.png";
import icon_avatar_channels_3 from "../../assets/images/icon_avatar_channels_3.png";

import icon_channels_4 from "../../assets/images/icon_channels_4.png";
import icon_avatar_channels_4 from "../../assets/images/icon_avatar_channels_4.png";

import icon_channels_5 from "../../assets/images/icon_channels_5.png";
import icon_avatar_channels_5 from "../../assets/images/icon_avatar_channels_5.png";

import { Container, TitleCarousel } from "./styles";

export default function Tab() {
  const dataSection_1 = [
    {
      id: "1",
      title: "Geek_69",
      description: "Just Chatting\nGeek69 Components",
      image: icon_channels,
      avatar: icon_avatar,
    },
    {
      id: "1",
      title: "Geek_69",
      description: "Just Chatting\nGeek69 Components",
      image: icon_channels,
      avatar: icon_avatar,
    },
  ];

  const data_carousel_1 = [
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

  const data_carousel_2 = [
    {
      title: "Space Napoleon",
      description: "931,4K",
      image: carousel_followed_1,
    },
    {
      title: "Tetris extreme",
      description: "563,2K",
      image: carousel_followed_2,
    },
    {
      title: "Category",
      description: "209,1K",
      image: carousel_followed_3,
    },
  ];

  const dataSection_2 = [
    {
      id: "2",
      title: "ChuckleMaster30",
      description: "Complete mission X\nDark Castle",
      image: icon_channels_1,
      avatar: icon_avatar_channels_1,
    },
    {
      id: "2",
      title: "ChuckleMaster30",
      description: "Complete mission X\nDark Castle",
      image: icon_channels_1,
      avatar: icon_avatar_channels_1,
    },
  ];

  const dataSection_3 = [
    {
      id: "3",
      title: "ROFL_Rocket",
      description: "Vroomin’ around\nRocket",
      image: icon_channels_2,
      avatar: icon_avatar_channels_2,
    },
    {
      id: "3",
      title: "ROFL_Rocket",
      description: "Vroomin’ around\nRocket",
      image: icon_channels_2,
      avatar: icon_avatar_channels_2,
    },
  ];

  const dataSection_4 = [
    {
      id: "4",
      title: "WhoopeeStreamer",
      description: "Time travelin’ \nRDR Future edition",
      image: icon_channels_3,
      avatar: icon_avatar_channels_3,
    },
    {
      id: "4",
      title: "WhoopeeStreamer",
      description: "Time travelin’ \nRDR Future edition",
      image: icon_channels_3,
      avatar: icon_avatar_channels_3,
    },
  ];

  const dataSection_5 = [
    {
      id: "5",
      title: "ComicSansHero",
      description: "Slaying souls & dragons\nSoul Slayer",
      image: icon_channels_4,
      avatar: icon_avatar_channels_4,
    },
    {
      id: "5",
      title: "ComicSansHero",
      description: "Slaying souls & dragons\nSoul Slayer",
      image: icon_channels_4,
      avatar: icon_avatar_channels_4,
    },
  ];

  const dataSection_6 = [
    {
      id: "6",
      title: "YuckYakker",
      description: "EXTREMEEE\nCall of Duty X",
      image: icon_channels_5,
      avatar: icon_avatar_channels_5,
    },
    {
      id: "6",
      title: "YuckYakker",
      description: "EXTREMEEE\nCall of Duty X",
      image: icon_channels_5,
      avatar: icon_avatar_channels_5,
    },
  ];

  return (
    <>
      <Container>
        <Header title="Discover" isVisible={false} />

        <DiscoverSection />

        <SectionGames />

        <SectionChannels data={dataSection_1} />

        <TitleCarousel>Followed Categories</TitleCarousel>

        <FlatList
          data={data_carousel_1}
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

        <SectionChannels data={dataSection_2} />

        <SectionChannels data={dataSection_3} />

        <SectionChannels data={dataSection_4} />

        <SectionChannels data={dataSection_5} />

        <TitleCarousel>Followed Categories</TitleCarousel>

        <FlatList
          data={data_carousel_2}
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

        <SectionChannels data={dataSection_6} />
      </Container>
    </>
  );
}
