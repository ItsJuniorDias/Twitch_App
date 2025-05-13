import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.View`
  flex: 1;
  background-color: #9047ff;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Image)`
  width: 100px;
  height: 116px;
`;
