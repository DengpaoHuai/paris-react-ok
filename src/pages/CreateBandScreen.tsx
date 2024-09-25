import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
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
    setValue,
    watch,
    formState: { errors },
  } = useForm<BandForm>({
    resolver: zodResolver(bandSchema),
  });

  const name = watch("name");

  useEffect(() => {
    console.log("reload");
    if (!name) return;
    console.log("name changed");
    setValue("name", name.toUpperCase());
  }, [name]);

  console.log(name);

  const submit = (values: BandForm) => {
    console.log(values);
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
