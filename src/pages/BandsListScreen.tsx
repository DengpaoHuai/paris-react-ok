import { Link } from "react-router-dom";
import { deleteBand } from "../service/band.service";
import { useContext } from "react";
import { BandContext } from "../contexts/BandContextProvider";

const BandListScreen = () => {
  const { band, deleteBand: deleteBandById } = useContext(BandContext);

  const deleteItem = async (id: string) => {
    deleteBand(id).then(() => {
      deleteBandById(id);
    });
  };

  return (
    <div>
      <h1>Bands</h1>
      <Link to="/create-band">Create a band</Link>
      {band?.map((band) => {
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
