import React from 'react'
import fastIcon from "../Assets/fast-icon.png"
import simpleIcon from "../Assets/simple-icon.png"
import modernIcon from "../Assets/modern-icon.png"

export default function FeaturesSection() {
    return (
        <div id='feature' className='flex flex-col items-center space-y-20 p-20'>
            <h1 className='text-white font-openSans text-3xl font-semibold'>WHY POLLS.IO?</h1>
            <div className='flex space-x-10 pb-10'>
                <div className='shadow-card-features flex flex-col items-center space-y-3 bg-[#7C5026] p-3 rounded-md'
                    data-aos="fade-down-right"
                    data-aos-once="true"
                >
                    <img src={fastIcon} alt="" width={80} height={80} />
                    <h5 className='text-white text-2xl font-openSans'>Fast</h5>
                    <p className='text-white font-light w-3/4 text-center'>This web application is designed in such a way as to run quickly.</p>
                </div>
                <div className='shadow-card-features flex flex-col items-center space-y-3 bg-[#7C5026] p-3 rounded-md'
                    data-aos="fade-down-right"
                    data-aos-delay="500"
                    data-aos-once="true"
                >
                    <img src={simpleIcon} alt="" width={80} height={80} />
                    <h5 className='text-white text-2xl font-openSans'>Simple</h5>
                    <p className='text-white font-light w-3/4 text-center'>Don't worry about how to use it, of course we make it easy to use.</p>
                </div>
                <div className='shadow-card-features flex flex-col items-center space-y-3 bg-[#7C5026] p-3 rounded-md'
                    data-aos="fade-down-right"
                    data-aos-delay="1000"
                    data-aos-once="true"
                >
                    <img src={modernIcon} alt="" width={80} height={80} />
                    <h5 className='text-white text-2xl font-openSans'>Modern</h5>
                    <p className='text-white font-light w-3/4 text-center'>This web application is designed in such a way as to run quickly</p>
                </div>
            </div>
        </div>
    )
}
