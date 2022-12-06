import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value,setValue]=useState(0);
  useEffect(()=>{
    if(value>0)
    document.title=`yash varshney`;
  });
  
  return <>
    <h1>{value}</h1>
    <button  class="btn" onClick={()=>setValue(value+1)}>click</button>
  </>;
};

export default UseEffectBasics;
