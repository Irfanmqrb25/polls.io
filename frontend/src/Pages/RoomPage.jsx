import React, { useState, useEffect } from 'react'
import { CandidateItem } from '../Components/CandidateItem';
import { Timer } from '../Components/Timer';
import { useAuthContext } from '../hooks/useAuthContext';
import { useParams } from 'react-router-dom';
import useVote from '../lib/useVote';
import moment from 'moment';
import { STATE_STARTED, STATE_ENDED, STATE_NOT_STARTED, STATE_LOADING } from '../utils/customState';

export default function RoomPage() {
    const { user } = useAuthContext();
    const { code } = useParams();
    const { data, isLoading } = useVote(code, user);
    const [currentState, setCurrentState] = useState(STATE_LOADING);
    const [status, setStatus] = useState('Waiting')

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
    }, [data])

    if (isLoading) {
        return <p>Loading...</p>;
    }


    return (
        <div className='flex flex-col px-10 py-3 w-full space-y-10 2xl:space-y-7'>
            <div>
                <h1 className='tracking-wider text-2xl font-lato font-semibold'>ROOM: {data.payload.code}</h1>
                <p className={`tracking-wider font-lato font-thin text-white first-letter text-center
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
                    <CandidateItem />
                    <CandidateItem />
                    <CandidateItem />
                </div>
                <button className='bg-[#C5AD8C] px-3 py-1 rounded-sm'>Submit Vote</button>
            </div>
        </div>
    );
}
