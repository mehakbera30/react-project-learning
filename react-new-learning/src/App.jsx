import React, { Fragment } from 'react'
import { use } from 'react'
import "./App.css";
import Newcard from '../props/Newcard';
import Cardproject from '../prop_project/Cardproject';
// import spider from './assets/spider.png'
// import pika from './assets/pika.png'

const App = () => {
  return (
    <div className='parent'>
        <Cardproject/>
    </div>
  )
}

export default App


// how to create vite cmd = npm run vite

// rafce is the react arrow function, in this we create a function and we can only return only one thing not
// multiple things

// {/* <> </> these are the empty Fragment in the react which is use to return the multiple things, we can either use
// one div as the parent and the other function inside the two child div  */}
 
// with parent and multiple child
// return (
//     <div id="grandfather">
//       i m u r grandfather
//       <div id = "father"> i m u r father </div>
//       <div id="uncle"> i m u r uncle</div>
//     </div>
//   )

// with Fragment (empty tag) and multiple child
// import React, { Fragment } from 'react'
// import { use } from 'react'

// const App = () => {
//   return (
//     <>
//       i m u r grandfather
//       <div id = "father"> i m u r father </div>
//       <div id="uncle"> i m u r uncle</div>
//     </>
//   )
// }

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

