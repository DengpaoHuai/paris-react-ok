import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Band = {
  _id: string;
  name: string;
  year: string;
  rating: string;
};

const BandListScreen = () => {
  const [bands, setBands] = useState<Band[]>([]);

  useEffect(() => {
    const fetchBands = async () => {
      const response = await fetch(
        "https://crudcrud.com/api/600d08470983477a8e5aa75ab93ea37d/bands"
      );
      const data = await response.json();
      setBands(data);
    };
    fetchBands();
  }, []);

  const deleteItem = async (id: string) => {
    await fetch(
      `https://crudcrud.com/api/600d08470983477a8e5aa75ab93ea37d/bands/${id}`,
      {
        method: "DELETE",
      }
    );
    setBands(bands.filter((band) => band._id !== id));
  };

  return (
    <div>
      <h1>Bands</h1>
      <Link to="/create-band">Create a band</Link>
      {bands.map((band) => {
        return (
          <div key={band._id}>
            <h2>{band.name}</h2>
            <p>{band.year}</p>
            <p>{band.rating}</p>
            <button onClick={() => deleteItem(band._id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default BandListScreen;
