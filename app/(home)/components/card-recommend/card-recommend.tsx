import React from "react";
import { View } from "react-native";

import dots from "../../../../assets/images/dots.png";

import Tag from "../../../../components/Tag/tag";

import {
  Avatar,
  CardBody,
  ContentAvatar,
  ContentDots,
  Dots,
  ImageRecommend,
  RowAvatar,
  TagAvatar,
  TextAvatarTag,
  TitleAvatar,
  TitleAvatarDescription,
} from "./styles";

interface CardRecommendProps {
  img_recommend: string;
  img_avatar: string;
  title: string;
  description: string;
  tag_1: string;
  tag_2: string;
  tag_3: string;
}

export default function CardRecommend({
  img_recommend,
  img_avatar,
  title,
  description,
  tag_1,
  tag_2,
  tag_3,
}: CardRecommendProps) {
  return (
    <CardBody>
      <ImageRecommend source={img_recommend} />

      <ContentAvatar>
        <RowAvatar>
          <Avatar source={img_avatar} />

          <TitleAvatar>{title}</TitleAvatar>
        </RowAvatar>

        <TitleAvatarDescription>{description}</TitleAvatarDescription>

        <RowAvatar>
          <Tag title={tag_1} />

          <Tag title={tag_2} />

          <Tag title={tag_3} />
        </RowAvatar>
      </ContentAvatar>

      <ContentDots>
        <Dots source={dots} />
      </ContentDots>
    </CardBody>
  );
}
