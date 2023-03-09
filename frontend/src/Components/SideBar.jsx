import React, { useState } from 'react'
import threeCircle from '../Assets/three-circle.svg';
import brand from '../Assets/brand.svg';
import { RxDashboard, RxClock, RxCounterClockwiseClock, RxHome } from 'react-icons/rx';
import { BsTrash } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaChevronCircleRight } from 'react-icons/fa';
import Avvvatars from 'avvvatars-react';
import { useLogout } from '../hooks/useLogout';
import { Link, useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useAuthContext } from '../hooks/useAuthContext';

export default function SideBar() {
    const { user } = useAuthContext();
    const { logout } = useLogout();
    const [open, setOpen] = useState(true);
    const decoded = jwtDecode(user);
    const location = useLocation();

    const Logout = () => {
        logout();
    }

    const menus = [
        { icon: <RxDashboard />, title: 'Dashboard', to: '/dashboard' },
        { icon: <RxClock />, title: 'Ongoing', to: '/ongoing-vote' },
        { icon: <RxCounterClockwiseClock />, title: 'Finished', to: '/finished-vote' },
        { icon: <BsTrash />, title: 'Trash', to: '/trash' },
        { icon: <RxHome />, title: 'Room', gap: true, to: '/room' },
        { icon: <IoSettingsOutline />, title: 'Settings', gap: true, to: '/settings' },
        { icon: <FiLogOut />, title: 'Logout', onClick: Logout },
    ]

    return (
        <div className={`${open ? "w-72" : "w-[77px]"} px-3 py-4 h-screen bg-[#928979] duration-300 relative`}>
            <div className='flex flex-col space-y-6 2xl:space-y-4'>
                <img src={threeCircle} alt="" className='w-10' />
                <div className='flex space-x-1 items-center'>
                    <img src={brand} alt="" className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
                    <h1 className={`font-bold font-lato text-3xl tracking-wider text-[#FBF8EE] origin-left duration-300 ${!open && "scale-0"}`}>OLLS.IO</h1>
                </div>
                <ul className="pt-7 2xl:pt-3">
                    {menus.map((menu, i) => (
                        <Link
                            to={menu.to}
                            key={i}
                            onClick={menu.onClick}
                            className={`flex items-center space-x-4 cursor-pointer hover:bg-[#DFC298] ease-in-out duration-300 rounded-md p-1 py-2 ${menu.gap ? "mt-12 2xl:mt-10" : "mt-5"}
                            ${menu.to === location.pathname ? 'bg-[#DFC298]' : ''}
                            `}
                        >
                            <span className='text-2xl text-[#FBF8EE] pl-[10px]'>{menu.icon}</span>
                            <p className={`duration-300 origin-left text-[#FBF8EE] ${!open && "hidden"}`}>{menu.title}</p>
                        </Link>
                    ))}
                </ul>
                <div className='flex space-x-3 pl-2 pt-5 items-center'>
                    <span className={`border-2 border-[#DFC298] rounded-[50%] ${open && "rotate-[360deg]"}`}><Avvvatars size={36} value={decoded.name} /></span>
                    <div className={`flex flex-col text-[#FBF8EE] rotate-[360deg] ${!open && "hidden"}`}>
                        <p>{decoded.name}</p>
                        <p className='text-xs'>{decoded.email}</p>
                    </div>
                </div>
            </div>
            <span
                className={`text-2xl absolute cursor-pointer -right-3 bottom-5 text-[#DFC298] border-2 bg-white rounded-[50%] 
                            ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}
            >
                <FaChevronCircleRight />
            </span>
        </div>
    )
}
