import React, { useState } from 'react';
import { SideBar } from '../Components/SideBar';
import RoomImg from '../Assets/hero-image.svg';
import { HiOutlineKey } from 'react-icons/hi';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { getVoteByCode } from '../utils/fetcher';

export const JoinRoomPage = () => {
    const { user } = useAuthContext();
    const [code, setCode] = useState("");
    const navigate = useNavigate();

    const submitCode = async () => {
        if (code === "") {
            toast.error("Please enter a code");
            return;
        }
        try {
            await getVoteByCode(code, user);
            navigate(`/room/${code}`);
        } catch (err) {
            toast.error("Invalid code");
        }
    }


    return (
        <div className='flex'>
            <SideBar />
            <div className='flex flex-col m-auto items-center space-y-5'>
                <h1 className='text-2xl font-lato tracking-wider font-semibold'>Join Room</h1>
                <img src={RoomImg} alt="join-room" width={400} />
                <p className='tracking-wider font-lato text-lg'>Enter your room code to give your vote!</p>
                <div className='flex flex-col space-y-2 items-center'>
                    <p className='font-lato font-light'>Your Code:</p>
                    <div className='flex space-x-2 items-center bg-[#DFC298] p-2 rounded-sm border-2 border-black'>
                        <HiOutlineKey className='text-xl' />
                        <input
                            type="text"
                            placeholder='Enter Your Room Code'
                            className='bg-transparent focus:outline-none placeholder:text-black placeholder:font-light tracking-wider w-[300px]'
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                    </div>
                    <button
                        type='submit'
                        className='p-2 bg-[#7C5026] w-full rounded-sm text-white font-lato'
                        onClick={submitCode}
                    >
                        Join Room
                    </button>
                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    )
}
