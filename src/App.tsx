import { useEffect, useState } from "react";
import "./App.css";
import { Planet } from "./types/planets.type";

function App() {
  const [planets, setPlanets] = useState<Array<Planet>>([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);

        setPlanets(data.results);
      });
  }, []);

  return (
    <>
      {planets.map((planet) => {
        return (
          <div key={planet.name}>
            <h1>{planet.name}</h1>
            <p>distance : {planet.distance}</p>
            <p>population : {planet.population}</p>
            <p>color : {planet.color}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
