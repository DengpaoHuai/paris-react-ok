import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const bandSchema = z.object({
  name: z.string(),
  year: z.coerce.number(),
  rating: z.coerce
    .number()
    .min(0, "Sérieux ? Un nombre négatif ça n'existe pas...")
    .max(5, "Maximum 5"),
});

type BandForm = z.infer<typeof bandSchema>;

const CreateBandScreen = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<BandForm>({
    resolver: zodResolver(bandSchema),
  });
  const navigate = useNavigate();

  const submit = (values: BandForm) => {
    console.log(values);

    fetch("https://crudcrud.com/api/600d08470983477a8e5aa75ab93ea37d/bands", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(() => {
      console.log("Band created");
      navigate("/bands");
    });
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
