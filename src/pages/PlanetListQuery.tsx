import { useEffect, useState } from "react";
import { PlanetResponse } from "../types/planets.type";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getPlanets } from "../service/planet.service";

function PlanetListQuery() {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const { data } = useSuspenseQuery({
    queryKey: ["planets", page],
    queryFn: () => getPlanets(page),
  });

  const navigate = useNavigate();

  return (
    <div>
      <a href="/demo">Go to demo</a>
      <Link to="/demo">Go to demo</Link>
      <button onClick={() => navigate("/demo")}>Go to demo</button>

      {data?.results?.map((planet) => {
        return (
          <div key={planet.name}>
            <h1>{planet.name}</h1>
            <p>gravity : {planet.gravity}</p>
            <p>population : {planet.population}</p>
            <p>terrain : {planet.terrain}</p>
          </div>
        );
      })}
      <button
        disabled={!data?.previous}
        onClick={() => {
          if (data?.previous) setPage(page - 1);
        }}
      >
        previous
      </button>
      <button
        disabled={!data?.next}
        onClick={() => {
          if (data?.next) setPage(page + 1);
        }}
      >
        next
      </button>
    </div>
  );
}

export default PlanetListQuery;
