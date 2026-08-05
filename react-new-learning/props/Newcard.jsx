import React from 'react'
import "./Newcard.css";

const Newcard = (props) => {
    console.log(props.name,props.age)
  return (
    <div className='parent'>
    <div className='card'>
        {/* <img src="https://th.bing.com/th/id/OIP.78YCT-D79ggzL5fyEXdp7wHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="pikachu"></img> */}
        <img src={props.img} alt='image'></img>
        <h1>{props.name},{props.age}</h1>
        <p>hi i m available here, free to go</p>
        <button>click me</button>
      </div>
    </div>
  )
}

export default Newcard;
