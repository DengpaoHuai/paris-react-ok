import { Link } from "react-router-dom";
import useBands from "../store/useBands";
import { deleteBand } from "../service/band.service";

const BandListScreen = () => {
  const { bands, isLoading, deleteBand: removeBand } = useBands();

  const deleteItem = (id: string) => {
    deleteBand(id).then(() => {
      removeBand(id);
    });
  };

  return (
    <div>
      {isLoading && <p>chargement...</p>}
      <h1>Bands</h1>
      <Link to="/create-band">Create a band</Link>
      {bands?.map((band) => {
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
