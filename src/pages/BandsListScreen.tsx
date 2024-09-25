import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Band } from "../types/band.type";
import { deleteBand } from "../service/band.service";

const BandListScreen = () => {
  const { data, refetch } = useFetch<Band[]>(
    "https://crudcrud.com/api/600d08470983477a8e5aa75ab93ea37d/bands"
  );

  const deleteItem = async (id: string) => {
    deleteBand(id).then(() => {
      refetch();
    });
  };

  return (
    <div>
      <h1>Bands</h1>
      <Link to="/create-band">Create a band</Link>
      {data?.map((band) => {
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
