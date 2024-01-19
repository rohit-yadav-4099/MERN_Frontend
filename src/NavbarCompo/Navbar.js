import React from "react";
import './Navbar.css';
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../CourseProgramCompo/Home";
import ElevationAcademy from "../CourseProgramCompo/Elevation";
import FooterTwo from "./Footer2";
import Register from "../LoginSignupCompo/Register";
import Login from "../LoginSignupCompo/Login";
import HTMLCompo from "../Project/Html";

import Header from "../CourseProgramCompo/Header";

import VideoTutorial from "../StudyMaterial/VideoTutorial";
import MasterCompatative from "../CourseProgramCompo/MasterCompo";
import FullStack from "../CourseProgramCompo/FullStack";
import MockTest from "../StudyMaterial/MockTest";
import Css from "../Project/Css";
import Javascript from "../Project/Javascript";
import ReactCompo from "../Project/React";
import NodeCompo from "../Project/Node";
import MongoCompo from "../Project/Mongo";
import AddMyCourse from "../Redux/MyCourse";


const Navbar = () => {
    return (
        <>
            {/* <div className="navbar">
                <img src="\image\logoPrepBytes.svg" alt="logo" />
            </div>
            <div>
                <div className="loginSignUpbtn">
                    <NavLink to="/login">
                        <button className="loginbtn">Login</button>
                    </NavLink>
                    <NavLink to="/register">
                        <button className="signbtn">Sign up</button>
                    </NavLink>
                </div>
                <div className="routing-list">
                    

                    <ul type="none">
                        
                        <li>
                            <NavLink to="/preparation-videos">Video Tutorial</NavLink>
                        </li>
                        <li>
                            <NavLink to="/courses-program">Courses and Programs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/elevation-academy">Elevation Academy</NavLink>
                        </li>
                        <li>
                            <NavLink to="/html">Project</NavLink>
                        </li>
                    </ul>

                    
                </div>
            </div> */}

            <Header/>

             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/prepbytes-expert-coder/master-competitive-programming" element={<MasterCompatative />} />
                <Route path="/development-programs/online-full-stack-developer-mern-certification-program" element={<FullStack/>} />
                <Route path="/elevation-academy/mern-stack-web-development-career" element={<ElevationAcademy />} />
        
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                <Route path="/preparation-videos" element={<VideoTutorial/>} /> 
                <Route path="/mock-tests" element={<MockTest/>}/>

                <Route path="/html-project" element={<HTMLCompo/>}/>
                <Route path="/css-project" element={<Css/>}/>
                <Route path="/javascript-project" element={<Javascript/>}/>
                <Route path="/react-project" element={<ReactCompo/>}/>
                <Route path="/node-project" element={<NodeCompo/>}/>
                <Route path="/mongo-project" element={<MongoCompo/>}/>

                <Route path="/mycourse" element={<AddMyCourse/>}/>

            </Routes>

            <FooterTwo />

        </>
    )
}

export default Navbar;
