export type ApiMoon = {
  moon: string;
};

export type ApiPlanet = {
  id: string;
  name: string;
  englishName: string;
  moons: ApiMoon[];
  isPlanet: boolean;
  semimajorAxis: number;
  perihelion: number;
  aphelion: number;
  eccentricity: number;
  inclination: number;
  meanRadius: number;
  dimension: string;
  discoveredBy: string;
  discoveryDate: string;
};
