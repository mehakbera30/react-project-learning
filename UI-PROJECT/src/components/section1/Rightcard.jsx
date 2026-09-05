import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = () => {
  return (
    <div className = 'w-1/3 h-130 bg-white rounded-3xl overflow-hidden relative shrink-0'>
        <img className = 'h-130 w-full object-cover' src='https://img.freepik.com/premium-photo/headshot-photos-indian-women-dynamic-professions-occassions-indian-girl_978786-295.jpg?w=2000' alt='girl image' />
        <Rightcardcontent/>
    </div>
  )
}

export default Rightcard

