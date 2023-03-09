import React from 'react'
import CardSwiperReview from '../Components/CardSwiperReview'

export default function ReviewSection() {
    return (
        <div id='review' className='flex flex-col py-7 mt-32 space-y-32'>
            <div className='flex flex-col space-y-10'>
                <h1 className='font-openSans text-3xl mx-auto' data-aos="fade-down" data-aos-duration="1300" data-aos-once="true">Our Rating</h1>
                <div className='flex items-center justify-evenly'>
                    <div className='shadow-rating flex flex-col items-center rounded-[50%] bg-[#DFC298] space-y-2 p-10'
                        data-aos="flip-left"
                        data-aos-delay="200"
                        data-aos-duration="1300"
                        data-aos-once="true"
                    >
                        <h5 className='font-bold text-3xl font-openSans'>1.2m+</h5>
                        <p className='text-2xl font-thin'>Users</p>
                    </div>
                    <div className='shadow-rating flex flex-col items-center rounded-[50%] bg-[#DFC298] space-y-2 p-10'
                        data-aos="flip-left"
                        data-aos-delay="400"
                        data-aos-duration="1300"
                        data-aos-once="true"
                    >
                        <h5 className='font-bold text-3xl font-openSans'>#1</h5>
                        <p className='text-2xl font-thin'>Populer</p>
                    </div>
                    <div className='shadow-rating flex flex-col items-center rounded-[50%] bg-[#DFC298] space-y-2 p-10'
                        data-aos="flip-left"
                        data-aos-delay="600"
                        data-aos-duration="1300"
                        data-aos-once="true"
                    >
                        <h5 className='font-bold text-3xl font-openSans'>99%</h5>
                        <p className='text-2xl font-thin'>Satisfied</p>
                    </div>
                </div>
            </div>
            <div className='space-y-10 flex flex-col p'>
                <h1 className='font-openSans text-3xl mx-auto'
                    data-aos="fade-down"
                    data-aos-duration="1100"
                    data-aos-once="true"
                >
                    Users Review
                </h1>
                <CardSwiperReview />
            </div>
        </div >
    )
}
