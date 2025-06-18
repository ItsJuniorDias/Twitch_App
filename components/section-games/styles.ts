import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 168px;
  height: 40px;
  background-color: #9147ff;
  padding-right: 12px;
  padding-left: 12px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 24px;
  margin-top: 24px;
`;

export const Title = styled.Text`
  font-family: "Roboto-SemiBold";
  font-size: 18px;
  color: #ffffff;
`;

export const Image = styled.Image`
  width: 18px;
  height: 18px;
`;
