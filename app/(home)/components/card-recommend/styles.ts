import styled from "styled-components/native";
import { Image } from "expo-image";

export const CardBody = styled.TouchableOpacity`
  width: 100%;
  height: 92px;
  /* background-color: red; */
  flex-direction: row;
  margin-bottom: 8px;
`;

export const ImageRecommend = styled(Image)`
  width: 110px;
  height: 62px;
`;

export const Avatar = styled(Image)`
  width: 16px;
  height: 16px;
`;

export const Dots = styled(Image)`
  width: 4px;
  height: 16px;
`;

export const ContentAvatar = styled.View`
  /* background-color: blue; */
  width: 184px;
  margin-left: 8px;
  gap: 4px;
`;

export const RowAvatar = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const TitleAvatar = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 16px;
  color: #1c1c1f;
`;

export const TitleAvatarDescription = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 16px;
  color: #1c1c1f;
`;

export const TextAvatarTag = styled.Text`
  font-family: "Roboto-SemiBold";
  font-size: 12px;
  color: #1c1c1f;
`;

export const TagAvatar = styled.View`
  background-color: #eaeaeb;
  border-radius: 50px;
  padding: 4px;
`;

export const ContentDots = styled.View`
  height: 92px;
  width: 15%;
  align-items: flex-end;
  justify-content: center;
`;
