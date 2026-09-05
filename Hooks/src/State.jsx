import React from 'react'
import { useState } from 'react';

const State = () => {
   const [num,setnum] = useState(10);
    const [name,setname] = useState('mehak');
  
    function change_num(){
      setnum(30);
    }
    function change_name(){
      setname('miku');
    }
  return (
    <div>
      <h1>value of num is {num}</h1>
      <h1>the name is {name}</h1>
      <button onClick={change_num}>Click</button>
      <button onClick={change_name}>click to change name </button>
    </div>
  )
}

export default State
