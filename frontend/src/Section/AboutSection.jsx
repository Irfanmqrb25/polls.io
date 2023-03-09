import React from 'react'
import aboutImage from '../Assets/about-image.svg'

export default function AboutSection() {
    return (
        <div id='about' className='flex flex-col items-center space-y-10'>
            <div className='flex flex-col items-center space-y-2' data-aos="zoom-in" data-aos-once="true">
                <h1 className='font-openSans font-semibold text-3xl'>If you're confused...</h1>
                <p className='font-light'>This application will make it easier for you to make a votes</p>
            </div>
            <div className='flex flex-col items-center space-y-7'>
                <img src={aboutImage} alt="" width={400} height={400} data-aos="zoom-in" data-aos-delay="300" data-aos-once="true" />
                <p className='font-openSans text-xl w-1/2 text-center'
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-once="true"
                >
                    Often times we do voting to choose something with a wide enough scope, but this is sometimes difficult to do.
                    But don't worry, here we made the polls.io application for all
                    of you to solve this problem and this application is also made free for the public.
                </p>
                <p className='font-openSans text-lg font-bold'
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-once="true"
                >
                    “Make your voting fast, simple and fair”
                </p>
            </div>
        </div>
    )
}
