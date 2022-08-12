import { PlanetImage } from "./types";

export enum Planets {
  Earth = "Earth",
  Jupiter = "Jupiter",
  Mars = "Mars",
  Mercury = "Mercury",
  Moon = "Moon",
  Neptune = "Neptune",
  Saturn = "Saturn",
  Uranus = "Uranus",
  Venus = "Venus",
}

export const planetsImages: PlanetImage = {
  [Planets.Earth]: require("./earth.png"),
  [Planets.Jupiter]: require("./jupiter.png"),
  [Planets.Mars]: require("./mars.png"),
  [Planets.Mercury]: require("./mercury.png"),
  [Planets.Moon]: require("./moon.png"),
  [Planets.Neptune]: require("./neptune.png"),
  [Planets.Saturn]: require("./saturn.png"),
  [Planets.Uranus]: require("./uranus.png"),
  [Planets.Venus]: require("./venus.png"),
};
