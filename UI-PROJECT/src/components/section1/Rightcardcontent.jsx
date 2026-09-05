import React from 'react'

const Rightcardcontent = () => {
  return (
    <div>
       <div className='absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between'>
            <h1 className='h-10 w-10 font-bold text-2xl rounded-full bg-white flex justify-center items-center'>1</h1>
            <div>
                <p className='text-lg leading-5 text-white mb-10 '>lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiaelpa.</p>
            <div><button className='bg-blue-500 text-white px-4 py-2 rounded-full'>Satisfied</button>
            <button className='bg-gray-300 text-gray-700 px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Rightcardcontent
