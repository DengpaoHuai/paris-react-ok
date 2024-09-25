import { createContext, ReactNode, useEffect, useState } from "react";
import { getBands } from "../service/band.service";
import { Band } from "../types/band.type";

type BandContextType = {
  band: Band[];
  addBand: (newBand: Band) => void;
  deleteBand: (id: string) => void;
};

export const BandContext = createContext<BandContextType>(
  {} as BandContextType
);

const BandContextProvider = ({ children }: { children: ReactNode }) => {
  const [band, setBand] = useState<Band[]>([]);
  useEffect(() => {
    getBands().then((data) => {
      setBand(data);
    });
  }, []);

  const addBand = (newBand: Band) => {
    setBand([...band, newBand]);
  };

  const deleteBand = (id: string) => {
    setBand(band.filter((band) => band._id !== id));
  };

  return (
    <BandContext.Provider value={{ band, addBand, deleteBand }}>
      {children}
    </BandContext.Provider>
  );
};

export default BandContextProvider;
