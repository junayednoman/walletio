import { Badge, IconButton } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import { FaRegBell, FaBell } from 'react-icons/fa6';

function NotificationDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [badgeOpen, setBadgeOpen] = useState(true);

    const notifications = [
        { title: "Lorem ipsum dolor, sit amet consectetur.", date: "1 days ago", link: "https://www.youtube.com/watch?v=pcZHMvTGrWs" },
        { title: "Lorem ipsum dolor, sit amet consectetur. 2", date: "2 days ago", link: "https://youtu.be/A4_TFHzqAAg?si=d2-Gu_ROQjG7WieK" },
        { title: "Lorem ipsum dolor, sit amet consectetur. 3", date: "3 days ago", link: "https://youtu.be/A4_TFHzqAAg?si=d2-Gu_ROQjG7WieK" },
        { title: "Lorem ipsum dolor, sit amet consectetur. 4", date: "5 days ago", link: "https://youtu.be/A4_TFHzqAAg?si=d2-Gu_ROQjG7WieK" },
        { title: "Lorem ipsum dolor, sit amet consectetur. 5", date: "5 days ago", link: "https://youtu.be/A4_TFHzqAAg?si=d2-Gu_ROQjG7WieK" },
    ]

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [dropdownRef]);

    const handleIconClick = () => {
        setBadgeOpen(false);
        setIsOpen(!isOpen)
    }

    return (
        <div className="dropdown relative" ref={dropdownRef}>
            <div className=''>
                <IconButton
                    size="large"
                    onClick={handleIconClick}
                >
                    <Badge badgeContent={badgeOpen ? notifications.length : 0}>
                        <FaRegBell className='md:text-xl text-lg cursor-pointer text-textColor' />
                    </Badge>
                </IconButton>
            </div>
            {
                isOpen && (
                    <ul style={{ display: notifications.length > 0 ? "block" : 'flex', justifyContent: "center", alignItems: "center" }} className="dropdown-content absolute right-0 bg-white shadow-md mt-2 w-[300px] min-h-[300px] max-h-[330px] overflow-y-scroll z-10 p-6 space-y-4 text-sm capitalize border rounded-md notificationDropdown">
                        {notifications.length > 0 ?
                            notifications.map((item, i) =>
                                <li key={i}><a className='flex gap-2' href={item.link} target='_blank'>
                                    <div className='bg-primaryColor p-[5px] max-h-[25px] rounded-sm'>
                                        <FaBell className='text-sm text-white' />
                                    </div>
                                    <div className='space-y-2'>
                                        <h6 className='font-semibold'>{item.title}</h6>
                                        <span className='text-[13px] text-[#00000076] lowercase'>{item.date}</span>
                                    </div>
                                </a></li>
                            ) :
                            <>
                                <div className='w-full text-center flex justify-center flex-col gap-5'>
                                    <FaBell className='text-7xl mx-auto text-textColor' />
                                    <p className='text-base font-semibold'>No notifications found!</p>
                                </div>
                            </>
                        }
                    </ul>)
            }
        </div >
    );
}

export default NotificationDropdown;