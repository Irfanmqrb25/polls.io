import React from 'react'
import brandLogo from "../Assets/brand-logo-footer.svg"
import facebookIcon from "../Assets/facebook-icon.svg"
import twitterIcon from "../Assets/twitter-icon.svg"
import instagramIcon from "../Assets/instagram-icon.svg"
import youtubeIcon from "../Assets/youtube-icon.svg"

export default function Footer() {
    return (
        <footer className='flex justify-between text-white'>
            <div className='my-auto'>
                <img src={brandLogo} alt="" className='cursor-pointer' />
            </div>
            <div className='space-y-3 font-poppins'>
                <h5 className='text-lg'>About Polls.io</h5>
                <ul className='space-y-2 font-light'>
                    <li className='hover:scale-105 ease-in-out duration-75 cursor-pointer'>Home</li>
                    <li className='hover:scale-105 ease-in-out duration-75 cursor-pointer'>Get Started</li>
                    <li className='hover:scale-105 ease-in-out duration-75 cursor-pointer'>FAQs</li>
                </ul>
            </div>
            <div className='space-y-3 font-poppins'>
                <h5 className='text-lg'>Products</h5>
                <ul className='space-y-2 font-light'>
                    <li className='hover:scale-105 ease-in-out duration-75 cursor-pointer'>Testimonials</li>
                    <li className='hover:scale-105 ease-in-out duration-75 cursor-pointer'>Features</li>
                </ul>
            </div>
            <div className='space-y-3'>
                <h5 className='text-lg'>Social Media</h5>
                <ul className='flex space-x-3'>
                    <li><img src={facebookIcon} alt="" className='rounded-[50%] w-7 cursor-pointer' /></li>
                    <li><img src={twitterIcon} alt="" className='rounded-[50%] w-7 cursor-pointer' /></li>
                    <li><img src={instagramIcon} alt="" className='rounded-[50%] w-7 cursor-pointer' /></li>
                    <li><img src={youtubeIcon} alt="" className='rounded-[50%] w-7 cursor-pointer' /></li>
                </ul>
            </div>
        </footer>
    )
}
