import React from "react";
import { View } from "react-native";

import {
  Container,
  ImageCard,
  Row,
  Title,
  Pointer,
  Description,
} from "./styles";

interface CardProps {
  title: string;
  image: string;
  description: string;
}

export default function Card({ title, image, description }: CardProps) {
  return (
    <Container>
      <ImageCard source={image} />

      <Title>{title}</Title>

      <Row>
        <Pointer />

        <Description>{description}</Description>
      </Row>
    </Container>
  );
}
