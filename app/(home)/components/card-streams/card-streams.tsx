import React from "react";
import { View } from "react-native";
import { Image } from "expo-image";

import avatar_streams from "../../../../assets/images/avatar_streams.png";
import notification from "../../../../assets/images/notification.png";

import {
  Container,
  Avatar,
  Row,
  Title,
  Description,
  Content,
  DescriptionContent,
  Tag,
  Button,
  ButtonText,
  Notification,
} from "./styles";

export default function CardStreams() {
  return (
    <Container>
      <Row>
        <Avatar source={avatar_streams} />

        <Title>Boom Boom</Title>
      </Row>

      <Description>Let's get that Boom started</Description>

      <Content>
        <Title>All about the boom</Title>

        <Row>
          <Tag />

          <DescriptionContent>10 March</DescriptionContent>
        </Row>
      </Content>

      <Button>
        <Row>
          <Notification source={notification} />

          <ButtonText>Remind me</ButtonText>
        </Row>
      </Button>
    </Container>
  );
}
