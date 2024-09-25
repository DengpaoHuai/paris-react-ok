import { useState } from "react";

const CreateBandScreen = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("salut");
    console.log(name, year, rating);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        type="text"
        name="year"
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
        }}
      ></input>
      <input
        type="text"
        name="rating"
        value={rating}
        onChange={(e) => {
          setRating(e.target.value);
        }}
      ></input>
      <button>create band</button>
    </form>
  );
};

export default CreateBandScreen;
