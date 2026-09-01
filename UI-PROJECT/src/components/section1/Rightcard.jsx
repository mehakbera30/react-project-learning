import React from 'react'

const Rightcard = () => {
  return (
    <div className = 'w-1/3 h-130 bg-red-200 rounded-3xl overflow-hidden relative'>
        <img className = 'h-130 w-full object-cover' src='https://img.freepik.com/premium-photo/headshot-photos-indian-women-dynamic-professions-occassions-indian-girl_978786-295.jpg?w=2000' alt='girl image' />
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

export default Rightcard

