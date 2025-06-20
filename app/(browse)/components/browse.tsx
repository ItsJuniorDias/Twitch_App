import { useState } from "react";
import { FlatList } from "react-native";

import Header from "@/components/header/header";
import Tag from "@/components/Tag/tag";

import card_browse_1 from "../../../assets/images/card_browse_1.png";
import card_browse_2 from "../../../assets/images/card_browse_2.png";
import card_browse_3 from "../../../assets/images/card_browse_3.png";
import card_browse_4 from "../../../assets/images/card_browse_4.png";
import card_browse_5 from "../../../assets/images/card_browse_5.png";
import card_browse_6 from "../../../assets/images/card_browse_6.png";
import card_browse_7 from "../../../assets/images/card_browse_7.png";
import card_browse_8 from "../../../assets/images/card_browse_8.png";

import {
  Container,
  Content,
  TabBar,
  Title,
  Divider,
  CardContent,
  Description,
  ImageCard,
  TitleCard,
  Row,
  ContentTextCard,
} from "./styles";

export default function BrowseScreen() {
  const [active, setActive] = useState({
    activeCategories: false,
    activeLive: false,
  });

  const DATA = [
    {
      id: "1",
      title: "COD X Aliens",
      description: "721,3K Views",
      image: card_browse_1,
      tag_1: "FPS",
      tag_2: "Shooter",
    },
    {
      id: "2",
      title: "Robot Slayer",
      description: "12,7K Views",
      image: card_browse_2,
      tag_1: "Action",
      tag_2: "Shooter",
      tag_3: "FPS",
    },
    {
      id: "3",
      title: "GTA Neo",
      description: "736,2K Views",
      image: card_browse_3,
      tag_1: "FPS",
      tag_2: "Shooter",
      tag_3: "Driving",
    },
    {
      id: "4",
      title: "RDR Future edition",
      description: "209,1K Views",
      image: card_browse_4,
      tag_1: "Action",
      tag_2: "Driving",
      tag_3: "Shooter",
    },
    {
      id: "5",
      title: "Space Napoleon",
      description: "931,4K Views",
      image: card_browse_5,
      tag_1: "Shooter",
      tag_2: "Action",
      tag_3: "Horror",
    },
    {
      id: "6",
      title: "Penguin dance",
      description: "13,3K Views",
      image: card_browse_6,
      tag_1: "Dancing",
    },
    {
      id: "7",
      title: "Tetris extreme",
      description: "563,2K Views",
      image: card_browse_7,
      tag_1: "Arcade",
      tag_2: "Indie games",
      tag_3: "Strategy",
    },
    {
      id: "8",
      title: "Balders gate 3",
      description: "873,9K Views",
      image: card_browse_8,
      tag_1: "RPG",
      tag_2: "Strategy",
      tag_3: "Action",
    },
  ];

  const Item = ({ title, description, image, tag_1, tag_2, tag_3 }) => (
    <CardContent>
      <ImageCard source={image} />

      <ContentTextCard>
        <TitleCard>{title}</TitleCard>
        <Description>{description}</Description>

        <Row>
          <Tag title={tag_1} />
          {tag_2 && <Tag title={tag_2} />}
          {tag_3 && <Tag title={tag_3} />}
        </Row>
      </ContentTextCard>
    </CardContent>
  );

  return (
    <Container>
      <Header title="Browse" />

      <Content>
        <TabBar
          onPress={() =>
            setActive((prevState) => ({
              ...prevState,
              activeCategories: true,
              activeLive: false,
            }))
          }
        >
          <Title active={active.activeCategories}>Categories</Title>

          <Divider active={active.activeCategories} />
        </TabBar>

        <TabBar
          onPress={() =>
            setActive((prevState) => ({
              ...prevState,
              activeCategories: false,
              activeLive: true,
            }))
          }
        >
          <Title active={active.activeLive}>Live Channels</Title>

          <Divider active={active.activeLive} />
        </TabBar>
      </Content>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            description={item.description}
            image={item.image}
            tag_1={item.tag_1}
            tag_2={item.tag_2}
            tag_3={item.tag_3}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
