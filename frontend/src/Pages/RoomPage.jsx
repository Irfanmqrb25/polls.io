import React, { useState, useEffect } from 'react'
import { IoCopyOutline } from 'react-icons/io5';
import { CandidateItem } from '../Components/CandidateItem';
import { Timer } from '../Components/Timer';
import { useAuthContext } from '../hooks/useAuthContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useVote from '../hooks/useVote';
import moment from 'moment';
import { STATE_STARTED, STATE_ENDED, STATE_NOT_STARTED, STATE_LOADING } from '../utils/customState';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { createParticipantsByCode } from '../utils/fetcher';
import useParticipant from '../hooks/useParticipants';
import jwtDecode from 'jwt-decode';

export default function RoomPage() {
    const { user } = useAuthContext();
    const { code } = useParams();
    const { data, isLoading, mutate: mutateVoteApi } = useVote(code, user);
    const { data: dataParticipantApi, mutate: mutateParticipantApi } = useParticipant(code, user);
    const [currentState, setCurrentState] = useState(STATE_LOADING);
    const [status, setStatus] = useState('Waiting');
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const MySwal = withReactContent(Swal);
    const decoded = jwtDecode(user);
    const navigate = useNavigate();

    const submitVote = async () => {
        if (!selectedCandidate) {
            return (
                MySwal.fire({
                    icon: 'error',
                    title: 'failed Submit Vote',
                    text: 'Please choose one candidate',
                    background: "#F9F5E7",
                    confirmButtonColor: "#473C33"
                })
            )
        }
        createParticipantsByCode(data.payload.code, user, selectedCandidate.name).then(() => {
            mutateVoteApi();
            mutateParticipantApi();
            // navigate('/dashboard')
            MySwal.fire({
                icon: 'success',
                title: 'sucessful Submit Vote',
                text: 'Thanks you for participating 👍🏼',
                background: "#F9F5E7",
                confirmButtonColor: "#473C33"
            })
        })
    }

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

    useEffect(() => {
        if (dataParticipantApi && data) {
            const candidate = data?.payload?.candidates?.find((candidate) => candidate.name === dataParticipantApi?.payload?.candidate);
            if (candidate) {
                setSelectedCandidate(candidate);
            }
        }
    }, [dataParticipantApi, data])

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
                    {data.payload.candidates.map((candidate, i) => (
                        <CandidateItem
                            key={i}
                            isSelected={selectedCandidate?.name === candidate.name}
                            name={candidate.name}
                            gotVotes={candidate.votes}
                            totalVotes={data?.payload?.totalVotes || 0}
                            onClick={() => {
                                if (decoded.name === data?.payload?.publisher) {
                                    MySwal.fire({
                                        icon: 'error',
                                        title: 'failed',
                                        text: "Publisher can't vote",
                                        background: "#F9F5E7",
                                        confirmButtonColor: "#473C33"
                                    })
                                    return;
                                }
                                !dataParticipantApi.payload && currentState === STATE_STARTED && setSelectedCandidate(candidate)
                            }}
                        />
                    ))}
                </div>
                {decoded.name !== data?.payload?.publisher && currentState === STATE_STARTED && !dataParticipantApi?.payload && (
                    <button onClick={() => submitVote()} className='bg-[#C5AD8C] hover:bg-[#cbaa7c] px-3 py-1 rounded-sm'>Submit Vote</button>
                )}
                {decoded.name === data?.payload?.publisher && (
                    <div className='flex flex-col items-center space-y-6'>
                        <div className='space-y-2'>
                            <p className='text-xl bg-slate-300 rounded-sm px-2'>You are a publisher</p>
                            <p className='flex rounded-sm text-white justify-center items-center text-lg space-x-2 bg-slate-600'>
                                <IoCopyOutline />
                                <span>{data?.payload?.code}</span>
                            </p>
                        </div>
                        <p><Link className='bg-[#C5AD8C] hover:bg-[#cbaa7c] rounded-sm text-lg px-4 py-1' to={'/dashboard'}>Back</Link></p>
                    </div>
                )}
                {dataParticipantApi?.payload && (
                    <div className='space-y-6 flex flex-col items-center'>
                        <p className='text-xl bg-yellow-500 rounded-sm py-1 px-2'>Thank you for selecting the candidate</p>
                        <p><Link className='bg-[#C5AD8C] hover:bg-[#cbaa7c] rounded-sm text-lg px-4 py-1' to={'/dashboard'}>Back</Link></p>
                    </div>
                )}
            </div>
        </div>
    );
}
