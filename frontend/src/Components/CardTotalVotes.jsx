import React from 'react';
import { MdOutlineHowToVote } from 'react-icons/md';

export const CardTotalVotes = ({ votes }) => {
    return (
        <div className='card-votes flex flex-col space-y-3 p-3 rounded-lg text-white w-[300px]'>
            <p className='text-lg font-light'>VOTES</p>
            <span className='mx-auto text-8xl'><MdOutlineHowToVote /></span>
            <div className='flex mx-auto items-center space-x-2'>
                <p className='font-light tracking-wider'>You have</p>
                <h5 className='text-2xl font-semibold'>{votes} votes</h5>
            </div>
        </div>
    )
}
