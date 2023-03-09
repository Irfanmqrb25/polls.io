import React from 'react'
import Countdown from 'react-countdown';
import { TimerRenderer } from './TimerRenderer';

export const Timer = ({ start, end, currentState }) => {
    const timer = ({ days, hours, minutes, seconds }) => {
        return (
            <TimerRenderer days={days} hours={hours} minutes={minutes} seconds={seconds} />
        )
    }

    return (
        <div>
            {currentState === "STATE_LOADING" && <p className='text-center font-lato text-xl'>Wait a moment...</p>}
            {currentState === "STATE_NOT_STARTED" && (
                <div>
                    <p className='text-center'>Will start on :</p>
                    <Countdown date={start} renderer={timer} />
                </div>
            )}
            {currentState === "STATE_STARTED" && (
                <Countdown date={end} renderer={timer} />
            )}
            {currentState === "STATE_ENDED" && (
                <Countdown date={end} renderer={timer} />
            )}
        </div>
    )
}


