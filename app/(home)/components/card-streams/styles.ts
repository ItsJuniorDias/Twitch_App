import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.View`
  width: 100%;
  height: 196px;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 16px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const Avatar = styled(Image)`
  width: 32px;
  height: 32px;
`;

export const Notification = styled(Image)`
  width: 32px;
  height: 32px;
`;

export const Title = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 16px;
  color: #1c1c1f;
`;

export const Description = styled.Text`
  font-family: "Roboto-SemiBold";
  font-size: 18px;
  color: #1c1c1f;
  margin-top: 4px;
`;

export const Content = styled.View`
  /* background-color: blue; */
  margin-top: 16px;
`;

export const Tag = styled.View`
  width: 4px;
  height: 16px;
  border-radius: 50px;
  background-color: #9047ff;
`;

export const DescriptionContent = styled.Text`
  font-family: "Roboto-SemiBold";
  font-size: 14px;
  color: #1c1c1f;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 32px;
  background-color: #9047ff;
  border-radius: 8px;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 18px;
  color: #1c1c1f;
`;
