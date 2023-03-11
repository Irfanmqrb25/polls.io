import React from 'react';
import { BsCheck2 } from 'react-icons/bs';

export const CandidateItemDetail = ({ name, gotVotes, totalVotes }) => {
    return (
        <div className='bg-[#DFC298] flex space-x-3 items-center py-3 px-7 w-[550px] rounded-sm'>
            <div className={`rounded-full p-3 text-4xl bg-zinc-200`}>
                <BsCheck2 />
            </div>
            <hr className='bg-black w-12 rotate-90' />
            <div className='flex flex-col -space-y-1'>
                <p className='text-2xl font-lato'>{name}</p>
                <p className='font-thin text-sm font-lato tracking-wider'>Votes: {gotVotes} votes of {totalVotes} votes</p>
            </div>
        </div>
    )
}
