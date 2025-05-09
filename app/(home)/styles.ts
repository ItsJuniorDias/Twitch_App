import styled from "styled-components/native";

import { Image } from "expo-image";

export const Container = styled.View`
  flex: 1;
  background-color: #f7f7f8;
  padding-top: 64px;
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
