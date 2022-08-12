import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { ApiPlanet } from "../api/types";

export enum Screens {
  Home = "Home",
  PlanetDetails = "PlanetDetails",
}

type RootStackParamList = {
  Home: undefined;
  PlanetDetails: { planet: ApiPlanet };
};

export type HomeProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.Home
>;
export type PlanetDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.PlanetDetails
>;

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;
