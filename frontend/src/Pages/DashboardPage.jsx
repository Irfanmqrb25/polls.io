import React, { useState, useEffect } from 'react';
import SideBar from '../Components/SideBar';
import { SearchBar } from '../Components/SearchBar';
import { CardTotalVotes } from '../Components/CardTotalVotes';
import { CardWeather } from '../Components/CardWeather';
import { BiAddToQueue } from 'react-icons/bi';
import { VoteItem } from '../Components/VoteItem';
import { useAuthContext } from '../hooks/useAuthContext';
import { Link } from 'react-router-dom';
import { getAllVotes } from '../utils/fetcher';
import { ToastContainer } from 'react-toastify';

const DashboardPage = () => {
    const [votes, setVotes] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        if (user) {
            getAllVotes(user).then(({ data }) => {
                setVotes(data)
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='flex bg-[#FBF8EE]'>
            <SideBar />
            <div className='flex flex-col p-5 space-y-10 h-screen overflow-y-scroll custom-scrollbar'>
                <div className='flex flex-col space-y-5'>
                    <h1 className='font-semibold text-2xl font-lato tracking-wider'>Dashboard</h1>
                    <SearchBar />
                    <div className='flex space-x-5'>
                        <CardTotalVotes votes={votes.length} />
                        <CardWeather />
                    </div>
                </div>
                <div className='flex flex-col space-y-6'>
                    <div className='flex space-x-10 items-center justify-between'>
                        <p className='font-lato text-2xl tracking-wider'>Latest Votes</p>
                        <Link to={"/create-vote"} className='shadow-create-btn flex space-x-2 p-2 border-2 border-black bg-[#DFC298] items-center rounded-lg cursor-pointer hover:bg-[#dfbb85]'>
                            <span className='text-2xl'><BiAddToQueue /></span>
                            <p className='font-lato font-light'>Create New Vote</p>
                        </Link>
                    </div>
                    <div className='space-y-6'>
                        {votes && votes.length > 0 ? votes.slice(0).reverse().map((vote, i) => (
                            <VoteItem id={vote.code} key={i} code={vote.code} title={vote.title} candidates={vote.candidates.map((c, i) => (
                                c.name + (i < vote.candidates.length - 1 ? ", " : ".")
                            ))} />
                        )) : "not found"}
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    );
}

export default DashboardPage;
