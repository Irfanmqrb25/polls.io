import React from 'react'
import HeroImage from '../Assets/hero-image.svg'
import scrollArrow from '../Assets/scroll.svg'

export default function HeroSection() {
    return (
        <div id='home' className='mt-24 flex flex-col space-y-5 mb-6 2xl:mb-14'>
            <div className='flex justify-end font-openSans text-lg'>
                <p data-aos="flip-up" data-aos-duration="2000"
                    data-aos-delay="2000">Do it<br /><strong>Professionally.</strong></p>
            </div>
            <div className='flex justify-between items-center'
                data-aos="fade-right"
                data-aos-delay="1000"
            >
                <div className='space-y-10'>
                    <h1 className='font-openSans text-6xl font-extrabold'>Makes your<br />votes<br />in polls.io</h1>
                    <button className='px-7 py-2 rounded-sm cursor-pointer font-poppins ease-out duration-200 shadow-button bg-[#A0744A] text-white hover:bg-[#7C5026]'
                        data-aos="flip-up"
                        data-aos-duration="1500"
                        data-aos-delay="1300"
                    >
                        Try it now
                    </button>
                    <p className='font-poppins font-light'>Make your selection easier and fair with this application.</p>
                </div>
                <div>
                    <img src={HeroImage} alt="Hero Img" data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-delay="1500" />
                </div>
            </div>
            <img src={scrollArrow} alt="Scroll" width={40} height={40} className='mx-auto animate-bounce' />
        </div>
    )
}
