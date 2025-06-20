import styled from "styled-components/native";
import { Image } from "expo-image";

interface PropsActive {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: #f7f7f8;
`;

export const Content = styled.View`
  /* background-color: red; */
  padding-left: 24px;
  margin-top: 32px;
  flex-direction: row;
  gap: 40px;
`;

export const TabBar = styled.TouchableOpacity`
  height: 40px;
  /* background-color: blue; */
  justify-content: space-around;
`;

export const Title = styled.Text<PropsActive>`
  font-family: "Roboto-SemiBold";
  font-size: 16px;
  color: ${({ active }) => (active ? " #9147ff" : "#18181B")};
`;

export const Divider = styled.View<PropsActive>`
  height: 2px;
  background-color: #9147ff;
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

export const CardContent = styled.TouchableOpacity`
  flex-direction: row;
  padding-left: 24px;
  gap: 12px;
  margin-top: 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 4px;
`;

export const ImageCard = styled(Image)`
  width: 60px;
  height: 80px;
`;

export const ContentTextCard = styled.View`
  gap: 4px;
`;

export const TitleCard = styled.Text`
  font-family: "Roboto-SemiBold";
  font-size: 18px;
  color: #18181b;
`;

export const Description = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 16px;
  color: #18181b;
`;
