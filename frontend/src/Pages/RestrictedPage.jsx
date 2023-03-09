import React from 'react';
import Lottie from "lottie-react";
import restrictedAnimate from '../Assets/animations/restricted-animation.json';
import { Link } from 'react-router-dom';

export const RestrictedPage = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-full mt-40 2xl:mt-24 -space-y-20'>
            <div className='w-[40%] flex flex-col items-center -space-y-32'>
                <h1 className='text-3xl tracking-wider font-lato text-red-500 font-semibold z-10'>Restricted Page!</h1>
                <Lottie animationData={restrictedAnimate} />
            </div>
            <div className='flex flex-col items-center space-y-2'>
                <p className='text-xl font-lato tracking-wider z-10'>You must login first to access this page!</p>
                <Link to={'/auth/login'} className='bg-[#DFC298] py-2 px-4 tracking-wider rounded-sm cursor-pointer z-10'>Login</Link>
            </div>
        </div>
    )
}
