import { Band } from "../types/band.type";

export const createBand = async (band: Omit<Band, "_id">) => {
  const response = await fetch(
    "https://crudcrud.com/api/c0cf38d7ab974822bedd0372165461c4/bands",
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
    "https://crudcrud.com/api/c0cf38d7ab974822bedd0372165461c4/bands"
  );
  return response.json();
};

export const deleteBand = async (id: string) => {
  await fetch(
    `https://crudcrud.com/api/c0cf38d7ab974822bedd0372165461c4/bands/${id}`,
    {
      method: "DELETE",
    }
  );
};
