import { create } from "zustand";
import { getBands } from "../service/band.service";
import { Band } from "../types/band.type";
import { useEffect, useState } from "react";

type UseBands = {
  bands: Band[];
  setAllBands: () => Promise<void>;
};
const useBandsStore = create<UseBands>((set) => ({
  bands: [],
  setAllBands: async () => {
    const bands = await getBands();
    set({ bands: bands });
  },
}));

const useBands = () => {
  const { setAllBands, bands, ...rest } = useBandsStore();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (!bands.length)
      setAllBands().then(() => {
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
