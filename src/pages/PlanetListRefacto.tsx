import { useEffect, useState } from "react";
import { PlanetResponse } from "../types/planets.type";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

function PlanetListRefacto() {
  const navigate = useNavigate();
  const planets = useLoaderData();

  return (
    <div>
      <a href="/demo">Go to demo</a>
      <Link to="/demo">Go to demo</Link>
      <button onClick={() => navigate("/demo")}>Go to demo</button>

      {planets?.map((planet) => {
        return (
          <div key={planet.name}>
            <h1>{planet.name}</h1>
            <p>gravity : {planet.gravity}</p>
            <p>population : {planet.population}</p>
            <p>terrain : {planet.terrain}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PlanetListRefacto;
