import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin-top: 8px;
  padding-left: 24px;
`;

export const Image = styled.Image`
  width: 250px;
  height: 141px;
  margin-top: 12px;
`;

export const Avatar = styled.Image``;

export const Row = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-top: 16px;
`;

export const Title = styled.Text`
  font-family: "Roboto-SemiBold";
  font-size: 18px;
  color: #18181b;
  padding-left: 24px;
  margin-top: 24px;
`;

export const TitleAvatar = styled.Text`
  font-family: "Roboto-SemiBold";
  font-size: 18px;
  color: #18181b;
`;

export const Description = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 16px;
  color: #18181b;
`;
