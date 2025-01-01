import React from 'react'

function Navbar() {
  return (
    <nav className="h-32 w-full flex items-center justify-between px-5 md:px-20 ">
    <div>
      <a href=""> <h1 className="text-white text-3xl md:text-5xl font-semibold">P<span className='text-red-600'>a</span>v<span className='text-red-600'>an</span></h1></a>
    </div>
    <div>
      <a href="https://drive.google.com/file/d/11OQhlrM0CHFrjKmhfWi_-j4o-ROXTdHn/view?usp=drive_link"><button className="text-white rounded-lg bg-red-500 text-sm md:text-xl py-2 px-3 hover:bg-zinc-900 hover:text-red-500">
        Resume. 
      </button></a>
    </div>
  </nav>
  )
}

export default Navbar