import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { BsHeartFill } from 'react-icons/bs'
import { CgSun } from 'react-icons/cg'
import { FcMenu } from 'react-icons/fc'
import { MdFolderDelete, MdMenuBook } from 'react-icons/md'



const Header = ({ openModal, toggleTheme, theme, searchTerm, handleSearch }) => {
  return (
    <div className='flex flex-col md:flex-row justify-center pb- md:gap-6 items-center md:fixed top-0 md:bg-slate-400 w-full '>
      <div className="flex items-center gap-4">
        <MdMenuBook className='text-green-800 w-10 h-20 ' />

        <input type="input" className="w-[350px]  h-10 outline-none bg-slate-100 rounded-lg pl-2 "
          placeholder='Search'
          id="search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="flex justify-center items-center gap-4">
        <FcMenu className='h-6 w-6 text-blue-950 ' />
        <BsHeartFill className='h-6 w-6 text-orange-500 ' />
        <MdFolderDelete className='h-6 w-6 text-red-500 ' />
        <button onClick={toggleTheme} ><CgSun className={`'h-6' 'w-6' ${theme} ? 'text-white' : 'text-black' `} /></button>
      </div>
      <button onClick={openModal} className=' flex items-center p-1 gap-2 text-green-600 outline'><BiPlus />Add Book</button>
    </div>
  )
}

export default Header