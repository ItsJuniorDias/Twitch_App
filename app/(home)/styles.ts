import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f7f7f8;
  padding-top: 64px;
`;

export const Description = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 18px;
  color: #1c1c1f;
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const ContentFlatList = styled.View`
  height: 253px;
`;

export const Body = styled.View`
  padding-right: 24px;
  padding-left: 24px;
`;

export const Footer = styled.View`
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 24px;
`;

export const FooterUser = styled.View`
  width: 100%;
  height: 48px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const AvatarUser = styled(Image)`
  width: 40px;
  height: 40px;
`;

export const TitleUser = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 18px;
  color: #1c1c1f;
`;

export const DescriptionUser = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 14px;
  color: #1c1c1f;
`;
