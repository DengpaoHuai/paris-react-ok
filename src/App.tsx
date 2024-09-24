import { useEffect, useState } from "react";
import "./App.css";
import CardCounter from "./components/CardCounter";

function App() {
  const [demo, setDemo] = useState(1);
  const [planets, setPlanets] = useState([]);

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
      <button
        onClick={() => {
          setDemo(demo + 1);
        }}
      >
        increment
      </button>
      <CardCounter
        customStyle={{
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
        mafunctionmetier={() => console.log("youpi")}
      >
        {demo}
      </CardCounter>
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
