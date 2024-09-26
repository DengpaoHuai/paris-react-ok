import { Link } from "react-router-dom";
import useBands from "../store/useBands";
import { deleteBand, getBandById, getBands } from "../service/band.service";
import { queryClient } from "../App";
import { useQuery } from "@tanstack/react-query";
import { Band } from "../types/band.type";

const BandListScreen = () => {
  const { data, isLoading } = useQuery<Band[]>({
    queryKey: ["bands"],
    queryFn: getBands,
  });
  const deleteItem = (id: string) => {
    deleteBand(id).then(() => {
      // removeBand(id);
    });
  };

  const prefetchBand = (id: string) => {
    queryClient.prefetchQuery({
      queryKey: ["band", id],
      queryFn: () => getBandById(id),
    });
  };

  return (
    <div>
      {isLoading && <p>chargement...</p>}
      <h1>Bands</h1>
      <Link to="/create-band">Create a band</Link>
      {data?.map((band) => {
        return (
          <div key={band._id}>
            <h2>{band.name}</h2>
            <p>{band.year}</p>
            <p>{band.rating}</p>
            <button onClick={() => deleteItem(band._id)}>delete</button>
            <Link
              onMouseEnter={() => prefetchBand(band._id)}
              to={`/update-band/${band._id}`}
            >
              update
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BandListScreen;
