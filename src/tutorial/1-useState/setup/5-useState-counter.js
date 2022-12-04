import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  return (<>
  <h1>{count}</h1>
<button className="btn" onClick={()=>setCount(count+1)}>counter</button>
  </>);
};

export default UseStateCounter;
