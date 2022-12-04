import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "yash",
    age: 20,
    message: "top developer",
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "good to see you" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button onClick={changeMessage} className="btn">
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
