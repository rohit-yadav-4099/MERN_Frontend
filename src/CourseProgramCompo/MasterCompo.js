import React, { useEffect, useState } from "react";
import '../CSScompo/MasterCompo.css';

const MasterCompatative = () => {

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
            <div>
                <div className="CoursesPageMastHeadHeader">
                    <div className="CoursesPageMastHeadHeader__fixed-btn-container">
                        <img className="CoursesPageMastHeadHeader__fixed-btn-img" src="https://prepbytes-uat-images.s3.ap-south-1.amazonaws.com/ApplyNow.svg" alt="Apply now Image" />
                        <div className="CoursesPageMastHeadHeader__fixed-btn-text">Enrol Now</div>
                    </div>
                    <div className="CoursesPageMastHeadHeader__container">
                        <div className="CoursesPageMastHeadHeader__left">
                            <div className="CoursesPageMastHeadHeader__left-heading">
                                <h1 className="CoursePageMasthead__heading_main" style={{ color: " rgb(46, 145, 235)" }}>MASTER COMPETITIVE PROGRAMMING</h1>
                                <h6 className="CoursePageMasthead__sub_heading">Master Competitive Programming Fom Zero And Become A Top-Rated Coder
                                    <p className="CoursePageMasthead__sub_heading-highlighter"> Under The Guidance Of Top Competitive Programmers
                                        <span className="CoursePageMasthead__sub_heading_second"></span>
                                    </p>
                                </h6>
                                <button className="CoursePageMasthead__btn">Enrol Now</button>
                            </div>
                        </div>
                        <div className="CoursesPageMastHeadHeader__right">
                            <img width="100%" height="100%" className="CoursesPageMastHeadHeader__right-img" src="\masterimage\mcp-header-image.webp" alt="masthead" />
                        </div>
                    </div>
                </div>
                <div className="CoursePageHighlights__main_container">
                    <div className="CoursePageHighlights__main_sub-container">
                        <div className="CoursePageHighlights__list_container-0">
                            <div className="CoursePageHighlights__img-container">
                                <img className="CoursePageHighlights__img" loading="lazy" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp" alt="Highlights Image" />
                            </div>
                            <p className="CoursePageHighlights__list_text">9 months intensive bootcamp</p>
                        </div>
                        <div className="CoursePageHighlights__list_container-1">
                            <div className="CoursePageHighlights__img-container">
                                <img className="CoursePageHighlights__img" loading="lazy" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-two.webp" alt="Highlights Image" />
                            </div>
                            <p className="CoursePageHighlights__list_text">Quick doubt resolution</p>
                        </div>
                        <div className="CoursePageHighlights__list_container-2">
                            <div className="CoursePageHighlights__img-container">
                                <img className="CoursePageHighlights__img" loading="lazy" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-three.webp" alt="Highlights Image" />
                            </div>
                            <p className="CoursePageHighlights__list_text">Live coding sessions with top-rated coders</p>
                        </div>
                        <div className="CoursePageHighlights__list_container-3">
                            <div className="CoursePageHighlights__img-container">
                                <img className="CoursePageHighlights__img" loading="lazy" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-four.webp" alt="Highlights Image" />
                            </div>
                            <p className="CoursePageHighlights__list_text">Get certificate on course completion</p>
                        </div>
                    </div>
                </div>
                <div className="Menter-Container">
                    <h5 className="Menter-Container-heading">Get Guidance From Industry Leading Mentors</h5>
                    <div className="Menter-Container-two">
                        <h5>Other Mentors You Will Be Interactive With</h5>
                        <div className="Menter-Container-third">
                            {data.filter((item) => item.id >= 38 && item.id <= 40).map(
                                (item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="mentor-main-container">
                                                <img src={item.image} className="mentor-image" alt="mamta"></img>
                                                <div className="mentor-info">
                                                    <h4>{item.name}</h4>
                                                    <p>{item.post}</p>
                                                    <img src={item.company} className="ComapniLogo" alt="companylogo" />
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }
                            )}

                        </div>
                    </div>

                </div>

                <div className="Competitive_programing-container">
                    <h2><span>Master Competitive Programming With Us</span></h2>
                    <div className="course-features-container">
                        <div className="course-features-container-image">
                            <img src="\masterimage\Vector.svg" className="course-features-container-image-img" alt="logo"></img>
                        </div>
                        <ul>
                            <li>
                                {data.filter((item) => item.id >= 41 && item.id <= 48).map(
                                    (item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className="course-features-list-container">
                                                    {/* <div className="course-features-list-container-image"> */}
                                                    {/* <img src={item.image} alt="image"/> */}
                                                    <ul>
                                                        <li>
                                                            <div className="course-features-list-container-item">
                                                                <div className="course-features-list-container-item-image">
                                                                    <img src={item.image} />

                                                                </div>
                                                                <div className="course-features-list-container-item-text">
                                                                    <h5>{item.title}</h5>
                                                                    <p>{item.text}</p>

                                                                </div>

                                                            </div>
                                                        </li>
                                                    </ul>

                                                    {/* </div> */}

                                                </div>

                                            </div>
                                        )
                                    }
                                )}
                            </li>
                        </ul>

                    </div>

                </div>

            </div>
        </>
    )
}

export default MasterCompatative;