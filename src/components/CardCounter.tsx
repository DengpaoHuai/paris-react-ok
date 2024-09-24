import { Fragment, useState } from "react";

let planets = [
  {
    name: "Mars",
    distance: 1000000,
    population: 1000000,
    color: "red",
  },
  {
    name: "Earth",
    distance: 0,
    population: 1000000,
    color: "blue",
  },
  {
    name: "Jupiter",
    distance: 10000000,
    population: 1000000,
    color: "orange",
  },
];

type CardCounterProps = {
  title?: string;
  customStyle: React.CSSProperties;
  mafunctionmetier: () => void;
  children: React.ReactNode;
};

const CardCounter: React.FC<CardCounterProps> = ({
  title,
  customStyle = {},
  mafunctionmetier = () => {},
  children,
}) => {
  const [count, setCount] = useState(1);
  const increment1 = () => {
    setCount(count + 1);
    console.log(count);
    mafunctionmetier();
  };

  return (
    <div style={customStyle}>
      {title && <h1>{title}</h1>}
      {children}
      {planets.map((planet) => {
        return (
          <Fragment key={planet.name}>
            <h1>{planet.name}</h1>
            <p>distance : {planet.distance}</p>
            <p>population : {planet.population}</p>
            <p>color : {planet.color}</p>
          </Fragment>
        );
      })}
      <p>count : {count}</p>
      <button onClick={increment1}>increment counter1</button>
    </div>
  );
};

export default CardCounter;
