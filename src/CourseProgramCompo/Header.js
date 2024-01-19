import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import '../CSScompo/Header.css';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const auth = localStorage.getItem("token");
    const Navi = useNavigate();

    const haldleOpenCloseMEnu = () => {
        setIsOpen(!isOpen)
    }

    const logoutfunc = () => {
        localStorage.clear();
        Navi("/register");
    };

    return (
        <header className='w-full shadow-md sticky z-10'>
            <div className='w-10/12 h-[75px] flex mx-auto justify-between items-center'>
                <div>
                    {/* logo */}
                    <img src='\image\logoPrepBytes.svg' alt='logo'
                        className='h-[75px]'
                    />
                </div>
                <div className='w-7/12 flex-col items-end top-1 visible md:flex tabheader'>
                    {auth ? null :
                        (
                            <div className='space-x-4 mr-8'>
                                <button className='border-2 border-[#f941a9] px-2 rounded-md text-[#f941a9] hover:text-black'>
                                    <Link to={'/login'}>Login</Link>
                                </button>
                                <button className='bg-[#f941a9] border-2 border-[#f941a9] text-white px-1 rounded-md hover:text-black'>
                                    <Link to={'/register'}>Sign up</Link>
                                </button>
                            </div>
                        )
                    }
                    {/* login/sign */}
                    {/* <div className='space-x-4 mr-8'>
                        <button className='border-2 border-[#f941a9] px-2 rounded-md text-[#f941a9] hover:text-black'>
                            <Link to={'/login'}>Login</Link>
                        </button>
                        <button className='bg-[#f941a9] border-2 border-[#f941a9] text-white px-1 rounded-md hover:text-black'>
                            <Link to={'/register'}>Sign up</Link>
                        </button>
                    </div> */}


                    {/* dropdown */}
                    <div className='flex space-x-4'>
                        <div className="group inline-block">
                            <button className=" bg-white rounded-sm flex items-center min-w-32">
                                <span className="pr-1">Study Material</span>
                                <span>
                                    <svg className="fill-current h-4 w-4 transform group-hover:rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M10 12l-6-6h12l-6 6z" />
                                    </svg>
                                </span>
                            </button>
                            <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                                <li className="rounded-sm relative px-3 py-1  hover:text-blue-600 hover:font-semibold">
                                    <NavLink to="/mock-tests">Mock Tests</NavLink>
                                </li>
                                <li className="rounded-sm relative px-3 py-1 hover:text-blue-600 hover:font-semibold">
                                    <NavLink to="/preparation-videos">Video Tutorial</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="group inline-block">
                            <button className="outline-none focus:outline-none    bg-white rounded-sm flex items-center min-w-32">
                                <span className="pr-1">Courses and Programs</span>
                                <span>
                                    <svg className="fill-current h-4 w-4 transform group-hover:rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M10 12l-6-6h12l-6 6z" />
                                    </svg>
                                </span>
                            </button>
                            <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">

                                <li className="rounded-sm relative px-3 py-1 hover:text-blue-600 hover:font-semibold">
                                    <NavLink to="/prepbytes-expert-coder/master-competitive-programming">Master Competitive Programming</NavLink>
                                </li>
                                <li className="rounded-sm relative px-3 py-1 hover:text-blue-600 hover:font-semibold">
                                    <NavLink to="/development-programs/online-full-stack-developer-mern-certification-program">Full Stack Program</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="pr-2  hover:text-blue-600">
                                    <NavLink to="/elevation-academy/mern-stack-web-development-career">Elevation Academy</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="group inline-block">
                            <button className="outline-none focus:outline-none  bg-white rounded-sm flex items-center min-w-32">
                                <span className="pr-1">Project</span>
                                <span>
                                    <svg className="fill-current h-4 w-4 transform group-hover:rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M10 12l-6-6h12l-6 6z" />
                                    </svg>
                                </span>
                            </button>
                            <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                                <li className="rounded-sm px-3 py-1 hover:text-blue-600 hover:font-semibold">
                                    <NavLink to="/html-project">HTML</NavLink>
                                </li>
                                <li className="rounded-sm relative px-3 py-1 hover:text-blue-600 hover:font-semibold">
                                    <NavLink to="/css-project">CSS</NavLink>
                                </li>
                                <li className="rounded-sm relative px-3 py-1 hover:text-blue-600 hover:font-semibold">
                                    <NavLink to="/javascript-project">JavaScript</NavLink>
                                </li>
                                <li className="rounded-sm relative px-3 py-1 hover:text-blue-600 hover:font-semibold">
                                    <NavLink to="react-project">React JS</NavLink>
                                </li>
                                <li className="rounded-sm relative px-3 py-1 hover:text-blue-600 hover:font-semibold">
                                    <NavLink to="/node-project">Node JS</NavLink>
                                </li>
                                <li className="rounded-sm relative px-3 py-1 hover:text-blue-600 hover:font-semibold">
                                    <NavLink to="/mongo-project">MongoDB</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="group inline-block">
                            {auth ? (
                                <div>
                                    <button className="outline-none focus:outline-none  bg-white rounded-sm flex items-center min-w-32">
                                        <span className="pr-1 hiiUser">Hi</span>
                                    </button>
                                    <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                                        <li className="rounded-sm px-3 py-1 hover:text-blue-600 hover:font-semibold">
                                            <NavLink to="/mycourse">
                                                <p className='mydashboard'>My Dashboard</p>
                                            </NavLink>
                                        </li>
                                        <li className="rounded-sm relative px-3 py-1 hover:text-blue-600 hover:font-semibold">
                                            <NavLink to="/"><button onClick={logoutfunc} className='logout'>Logout</button></NavLink>
                                        </li>
                                    </ul>
                                </div>
                            ) : null
                            }
                        </div>
                    </div>
                </div>

                {/* Mobile mode */}
                <div className='flex md:hidden tabheadertwo'>
                    <span
                        onClick={haldleOpenCloseMEnu}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#186be1]">
                            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    {isOpen && (
                        <div className='fixed top-0 right-0 lg:w-[560px] sm:w-auto h-screen border bg-white drop-shadow-2xl transform transition-transform duration-300 ease-out z-10 p-6 space-y-4'>
                            <span onClick={haldleOpenCloseMEnu}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            <ul className='space-y-6'>
                                <li><NavLink to="/prepbytes-expert-coder/master-competitive-programming">Master Competitive Programming</NavLink></li>
                                <li><NavLink to="/development-programs/online-full-stack-developer-mern-certification-program">Full Stack Program</NavLink></li>
                                <li><NavLink to="/mock-tests">Mock Tests</NavLink></li>
                                <li><NavLink to="/preparation-videos">Video Tutorial</NavLink></li>
                                <li><NavLink to="/elevation-academy/mern-stack-web-development-career">Elevation Academy</NavLink></li>
                                <li>Project</li>
                                <li>
                                    <NavLink to={'/register'}>Login/SignUp</NavLink>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
