import React,{ useState } from 'react'

const App = () => {
  const [name , setname] = useState({user:'mehak', age:29});

  const buttonclicked = ()=>{
     const newName = {...name};
     newName.user = 'miku';
     newName.age = 27;
     setname(newName);
  }
  return (
    <div>
      <h1>the name of the student is {name.user} and the age of the person is {name.age}</h1>
      <button onClick={buttonclicked}>click me</button>
    </div>
  )
}

export default App
