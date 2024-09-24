import { useEffect, useState } from "react";
import "./App.css";
import { PlanetResponse } from "./types/planets.type";

function App() {
  const [planetsResponse, setPlanetsResponse] = useState<PlanetResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });
  const [loading, setLoading] = useState(false);

  const getPlanets = async (url: string) => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setPlanetsResponse(data);
    setLoading(false);
  };

  useEffect(() => {
    getPlanets(`https://swapi.dev/api/planets`);
  }, []);

  return (
    <>
      {loading ? (
        <p>chargement...</p>
      ) : (
        planetsResponse.results.map((planet) => {
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
      <button
        disabled={!planetsResponse.previous}
        onClick={() => {
          if (planetsResponse.previous) getPlanets(planetsResponse.previous);
        }}
      >
        previous
      </button>
      <button
        disabled={!planetsResponse.next}
        onClick={() => {
          if (planetsResponse.next) getPlanets(planetsResponse.next);
        }}
      >
        next
      </button>
    </>
  );
}

export default App;
