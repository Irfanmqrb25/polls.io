import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrow90DegRight } from 'react-icons/bs';
import { HiOutlineKey } from 'react-icons/hi';

export const VoteItem = ({ code, title, candidates, id }) => {
    return (
        <div className='shadow-vote-item w-full flex rounded-xl border-2 border-black bg-[#DFC298] justify-between items-center'>
            <div className='flex flex-col'>
                <div className='px-3 text-white py-2 border-b-2 border-r-2 border-black bg-[#928979] font-lato font-semibold flex items-center rounded-br-xl rounded-tl-xl space-x-1'>
                    <span className='text-xl'><HiOutlineKey /></span>
                    <p className='text-sm tracking-widest'>Code: {code}</p>
                </div>
                <div className='flex flex-col px-3 py-2'>
                    <h5 className='font-semibold text-lg tracking-wider'>{title}</h5>
                    <p className='text-[#6B6C70] tracking-wider'>Candidates : {candidates}</p>
                </div>
            </div>
            <Link to={`/vote/${id}`} className='text-2xl pr-10'><BsArrow90DegRight /></Link>
        </div>
    )
}
