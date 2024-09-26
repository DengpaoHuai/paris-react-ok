import { Band } from "../types/band.type";

export const createBand = async (band: Omit<Band, "_id">) => {
  const response = await fetch(
    "https://crudcrud.com/api/95189b15728e4c70b9ca741301bc143b/bands",
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
    "https://crudcrud.com/api/95189b15728e4c70b9ca741301bc143b/bands"
  );
  return response.json();
};

export const deleteBand = async (id: string) => {
  await fetch(
    `https://crudcrud.com/api/95189b15728e4c70b9ca741301bc143b/bands/${id}`,
    {
      method: "DELETE",
    }
  );
};

export const getBandById = async (id: string) => {
  const response = await fetch(
    `https://crudcrud.com/api/95189b15728e4c70b9ca741301bc143b/bands/${id}`
  );
  return response.json();
};

export const updateBand = async (id: string, band: Omit<Band, "_id">) => {
  const response = await fetch(
    `https://crudcrud.com/api/95189b15728e4c70b9ca741301bc143b/bands/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(band),
    }
  );
  return true;
};
