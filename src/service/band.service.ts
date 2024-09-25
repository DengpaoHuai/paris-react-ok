import { Band } from "../types/band.type";

export const createBand = async (band: Omit<Band, "_id">) => {
  const response = await fetch(
    "https://crudcrud.com/api/3589df2e11eb4700a1a38835ae328fb7/bands",
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
    "https://crudcrud.com/api/3589df2e11eb4700a1a38835ae328fb7/bands"
  );
  return response.json();
};

export const deleteBand = async (id: string) => {
  await fetch(
    `https://crudcrud.com/api/3589df2e11eb4700a1a38835ae328fb7/bands/${id}`,
    {
      method: "DELETE",
    }
  );
};
