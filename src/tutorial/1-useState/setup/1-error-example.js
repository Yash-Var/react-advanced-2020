import React,{useState} from 'react';

const ErrorExample = () => {
  let title='random title';
  const [Title,setTitle]=useState(title);
  const handleClick=()=>{
    setTitle="ram varshney";
  }
  return (
<>
  <h2>{title}</h2>
  <button type='button' className='btn' onClick={handleClick}>Change Title</button>
</>
  );
};

export default ErrorExample;
