import React, { useEffect, useState } from 'react';
import brandLogo from "../Assets/brand-logo.svg";
import AOS from 'aos';
import { Link } from 'react-scroll';
import { Link as LinkLogin } from 'react-router-dom';

const Header = () => {
    const [active, setActive] = useState('home');

    const handleSetActive = (to) => {
        setActive(to);
    };

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <header className='bg-[#B99B6B] p-3 flex items-center fixed rounded-md z-10 space-x-44 2xl:space-x-72' data-aos="fade-down"
            data-aos-duration="1500">
            <img src={brandLogo} alt="Brand Logo" />
            <nav>
                <ul className='flex space-x-16 font-poppins cursor-pointer'>
                    <li>
                        <Link
                            to="home"
                            spy={true}
                            offset={-200}
                            onSetActive={handleSetActive}
                            activeClass="font-bold"
                            className={`${active === 'home' ? 'font-bold' : ''} opacity-80 hover:opacity-100`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="feature"
                            spy={true}
                            offset={-95}
                            onSetActive={handleSetActive}
                            activeClass="font-bold"
                            className={`${active === 'feature' ? 'font-bold' : ''} opacity-80 hover:opacity-100`}
                        >
                            Feature
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            spy={true}
                            offset={-95}
                            onSetActive={handleSetActive}
                            activeClass="font-bold"
                            className={`${active === 'about' ? 'font-bold' : ''} opacity-80 hover:opacity-100`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='review'
                            spy={true}
                            offset={-65}
                            onSetActive={handleSetActive}
                            activeClass="font-bold"
                            className={`${active === 'review' ? 'font-bold' : ''} opacity-80 hover:opacity-100`}
                        >
                            Review
                        </Link>
                    </li>
                </ul>
            </nav>
            <LinkLogin to="/auth/login" className='px-7 py-2 rounded-sm cursor-pointer font-poppins ease-out duration-200 shadow-button bg-[#7c4f26e2] text-white hover:bg-[#7C5026]'>
                Login
            </LinkLogin>
        </header>
    );
}

export default Header;
