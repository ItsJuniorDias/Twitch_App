import styled from "styled-components/native";
import { Image } from "expo-image";

export const HeaderComponent = styled.View`
  padding-right: 24px;
  padding-left: 24px;
`;

export const ImageCustom = styled(Image)`
  width: 32px;
  height: 32px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const ContentRight = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ButtonCreate = styled.TouchableOpacity`
  width: 100px;
  height: 38px;
  flex-direction: row;
  background-color: #eaeaeb;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

export const TextCreate = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 16px;
  color: #1c1c1f;
`;

export const TitleHeader = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 32px;
  color: #1c1c1f;
`;

export const Description = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 18px;
  color: #1c1c1f;
  margin-top: 24px;
  margin-bottom: 16px;
`;
