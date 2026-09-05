import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  console.log(props);
  return (
    <div className = ' px-5  flex gap-10 items-center bg-white-200'>
      <Leftcontent />
      <Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1content
