import { Band } from "../types/band.type";

export const createBand = async (band: Omit<Band, "_id">) => {
  const response = await fetch(
    "https://crudcrud.com/api/600d08470983477a8e5aa75ab93ea37d/bands",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(band),
    }
  );
  return response.json();
};

export const getBands = async () => {
  const response = await fetch(
    "https://crudcrud.com/api/600d08470983477a8e5aa75ab93ea37d/bands"
  );
  return response.json();
};

export const deleteBand = async (id: string) => {
  await fetch(
    `https://crudcrud.com/api/600d08470983477a8e5aa75ab93ea37d/bands/${id}`,
    {
      method: "DELETE",
    }
  );
};
