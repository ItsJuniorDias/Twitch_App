import { Image } from "expo-image";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding-left: 24px;
  margin-top: 24px;
`;

export const ImageDiscover = styled(Image)`
  width: 335px;
  height: 241px;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  gap: 8px;
`;

export const Title = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 18px;
  color: #1c1c1f;
  margin-top: 8px;
`;

export const Description = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 18px;
  color: #1c1c1f;
  margin-top: 8px;
`;
