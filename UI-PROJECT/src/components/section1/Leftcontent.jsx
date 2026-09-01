import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Arrow from './Arrow'
import Herotext from './Herotext'
 
const Leftcontent = () => {
  return (
  <div className = 'w-1/4 h-130 bg-white-400 flex flex-col justify-between mg-4'>
    <Herotext/>
    <Arrow/>
  </div>
  )
}

export default Leftcontent
