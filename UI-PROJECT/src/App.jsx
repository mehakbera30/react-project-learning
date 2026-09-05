import React from 'react'
import Navbar from './components/section1/Navbar'
import Section1 from './components/section1/section1'

const users = [
  {img :'https://i.pinimg.com/736x/a9/3c/05/a93c0530952b90e37e0ecefec4799540.jpg',
   intro :'lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsa.',
   tag:'satisfied'
  },

  {img :'https://i.pinimg.com/736x/a9/3c/05/a93c0530952b90e37e0ecefec4799540.jpg',
   intro :'lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsa.  ',
   tag:'satisfied'
  },

  {img :'https://i.pinimg.com/736x/a9/3c/05/a93c0530952b90e37e0ecefec4799540.jpg',
   intro :'lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsa.',
   tag:'satisfied'
  },

  {img :'https://i.pinimg.com/736x/a9/3c/05/a93c0530952b90e37e0ecefec4799540.jpg',
   intro :'lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsa.',
   tag:'satisfied'
  },

]
const App = () => {
  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App