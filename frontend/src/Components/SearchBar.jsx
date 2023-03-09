import React from 'react'
import { TbSearch } from 'react-icons/tb'

export const SearchBar = () => {
    return (
        <div className='flex items-center space-x-2 bg-[#928979] pr-2 rounded-2xl'>
            <span className='bg-[#473C33] py-2 px-3 rounded-xl text-white text-2xl'><TbSearch /></span>
            <input type="text" placeholder='Search' className='focus:outline-none bg-transparent placeholder:text-white placeholder:opacity-90 text-white min-w-[400px]' />
        </div>
    )
}
