import { Image, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { PLANET_ITEM_HEIGHT } from "../constants";

export const PlanetName = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;

export const PlanetTouchable = styled(TouchableOpacity)`
  flex-direction: row;
  border-width: 1px;
  border-color: grey;
  border-radius: 10px;
  height: ${PLANET_ITEM_HEIGHT}px;
  padding-right: 15px;
  align-items: center;
  overflow: hidden;
`;

export const PlanetImage = styled(Image)`
  height: ${PLANET_ITEM_HEIGHT}px;
  width: ${PLANET_ITEM_HEIGHT}px;
`;
