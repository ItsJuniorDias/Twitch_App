import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.TouchableOpacity`
  padding-left: 24px;
`;

export const ImageCard = styled(Image)`
  width: 122px;
  height: 205px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: "Roboto-SemiBold";
  font-size: 16px;
  color: #1c1c1f;
  margin-top: 4px;
`;

export const Pointer = styled.View`
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 50px;
  margin-right: 4px;
`;

export const Description = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 14px;
  color: #1c1c1f;
`;
