import React, { useEffect, useState } from 'react';
import { HiXCircle } from 'react-icons/hi';
import { GrUser } from 'react-icons/gr';

export const CandidateInput = ({ candidate: propCandidate, submitCandidate, removeCandidate }) => {
    const [candidate, setCandiate] = useState({
        key: 0,
        name: "",
    })

    useEffect(() => {
        setCandiate(propCandidate)
    }, [propCandidate])

    useEffect(() => {
        submitCandidate(candidate)
        // eslint-disable-next-line
    }, [candidate])

    const handleInputChange = (event) => {
        setCandiate({ ...candidate, name: event.target.value })
    }

    return (
        <div className='flex space-x-1'>
            <div className='flex w-[350px] justify-between rounded-md border-2 items-center border-black bg-[#DFC298] pl-2'>
                <div className='flex space-x-2 items-center'>
                    <GrUser className='text-xl' />
                    <input
                        type="text"
                        className='w-[260px] focus:outline-none rounded-md bg-transparent placeholder:text-black placeholder:font-light tracking-wider'
                        placeholder='ex: john doe'
                        value={candidate.name}
                        onChange={handleInputChange}
                    />
                </div>
                <p className='bg-[#C5AD8C] py-2 px-4 rounded-tr-md rounded-br-md'>{candidate.key}</p>
            </div>
            <HiXCircle
                className='self-end text-2xl my-auto cursor-pointer'
                onClick={() => removeCandidate(candidate.key)}
            />
        </div>
    )
}
