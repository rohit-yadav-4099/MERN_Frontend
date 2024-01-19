import React, { useEffect, useState } from "react";
import './Project.css';
import { NavLink } from 'react-router-dom'

const HTMLCompo = () => {
    const [data, setData] = useState([])
    console.log(data)

    useEffect(() => {
        async function fetchapi() {
            const videoData = await fetch("http://localhost:3030/api/getData")
            const res = await videoData.json()
            setData(res)
            console.log(res);
        }
        fetchapi()
    })
    return (
        <>
            <div className="top-container">
                <h1>HTML BLOG PAGE</h1>
                <div className="top-container-image">
                    <img src="\project\thumbnail_Basic_HTML_Page.png" className="top-container-image-img" alt="logo"></img>
                </div>
            </div>
            {data.filter((item) => item.id === 56).map(
                (item, index) => {
                    return (
                        <div className="project-container">
                            <h1>HTML BLOG PAGE</h1>
                            <div className='project-container-main'>
                                <div className="project-container-left">
                                    <h3>Repo Link</h3>
                                    <NavLink to={item.repolink}><p>{item.repolink}</p></NavLink><br />
                                    <h3>Host Link</h3>
                                    <NavLink to={item.hostlink}><p>{item.hostlink}</p></NavLink>
                                </div>
                                <div className="project-container-right">
                                    <h5>About this Project</h5>
                                    <p>{item.about}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            )}

        </>
    )
}

export default HTMLCompo;