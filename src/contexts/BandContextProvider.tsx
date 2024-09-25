import { createContext, ReactNode, useEffect, useState } from "react";
import { getBands } from "../service/band.service";
import { Band } from "../types/band.type";

type BandContextType = {
  band: Band[];
  addBand: (newBand: Band) => void;
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

  return (
    <BandContext.Provider value={{ band, addBand }}>
      {children}
    </BandContext.Provider>
  );
};

export default BandContextProvider;
