import { useRef, useState } from "react";

const CreateBandScreen = () => {
  const name = useRef<HTMLInputElement>();
  const year = useRef<HTMLInputElement>();
  const rating = useRef<HTMLInputElement>();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("salut");
    console.log(name.current.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" ref={name}></input>
        <input type="text" name="year" ref={year}></input>
        <input type="text" name="rating" ref={rating}></input>
        <button>create band</button>
      </form>
      <button
        onClick={() => {
          console.log(name.current.value);
        }}
      ></button>
    </>
  );
};

export default CreateBandScreen;
