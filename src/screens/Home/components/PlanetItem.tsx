import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { ApiPlanet } from "../../../api/types";
import { Planets, planetsImages } from "../../../assets/images";
import { RootNavigationProp, Screens } from "../../../navigation/types";
import { PlanetImage, PlanetName, PlanetTouchable } from "./styled/PlanetItem";

interface Props {
  planet: ApiPlanet;
}

export const PlanetItem: FC<Props> = ({ planet }) => {
  const { navigate } = useNavigation<RootNavigationProp>();

  return (
    <PlanetTouchable
      key={`item-${planet.id}`}
      onPress={() => navigate(Screens.PlanetDetails, { planet })}
    >
      <PlanetImage
        source={
          planetsImages[planet.englishName] ?? planetsImages[Planets.Moon]
        }
      />
      <PlanetName>{planet.name}</PlanetName>
    </PlanetTouchable>
  );
};
