// Navbar.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // ลบข้อมูลใน localStorage
        localStorage.removeItem('userData');
        // นำผู้ใช้ไปยังหน้า Login
        navigate('/');
    };



    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/dashboard">Home</Link></li>
                        <li>
                            <details>
                                <summary>Department</summary>
                                <ul className="p-2">
                                    <li><Link to="/hr/dashboard">HR</Link></li>
                                    <li><a>Purchasing</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <label className="btn btn-ghost text-xl">React ERP System</label>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/dashboard">Home</Link></li>
                    <li>
                        <details>
                            <summary>Department</summary>
                            <ul className="p-2">
                                <li><Link to="/hr/dashboard">HR</Link></li>
                                <li><a>Purchasing</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faLock} /> Logout
                </a>
            </div>
        </div>
    );
};

export default Navbar;
