import { useEffect, useState } from "react";
import { PlanetResponse } from "../types/planets.type";
import { Link, useNavigate } from "react-router-dom";

function PlanetList() {
  const navigate = useNavigate();
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

    const monCustomListener = (e: Event) => {
      console.log(e);
    };
    document.addEventListener("scroll", monCustomListener);
    return () => {
      console.log("coucou je me démonte");
      document.removeEventListener("scroll", monCustomListener);
    };
  }, []);

  return (
    <div
      style={{
        height: "500vh",
      }}
    >
      <a href="/demo">Go to demo</a>
      <Link to="/demo">Go to demo</Link>
      <button onClick={() => navigate("/demo")}>Go to demo</button>
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
    </div>
  );
}

export default PlanetList;
