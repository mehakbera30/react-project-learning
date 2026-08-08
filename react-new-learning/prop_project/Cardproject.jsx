import React from 'react'
import './Cardproject.css';
import {Bookmark} from 'lucide-react'

const Cardproject = () => {
  return (
    <div className='parent'>
        <div className='projectcard'>

            <div className='top'>
               <img src='https://th.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=180&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' alt='amazon'></img>
               <button>Save me <Bookmark/></button>
            </div>

            <div className='center'>
             <h2>Amazon</h2>
             <h1>Senior UI/UX Designer</h1>
            </div>

            <div className='bottom'>
             <h3> $120</h3>
             <h3>Mumbai, Delhi</h3>
            </div>
        </div>
    </div>
  )
}

export default Cardproject
