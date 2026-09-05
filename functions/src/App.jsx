import React from 'react'

const App = () => {

  function buttonclicked(){
    console.log("the button is clicked");
  }
  function mouse_enter(){
    console.log("the mouse is enter");
  }
  function input_changing(value){
    console.log(value);
  }
  return (
    // <div>
    //   <p>hi</p>
    //   <button onMouseEnter={mouse_enter} onDoubleClick={buttonclicked}>click me</button>
    // </div>

    <div>
      <input onChange = {function(elem){
        input_changing(elem.target.value);
      }} type='text' placeholder='name'></input>
    </div>
  )
}

export default App


// this is an arrow function //
// const add = (a, b) => {
//     return a + b;
// };


// const greet = () => {
//     console.log("Hello");
// };

// greet();
