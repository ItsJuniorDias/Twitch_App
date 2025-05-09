import { Image } from "expo-image";
import { View, StyleSheet } from "react-native";

import user_logo from "../../assets/images/user.png";
import stream from "../../assets/images/stream.png";
import comments from "../../assets/images/comments.png";
import share from "../../assets/images/share.png";
import create from "../../assets/images/create.png";

import {
  Container,
  ImageCustom,
  Content,
  ContentRight,
  ButtonCreate,
  TextCreate,
} from "./styles";

export default function HomeScreen() {
  return (
    <Container>
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
    </Container>
  );
}
