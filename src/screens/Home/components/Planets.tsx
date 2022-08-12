import React, { FC } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ApiPlanet } from "../../../api/types";
import { PLANET_ITEM_HEIGHT, PLANET_ITEM_VERTICAL_MARGIN } from "./constants";
import { PlanetItem } from "./PlanetItem";
import { PlanetContainer } from "./styled/Planets";

interface Props {
  planets: ApiPlanet[] | undefined;
}

export const Planets: FC<Props> = ({ planets }) => {
  const { bottom: insetBottom } = useSafeAreaInsets();

  const renderItem: ListRenderItem<ApiPlanet> = ({ item: planet, index }) => {
    return (
      <PlanetContainer key={`planet-${index}`}>
        <PlanetItem {...{ planet }} />
      </PlanetContainer>
    );
  };

  return (
    <FlatList
      data={planets}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      getItemLayout={(_, index) => ({
        length: PLANET_ITEM_HEIGHT + PLANET_ITEM_VERTICAL_MARGIN,
        offset: (PLANET_ITEM_HEIGHT + PLANET_ITEM_VERTICAL_MARGIN) * index,
        index,
      })}
      contentContainerStyle={{ paddingBottom: insetBottom }}
    />
  );
};
