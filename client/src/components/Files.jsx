import React from 'react'
import Upload from './upload'
import NavBar from './new_navbar'
import Navbar from './navbar'
function Files() {
  return (
<div className=" absolute overflow-auto dark:bg-dark-purple h-screen w-screen">
      <NavBar className='md:hidden'/>
      <div className="flex">
      <Navbar className=" absolute top-44 left-55 h-100vh shadow-white shadow-lg overflow-auto" style={{position: "shadow-lg"}} />
      <div className="p-1 md:p-8 md:mt-200px lg:p-12">

      </div>
      </div>
    </div> 
  )
}

export default Files