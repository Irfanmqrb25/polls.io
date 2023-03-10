import React from 'react';
import { BsCheck2 } from 'react-icons/bs';

export const CandidateItem = ({ name, gotVotes, isSelected, onClick }) => {
    return (
        <div className='bg-[#DFC298] flex space-x-3 items-center py-3 px-7 w-[550px] rounded-sm'>
            <div onClick={onClick} className={`cursor-pointer rounded-full p-3 text-4xl ${isSelected ? 'bg-green-600 text-white' : 'bg-zinc-200 hover:bg-green-600 hover:text-white'}`}>
                <BsCheck2 />
            </div>
            <hr className='bg-black w-12 rotate-90' />
            <div className='flex flex-col -space-y-1'>
                <p className='text-2xl font-lato'>{name}</p>
                <p className='font-thin text-sm font-lato tracking-wider'>Votes: {gotVotes} Votes</p>
            </div>
        </div>
    )
}
