import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import { BsCalendar2Check, BsCalendar2X } from 'react-icons/bs';
import id from "date-fns/locale/id";
import { CandidateInput } from '../Components/CandidateInput';
import { RxPlus } from 'react-icons/rx';
// import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useAuthContext } from '../hooks/useAuthContext';
import { createVoteItem } from '../utils/fetcher';


registerLocale("id", id);

export const CreateVotePage = () => {
    const { user } = useAuthContext();
    const [title, setTitle] = useState("");
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [candidates, setCandidates] = useState([
        { key: 1, name: "" },
        { key: 2, name: "" },
    ]);
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)

    const submitCandidate = (candidate) => {
        setCandidates(
            candidates.map((c) => (c.key === candidate.key ? candidate : c))
        )
    }

    const addNewCandidate = () => {
        const newCandidate = {
            key: candidates.length + 1,
            name: "",
        };
        setCandidates([...candidates, newCandidate]);
    }

    const removeCandidate = (key) => {
        const newCandidates = candidates.filter(
            (candidate) => candidate.key !== key
        );
        newCandidates.forEach((candidate, i) => {
            candidate.key = i + 1;
        });
        setCandidates(newCandidates);
    };

    const createVote = async (e) => {
        e.preventDefault();
        //validation
        if (title === "") {
            return (
                MySwal.fire({
                    icon: 'error',
                    title: 'Create Vote Failed',
                    text: 'Title vote must be filled in!',
                    background: "#F9F5E7",
                    confirmButtonColor: "#473C33"
                })
            )
        }
        if (candidates.length < 2) {
            return (
                MySwal.fire({
                    icon: 'error',
                    title: 'Create Vote Failed',
                    text: 'Must have at least two candidates!',
                    background: "#F9F5E7",
                    confirmButtonColor: "#473C33"
                })
            )
        }
        if (startTime > endTime) {
            return (
                MySwal.fire({
                    icon: 'error',
                    title: 'Create Vote Failed',
                    text: 'Invalid start time please check it out!',
                    background: "#F9F5E7",
                    confirmButtonColor: "#473C33"
                })
            )
        }
        if (candidates.some((c) => c.name === "")) {
            return (
                MySwal.fire({
                    icon: 'error',
                    title: 'Create Vote Failed',
                    text: 'Candidates name must be filled in!',
                    background: "#F9F5E7",
                    confirmButtonColor: "#473C33"
                })
            )
        }
        createVoteItem(user, title, startTime, endTime, candidates);
        navigate('/dashboard')
        MySwal.fire({
            icon: 'success',
            title: 'Created Vote Successfully',
            showConfirmButton: false,
            timer: 1500,
            background: "#F9F5E7",
            confirmButtonColor: "#473C33"
        })
    }

    return (
        <div className='flex flex-col space-y-6 2xl:space-y-7 p-10'>
            <h1 className='font-semibold text-2xl font-lato tracking-wider'>Create New Vote</h1>

            <form className='flex flex-col space-y-10 2xl:w-[54%] w-[65%]' onSubmit={createVote}>
                <div className='flex flex-col space-y-2'>
                    <label className='font-inter text-lg tracking-wider'>Title Vote</label>
                    <input
                        type="text"
                        className='mr-7 px-1 py-2 focus:outline-none border-2 border-black rounded-md bg-[#DFC298] placeholder:text-black placeholder:font-light tracking-wider'
                        placeholder='ex: class president election'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='flex justify-between'>
                    <div className='space-y-2'>
                        <label className='font-inter text-lg tracking-wider'>Start Time</label>
                        <div className='flex w-[350px] cursor-pointer rounded-md border-2 border-black items-center bg-[#DFC298] p-2'>
                            <ReactDatePicker
                                className='bg-transparent cursor-pointer focus:outline-none tracking-wider w-[80%] placeholder:font-light placeholder:text-black'
                                dateFormat={"Pp"}
                                minDate={new Date()}
                                locale={"id"}
                                showTimeSelect
                                selected={startTime}
                                onChange={(date) => date && setStartTime(date)}
                                placeholderText='Select Start Date and Time'
                            />
                            <BsCalendar2Check className='text-2xl' />
                        </div>
                    </div>
                    <div className='space-y-2 pr-7'>
                        <label className='font-inter text-lg tracking-wider'>Ended Time</label>
                        <div className='flex w-[350px] cursor-pointer rounded-md border-2 border-black items-center bg-[#DFC298] p-2'>
                            <ReactDatePicker
                                className='bg-transparent cursor-pointer focus:outline-none tracking-wider w-[80%] placeholder:font-light placeholder:text-black'
                                dateFormat={"Pp"}
                                minDate={startTime}
                                locale={"id"}
                                showTimeSelect
                                selected={endTime}
                                onChange={(date) => date && setEndTime(date)}
                                placeholderText='Select Ended Date and Time'
                            />
                            <BsCalendar2X className='text-2xl' />
                        </div>
                    </div>
                </div>
                <div className='space-y-3'>
                    <div className='flex justify-between items-center'>
                        <label className='font-inter text-lg tracking-wider'>Candidates Name</label>
                        <span
                            className='text-2xl text-white bg-[#7C5026] p-1 cursor-pointer rounded-sm mr-7'
                            onClick={addNewCandidate}
                        >
                            <RxPlus />
                        </span>
                    </div>
                    <div className='flex justify-between flex-wrap gap-4'>
                        {candidates.map((candidate, i) => (
                            <CandidateInput key={i} submitCandidate={submitCandidate} removeCandidate={removeCandidate} candidate={candidate} />
                        ))}
                    </div>
                </div>
                <button className='bg-[#7C5026] p-2 rounded-md w-1/6 text-white font-lato self-end mr-7' type='submit'>Create</button>
            </form>
        </div>
    )
}
