import { Image, ScrollView, Text, View } from "react-native";
import styled from "styled-components";

export const PlanetDetailsContainer = styled(ScrollView)`
  flex: 1;
`;

export const PlanetDetailsContentContainer = styled(View)`
  padding-left: 16px;
  padding-right: 16px;
`;

export const PlanetImage = styled(Image)`
  height: 320px;
  width: 100%;
`;

export const PlanetName = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const TopicContainer = styled(View)`
  margin-bottom: 5px;
`;

export const Topic = styled(Text)`
  font-size: 17px;
`;

export const TopicAnswer = styled(Topic)`
  font-size: 17px;
  font-weight: bold;
`;
