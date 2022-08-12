export const fetchPlanets = async () => {
  const res = await fetch("https://api.le-systeme-solaire.net/rest/bodies/");
  return res.json();
};
