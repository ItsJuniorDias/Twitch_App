import React from "react";
import { View } from "react-native";

import user_logo from "../../../../assets/images/user.png";
import stream from "../../../../assets/images/stream.png";
import comments from "../../../../assets/images/comments.png";
import share from "../../../../assets/images/share.png";
import create from "../../../../assets/images/create.png";

import {
  HeaderComponent,
  Content,
  ImageCustom,
  ContentRight,
  ButtonCreate,
  TextCreate,
  TitleHeader,
  Description,
} from "./styles";

export interface HeaderProps {
  title: string;
  isVisible: boolean;
}

export default function Header({ title, isVisible }: HeaderProps) {
  return (
    <HeaderComponent>
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

      <TitleHeader>{title}</TitleHeader>

      {isVisible && <Description>Followed Categories</Description>}
    </HeaderComponent>
  );
}
