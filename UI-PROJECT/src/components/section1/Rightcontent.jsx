import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = () => {
  return (
    <div className = 'w-2/3 p-4 h-140 bg-white-200 flex no-wrap gap-9'>
      {props.users.map(function(elem){
        return <Rightcard img= {elem.img}></Rightcard>
      })}
    </div>
  )
}

export default Rightcontent
