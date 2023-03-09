import React from 'react'
import { BsCloudHaze } from 'react-icons/bs';

export const CardWeather = () => {
    return (
        <div className='card-weather flex flex-col space-y-3 p-3 rounded-lg text-white w-[300px]'>
            <p className='text-lg font-light'>WEATHER</p>
            <span className='mx-auto text-8xl'><BsCloudHaze /></span>
            <div className='flex items-center space-x-5 mx-auto'>
                <h5 className='font-semibold text-4xl tracking-wider'>25&deg;C</h5>
                <div className='flex flex-col tracking-wider'>
                    <p>CLOUDY</p>
                    <p className='font-thin text-xs'>Jakarta, Indonesia</p>
                </div>
            </div>
        </div>
    )
}
