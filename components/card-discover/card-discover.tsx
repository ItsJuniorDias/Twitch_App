import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { Image } from "expo-image";

import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import * as ScreenOrientation from "expo-screen-orientation";

import cardDiscover_1 from "../../assets/images/card_discover.png";
import alanzoka from "../../assets/images/alanzoka.png";

import { Container, ImageDiscover, Title, Row, Description } from "./styles";
import Tag from "../Tag/tag";

const videoSource =
  "https://res.cloudinary.com/dqvujibkn/video/upload/v1752701011/samples/dance-2.mp4";

interface CardProps {}

export default function CardDiscover({}: CardProps) {
  const [orientation, setOrientation] =
    useState<ScreenOrientation.Orientation | null>(null);

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  const DATA = [
    {
      id: "1",
      image: cardDiscover_1,
    },
    {
      id: "2",
      image: cardDiscover_1,
    },
  ];

  useEffect(() => {
    // pega a orientação inicial
    (async () => {
      const o = await ScreenOrientation.getOrientationAsync();
      setOrientation(o);
    })();

    // listener para mudanças
    const sub = ScreenOrientation.addOrientationChangeListener((event) => {
      setOrientation(event.orientationInfo.orientation);
    });

    console.log(sub, "sub");

    return () => {
      ScreenOrientation.removeOrientationChangeListener(sub);
    };
  }, []);

  const { width, height } = Dimensions.get("window");

  const isLandscape =
    orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
    orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT;

  const Item = ({ image }) => (
    <View style={styles.contentContainer}>
      <VideoView
        style={{
          width: isLandscape ? 358 : width,
          height: isLandscape ? 275 : 250,
        }}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />

      <Row>
        <Title>DANCE </Title>
        <Description>Two people dance</Description>
      </Row>

      <Row>
        <Tag title="Dance" />
        <Tag title="street" />
      </Row>
    </View>
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

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingLeft: 24,
  },
  video: {
    width: 358,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
