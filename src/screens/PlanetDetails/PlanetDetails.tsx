import React, { FC } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Planets, planetsImages } from "../../assets/images";
import { Texts } from "../../constants/texts";
import { PlanetDetailsProps } from "../../navigation/types";
import {
  PlanetDetailsContainer,
  PlanetDetailsContentContainer,
  PlanetImage,
  PlanetName,
  Title,
  Topic,
  TopicAnswer,
  TopicContainer,
} from "./styled/PlanetDetails";

export const PlanetDetails: FC<PlanetDetailsProps> = ({
  route: {
    params: { planet },
  },
}) => {
  const { bottom: insetBottom } = useSafeAreaInsets();

  const renderTopic = (topic: string, answer?: string) => {
    return (
      <TopicContainer>
        <Topic>
          {topic}
          <TopicAnswer>{answer ?? Texts.unknown}</TopicAnswer>
        </Topic>
      </TopicContainer>
    );
  };

  return (
    <PlanetDetailsContainer
      contentContainerStyle={{ paddingBottom: insetBottom }}
    >
      <PlanetImage
        source={
          planetsImages[planet.englishName] ?? planetsImages[Planets.Moon]
        }
      />
      <PlanetDetailsContentContainer>
        <PlanetName>{planet.name}</PlanetName>
        {renderTopic(Texts.PlanetDetails.englishName, planet.englishName)}
        {renderTopic(
          Texts.PlanetDetails.isPlanet,
          planet.isPlanet ? Texts.yes : Texts.no
        )}
        <Title>{Texts.PlanetDetails.Dimensions.title}</Title>
        {renderTopic(
          Texts.PlanetDetails.Dimensions.semimajorAxis,
          planet.semimajorAxis.toString()
        )}
        {renderTopic(
          Texts.PlanetDetails.Dimensions.perihelion,
          planet.perihelion.toString()
        )}
        {renderTopic(
          Texts.PlanetDetails.Dimensions.aphelion,
          planet.aphelion.toString()
        )}
        {renderTopic(
          Texts.PlanetDetails.Dimensions.eccentricity,
          planet.eccentricity.toString()
        )}
        {renderTopic(
          Texts.PlanetDetails.Dimensions.inclination,
          planet.inclination.toString()
        )}
        {renderTopic(
          Texts.PlanetDetails.Dimensions.meanRadius,
          planet.meanRadius.toString()
        )}
        {renderTopic(
          Texts.PlanetDetails.Dimensions.dimension,
          planet.dimension
        )}
        <Title>{Texts.PlanetDetails.Discovery.title}</Title>
        {renderTopic(
          Texts.PlanetDetails.Discovery.discoveredBy,
          planet.discoveredBy
        )}
        {renderTopic(
          Texts.PlanetDetails.Discovery.discoveryDate,
          planet.discoveryDate
        )}
      </PlanetDetailsContentContainer>
    </PlanetDetailsContainer>
  );
};
