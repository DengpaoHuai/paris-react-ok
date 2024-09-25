import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Band } from "../types/band.type";
import { createBand } from "../service/band.service";
import { useState } from "react";

const bandSchema = z.object({
  name: z.string(),
  year: z.coerce.number(),
  rating: z.coerce
    .number()
    .min(0, "Sérieux ? Un nombre négatif ça n'existe pas...")
    .max(5, "Maximum 5"),
});

const CreateBandScreen = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Omit<Band, "_id">>({
    resolver: zodResolver(bandSchema),
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const submit = async (values: Omit<Band, "_id">) => {
    console.log(values);
    try {
      await createBand(values);
      navigate("/bands");
      //narrowing
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else if (typeof error === "string") {
        setError(error);
      } else {
        setError("An error occured");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("name")}></input>
        <input type="text" {...register("year")}></input>
        <input type="text" {...register("rating")}></input>
        {errors.name && <p>{errors.name.message}</p>}
        {errors.year && <p>{errors.year.message}</p>}
        {errors.rating && <p>{errors.rating.message}</p>}
        <button>create band</button>
      </form>
    </>
  );
};

export default CreateBandScreen;
