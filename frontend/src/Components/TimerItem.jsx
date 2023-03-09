import React from 'react'

export const TimerItem = ({ label, value }) => {
    return (
        <div className='h-full w-20 flex flex-col items-center border-r-2 border-black'>
            <p className='py-3 text-4xl font-semibold w-full text-center border-b-2 border-black'>{value}</p>
            <p className='py-1 border-black font-light'>{label}</p>
        </div>
    )
}
