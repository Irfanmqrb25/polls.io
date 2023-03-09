import React from 'react';
import { TimerItem } from './TimerItem';

export const TimerRenderer = ({ days, hours, minutes, seconds }) => {
    return (
        <div className='border-2 border-r-0 border-black flex'>
            <TimerItem label={"Days"} value={days} />
            <TimerItem label={"Hours"} value={hours} />
            <TimerItem label={"Minutes"} value={minutes} />
            <TimerItem label={"Seconds"} value={seconds} />
        </div>
    )
}
