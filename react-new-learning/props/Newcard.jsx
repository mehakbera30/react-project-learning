// import React from 'react'

// const Newcard = (props) => {
//     console.log(props.name,props.age)
//   return (
//     <div className='parent'>
//     <div className='card'>
//         {/* <img src="https://th.bing.com/th/id/OIP.78YCT-D79ggzL5fyEXdp7wHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="pikachu"></img> */}
//         <img src={props.img} alt='image'></img>
//         <h1>{props.name},{props.age}</h1>
//         <p>hi i m available here, free to go</p>
//         <button>click me</button>
//       </div>
//     </div>
//   )
// }

// export default Newcard;

// use of map in react js.
// Create a function → tell the function what to do → give that function to map() → map() applies it to every element → returns a new array.
// const arr = [10, 20, 30, 40];
// function double(elem) {
//     return elem * 2;
// }
// const result = arr.map(double);


// Props = a way for a parent component to send data to a child component.
//props : its is like a function in which we pass the pass to props
// the transfer of data is only possible from main to components not <vice-versa>
// in app we pass the value to props and in component the value is obtain
// for example :-
//  <div className='parent'>
//         {/* <Newcard/>
//         <Newcard/>
//         <Newcard/> */}
//         <Newcard name="mehak" age={18} img={pika}/>
//         <Newcard name="salani" age={21} img={spider}/>
//     </div>

//  <div className='parent'>
//     <div className='card'>
//         {/* <img src="https://th.bing.com/th/id/OIP.78YCT-D79ggzL5fyEXdp7wHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="pikachu"></img> */}
//         <img src={props.img} alt='image'></img>
//         <h1>{props.name},{props.age}</h1>
//         <p>hi i m available here, free to go</p>
//         <button>click me</button>
//       </div>
//     </div>
