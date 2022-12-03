import React, { useState } from "react";

const ErrorExample = () => {
  let title = "random title";
  const [Title, setTitle] = useState(title);
  const handleClick = () => {
    if (Title === "random title") setTitle("ram varshney");
    else setTitle("random title");
  };
  return (
    <>
      <h2>{Title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default ErrorExample;
