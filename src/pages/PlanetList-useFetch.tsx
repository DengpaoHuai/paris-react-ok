import { PlanetResponse } from "../types/planets.type";
import useFetch from "../hooks/useFetch";

function PlanetList() {
  const { data, loading } = useFetch<PlanetResponse>(
    "https://swapi.dev/api/planets"
  );

  return (
    <>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        data?.results.map((planet) => {
          return (
            <div key={planet.name}>
              <h1>{planet.name}</h1>
              <p>gravity : {planet.gravity}</p>
              <p>population : {planet.population}</p>
              <p>terrain : {planet.terrain}</p>
            </div>
          );
        })
      )}
    </>
  );
}

export default PlanetList;
