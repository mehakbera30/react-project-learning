import React, { useState } from 'react'

const Counter = () => {
    const [start,change] = useState(0);
    function increasing(){
        change(start+1);
    }
    function decreasing(){
        change(start-1);
    }
    
  return (
    <div>
      <h1>this is the counter machine</h1>
      <h1> the value is count {start}</h1>

      <button onClick={increasing}>the increament</button>
      <button onClick={decreasing}>the dereament</button>
    </div>
  );
};

export default Counter
