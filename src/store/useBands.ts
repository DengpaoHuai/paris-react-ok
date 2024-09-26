import { create } from "zustand";
import { getBands } from "../service/band.service";
import { Band } from "../types/band.type";
import { useEffect, useState } from "react";

type UseBands = {
  bands: Band[];
  setAllBands: (bands: Band[]) => void;
  createBand: (band: Band) => void;
  deleteBand: (id: string) => void;
};
const useBandsStore = create<UseBands>((set) => ({
  bands: [],
  setAllBands: (bands: Band[]) => {
    set({ bands: bands });
  },
  createBand: (band: Band) => {
    set((state) => ({ bands: [...state.bands, band] }));
  },
  deleteBand: (id: string) => {
    set((state) => ({ bands: state.bands.filter((band) => band._id !== id) }));
  },
}));

const useBands = () => {
  const { setAllBands, bands, ...rest } = useBandsStore();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (bands.length) return;
    setIsLoading(true);
    getBands().then((bands) => {
      setAllBands(bands);
      setIsLoading(false);
    });
  }, []);

  return {
    ...rest,
    bands,
    isLoading,
  };
};

export default useBands;
