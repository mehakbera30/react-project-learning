import React from 'react'

const App = () => {
  const submithandler = (e) =>{
    e.preventDefault();
    console.log("form is submitted");
  } 
  return (
    <div>
      <form onSubmit={(e) => {
        submithandler(e);
      }}>
        <input type="text" placeholder='Enter your name'></input>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
