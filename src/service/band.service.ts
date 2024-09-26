import { Band } from "../types/band.type";

export const createBand = async (band: Omit<Band, "_id">) => {
  const response = await fetch(
    "https://crudcrud.com/api/5d30c2a62a0d45d3a8a572a527affd81/bands",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(band),
    }
  );
  const data = await response.json();
  return data as Band;
};

export const getBands = async () => {
  const response = await fetch(
    "https://crudcrud.com/api/5d30c2a62a0d45d3a8a572a527affd81/bands"
  );
  return response.json();
};

export const deleteBand = async (id: string) => {
  await fetch(
    `https://crudcrud.com/api/5d30c2a62a0d45d3a8a572a527affd81/bands/${id}`,
    {
      method: "DELETE",
    }
  );
};
