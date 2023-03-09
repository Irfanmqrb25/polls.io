import React from 'react';
import Header from '../Components/Header';
import HeroSection from '../Section/HeroSection';
import FeaturesSection from '../Section/FeaturesSection';
import AboutSection from '../Section/AboutSection';
import ReviewSection from '../Section/ReviewSection';
import Footer from '../Components/Footer';


const LandingPage = () => {
    return (
        <div>
            <div className='bg-[#FBF8EE] px-32 py-2 flex flex-col items-center'>
                <Header />
            </div>
            <div className='bg-[#FBF8EE] px-32 py-10 flex flex-col'>
                <HeroSection />
            </div>
            <div className='bg-[#DFC298] px-40'>
                <FeaturesSection />
            </div>
            <div className='bg-[#FBF8EE] px-32 py-20 flex flex-col'>
                <AboutSection />
                <ReviewSection />
            </div>
            <div className='bg-[#C5AD8C] px-40 py-10'>
                <Footer />
            </div>
        </div>
    );
}

export default LandingPage;
