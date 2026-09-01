import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = () => {
  return (
    <div className = ' px-5  flex gap-10 items-center bg-white-200'>
      <Leftcontent />
      <Rightcontent />
    </div>
  )
}

export default Page1content
