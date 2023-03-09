import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import stars from "../Assets/stars-icon.svg";
import kevinUser from "../Assets/kevin-user.svg";
import alexaUser from "../Assets/alexa-user.svg";
import johnUser from "../Assets/john-user.svg";

export default function CardSwiperReview() {
    const swiperRef = useRef(null);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <div className="mb-10 px-20 "
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-delay="500"
            data-aos-once="true"
        >
            <Swiper ref={swiperRef}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 30
                    }
                }}
                modules={[Pagination, Autoplay]}
                className="space-y-2"
            >
                <SwiperSlide className="bg-[#473C33] px-5 py-7 space-y-10 rounded-md shadow-card-review">
                    <div className='flex flex-col items-center space-y-3'>
                        <img src={kevinUser} alt="" />
                        <p className='text-white text-xl font-openSans'>Kevin Lurry</p>
                        <img src={stars} alt="" width={150} height={150} />
                        <p className='text-white w-2/3 text-center font-thin'>Very good application. It's easier for me to making a vote.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-[#6B6C70] px-5 py-7 space-y-10 rounded-md shadow-card-review">
                    <div className='flex flex-col items-center space-y-3'>
                        <img src={alexaUser} alt="" />
                        <p className='text-white text-xl font-openSans'>Alexa Becca</p>
                        <img src={stars} alt="" width={150} height={150} />
                        <p className='text-white w-2/3 text-center font-thin'>Very good app and nice job for the team making this app. clap!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-[#473C33] px-5 py-7 space-y-10 rounded-md shadow-card-review">
                    <div className='flex flex-col items-center space-y-3'>
                        <img src={johnUser} alt="" />
                        <p className='text-white text-xl font-openSans'>John Philips</p>
                        <img src={stars} alt="" width={150} height={150} />
                        <p className='text-white w-2/3 text-center font-thin'>With this web app I'm very helpful in making elections. Nice idea!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-[#473C33] px-5 py-7 space-y-10 rounded-md shadow-card-review">
                    <div className='flex flex-col items-center space-y-3'>
                        <img src={kevinUser} alt="" />
                        <p className='text-white text-xl font-openSans'>Kevin Lurry</p>
                        <img src={stars} alt="" width={150} height={150} />
                        <p className='text-white w-2/3 text-center font-thin'>Very good application. It's easier for me to making a vote.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-[#6B6C70] px-5 py-7 space-y-10 rounded-md shadow-card-review">
                    <div className='flex flex-col items-center space-y-3'>
                        <img src={alexaUser} alt="" />
                        <p className='text-white text-xl font-openSans'>Alexa Becca</p>
                        <img src={stars} alt="" width={150} height={150} />
                        <p className='text-white w-2/3 text-center font-thin'>Very good app and nice job for the team making this app. clap!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-[#473C33] px-5 py-7 space-y-10 rounded-md shadow-card-review">
                    <div className='flex flex-col items-center space-y-3'>
                        <img src={johnUser} alt="" />
                        <p className='text-white text-xl font-openSans'>John Philips</p>
                        <img src={stars} alt="" width={150} height={150} />
                        <p className='text-white w-2/3 text-center font-thin'>With this web app I'm very helpful in making elections. Nice idea!</p>
                    </div>
                </SwiperSlide>
                <div className="hidden sm:flex space-x-2 justify-end p-1">
                    <span className="cursor-pointer hover:scale-110 ease-in-out duration-300 z-10" onClick={goPrev}><BsArrowLeft className="text-2xl text-slate-500 hover:text-slate-700 cursor-pointer" /></span>
                    <span className="cursor-pointer hover:scale-110 ease-in-out duration-300 z-10" onClick={goNext}><BsArrowRight className="text-2xl text-slate-500 hover:text-slate-700 cursor-pointer" /></span>
                </div>
            </Swiper>
        </div >
    )
}
