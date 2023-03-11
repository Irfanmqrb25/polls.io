import React, { useState, useEffect } from 'react'
import { Timer } from '../Components/Timer';
import { useAuthContext } from '../hooks/useAuthContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useVote from '../hooks/useVote';
import moment from 'moment';
import { STATE_STARTED, STATE_ENDED, STATE_NOT_STARTED, STATE_LOADING } from '../utils/customState';
import { IoChevronBack } from 'react-icons/io5';
import { CiEdit } from 'react-icons/ci';
import { MdOutlineDelete } from 'react-icons/md';
import { AiOutlineStop } from 'react-icons/ai';

import { CandidateItemDetail } from '../Components/CandidateItemDetail';

export default function DetailPage() {
    const { user } = useAuthContext();
    const { code } = useParams();
    const { data, isLoading } = useVote(code, user);
    const [currentState, setCurrentState] = useState(STATE_LOADING);
    const [status, setStatus] = useState('Waiting');
    const navigate = useNavigate();


    useEffect(() => {
        if (data) {
            const vote = data.payload;
            if (currentState === STATE_ENDED) {
                return;
            }

            const start = moment(vote.startTime);
            const end = moment(vote.endTime);

            const interval = setInterval(async () => {
                const now = moment();
                if (now.isBefore(start)) {
                    setCurrentState(STATE_NOT_STARTED);
                    setStatus('Not Started')
                } else if (now.isAfter(start) && now.isBefore(end)) {
                    setCurrentState(STATE_STARTED);
                    setStatus('On Progress')
                } else if (now.isAfter(end)) {
                    setCurrentState(STATE_ENDED);
                    setStatus('Finished')
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [data, currentState])


    if (isLoading) {
        return <p>Loading...</p>;
    }


    return (
        <div className='flex flex-col px-10 py-3 w-full h-screen justify-between'>
            <div className='flex flex-col space-y-2'>
                <div className='flex items-center space-x-3'>
                    <span className='p-1 text-2xl rounded-full bg-[#DFC298]'><Link to={'/dashboard'}><IoChevronBack /></Link></span>
                    <div>
                        <h1 className='tracking-wider text-2xl font-lato font-semibold'>ROOM: {data.payload.code}</h1>
                    </div>
                </div>
                <p className={`ml-[45px] tracking-wider font-lato font-thin text-white first-letter text-center
                                    ${currentState === STATE_NOT_STARTED && 'bg-yellow-500 rounded-sm py-1 w-[170px]'}
                                    ${currentState === STATE_STARTED && 'bg-green-500 rounded-sm py-1 w-[170px]'}
                                    ${currentState === STATE_ENDED && 'bg-red-500 rounded-sm py-1 w-[140px]'}
                                `}
                >
                    Status : {status}
                </p>
            </div>
            <div className='flex flex-col mx-auto space-y-5 items-center'>
                <h1 className='text-3xl font-lato font-semibold tracking-wider'>{data.payload.title}</h1>
                <Timer
                    start={String(data.payload.startTime)}
                    end={String(data.payload.endTime)}
                    currentState={currentState}
                />
                <p className='text-center tracking-wider font-light pt-10 2xl:pt-5'>Choose one:</p>
                <div className='flex flex-col space-y-6'>
                    {data.payload.candidates.map((candidate, i) => (
                        <CandidateItemDetail
                            key={i}
                            name={candidate.name}
                            gotVotes={candidate.votes}
                            totalVotes={data?.payload?.totalVotes || 0}
                        />
                    ))}
                </div>
            </div>
            <div className='flex space-x-2 text-white pt-16 py-7 2xl:py-7'>
                <button className='flex items-center px-3 py-1 bg-green-600 rounded-sm space-x-1'>
                    <AiOutlineStop className='text-xl' />
                    <p>Close Vote</p>
                </button>
                <button className='flex items-center px-3 py-1 bg-yellow-500 rounded-sm space-x-1'>
                    <CiEdit className='text-xl' />
                    <p>Edit Vote</p>
                </button>
                <button className='flex items-center px-3 py-1 bg-red-600 rounded-sm'>
                    <MdOutlineDelete className='text-xl' />
                    <p>Delete Vote</p>
                </button>
            </div>
        </div>
    );
}
