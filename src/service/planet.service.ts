export const getPlanets = async (page = 1) => {
  const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return response.json();
};
