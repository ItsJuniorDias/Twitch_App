import React, { useState, useEffect, useRef } from "react";
import { FlatList, View, StyleSheet, Dimensions } from "react-native";

import { useVideoPlayer, VideoView } from "expo-video";

import * as ScreenOrientation from "expo-screen-orientation";

import Tag from "../Tag/tag";

import { Title, Row, Description } from "./styles";

const videoSourceOne =
  "https://res.cloudinary.com/dqvujibkn/video/upload/v1755866972/0822_2_lssa2v.mov";

const videoSourceSecond =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const videoSourceThird =
  "https://res.cloudinary.com/dqvujibkn/video/upload/v1752701011/samples/dance-2.mp4";

const DATA = [
  {
    id: "1",
    video: videoSourceOne,
    title: "COMEÇO ABSURDO! ",
    description: "BLACK MYTH: WUKONG",
    tagOne: "#Alanzoka",
    tagSecond: "WUKONG",
  },
  {
    id: "2",
    video: videoSourceSecond,
    title: "Big Buck",
    description: "Bunny",
    tagOne: "Desenho",
    tagSecond: "Animação",
  },
  {
    id: "3",
    video: videoSourceThird,
    title: "Dance",
    description: "Two people dancing",
    tagOne: "Dance",
    tagSecond: "Street",
  },
];

interface CardProps {}

export default function CardDiscover({}: CardProps) {
  const [orientation, setOrientation] =
    useState<ScreenOrientation.Orientation | null>(null);

  const playersRef = useRef<any[]>(DATA.map(() => null));

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

    return () => {
      ScreenOrientation.removeOrientationChangeListener(sub);
    };
  }, []);

  const { width, height } = Dimensions.get("window");

  const isLandscape =
    orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
    orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT;

  const Item = ({
    id,
    video,
    title,
    description,
    tagOne,
    tagSecond,
    index,
  }) => {
    const player = useVideoPlayer(video, async (player) => {
      playersRef.current[index] = player;
    });

    return (
      <View style={styles.contentContainer}>
        <VideoView
          style={{
            width: isLandscape ? width * 0.9 : width,
            height: isLandscape ? 250 : height,
          }}
          player={player}
          allowsFullscreen
          allowsPictureInPicture
          nativeControls
        />

        <Row>
          <Title>{title} </Title>
          <Description>{description}</Description>
        </Row>

        <Row>
          <Tag title={tagOne} />
          <Tag title={tagSecond} />
        </Row>
      </View>
    );
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      const visibleIndex = viewableItems[0].index;

      playersRef.current.forEach((player, idx) => {
        if (!player) return;
        if (idx === visibleIndex) {
          player.play();
        } else {
          player.pause();
        }
      });
    }
  }).current;

  return (
    <FlatList
      data={DATA}
      horizontal
      renderItem={({ item, index }) => (
        <Item
          index={index}
          id={item.id}
          video={item.video}
          title={item.title}
          description={item.description}
          tagOne={item.tagOne}
          tagSecond={item.tagSecond}
        />
      )}
      contentContainerStyle={{ paddingRight: 24 }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      pagingEnabled
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{ itemVisiblePercentThreshold: 80 }}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingLeft: 24,
    marginBottom: 24,
  },
  video: {
    width: 358,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
