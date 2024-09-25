import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { State, useAppDispatch } from "../store/store";
import { setAllActions } from "../store/asyncThunk/bandActions";

const BandListScreen = () => {
  const { band: bands, loading } = useSelector(
    (state: State) => state?.bandSlice
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAllActions());
  }, []);

  return (
    <div>
      {loading && <p>chargement...</p>}
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
