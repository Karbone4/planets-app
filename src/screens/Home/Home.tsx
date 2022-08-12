import { useQuery } from "@tanstack/react-query";
import React, { FC, useEffect, useState } from "react";
import { fetchPlanets } from "../../api/querys";
import { ApiPlanet } from "../../api/types";
import { HomeProps } from "../../navigation/types";
import { PlanetInput } from "./components/PlanetInput";
import { Planets } from "./components/Planets";
import { HomeContainer } from "./styled/Home";

export const Home: FC<HomeProps> = ({}) => {
  const { data } = useQuery(["planets"], fetchPlanets);
  const [planets, setPlanets] = useState<ApiPlanet[] | undefined>(undefined);

  useEffect(() => {
    if (data?.bodies) {
      setPlanets(data?.bodies);
    }
  }, [data]);

  return (
    <HomeContainer edges={["right", "left"]}>
      <PlanetInput
        onChangeText={(text) =>
          setPlanets(
            data?.bodies?.filter((planet) => planet.name.includes(text))
          )
        }
      />
      <Planets {...{ planets }} />
    </HomeContainer>
  );
};
