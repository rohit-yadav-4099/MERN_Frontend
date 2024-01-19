import React, { useEffect, useState } from "react";
import '../CSScompo/Elevation.css';

const ElevationAcademy = () => {
    const [data, setData] = useState([])
    console.log(data)
    const [show, setShow] = useState(false)
    const [showtwo, setShowtwo] = useState(false)
    const [showthree, setShowthree] = useState(false)
    const [showfour, setShowfour] = useState(false)

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
            <div className="IncomeSharingHeader">
                <section className="IncomeSharingHeader-main">
                    <div className="IncomeSharingHeader-main__right">
                        <img className="IncomeSharingHeader-main__right--img" src="\elevation\ISA-masthead-mern-5.webp" alt="header" />
                    </div>
                    <div className="IncomeSharingHeader-main__left">
                        <h1 className="IncomeSharingHeader-main__left--heading">PrepBytes Elevation Academy - Full Stack Web Development Career</h1>
                        <p className="IncomeSharingHeader-main__left--text">Enroll in PrepBytes Elevation Academy - Full Stack Program and Guaranteed Tech Job of minimum 5 LPA.
                            <span className="IncomeSharingHeader-main__left--text--span">
                            </span>
                        </p>
                        <ul className="IncomeSharingHeader-main__left-list">
                            <li className="IncomeSharingHeader-main__left-list-item">
                                <img className="IncomeSharingHeader-main__left-list-item--img" src="\elevation\arrowright.svg" />
                                <p className="IncomeSharingHeader-main__left-list-item--text">Complete Live Class from experts</p>
                            </li>
                            <li className="IncomeSharingHeader-main__left-list-item">
                                <img className="IncomeSharingHeader-main__left-list-item--img" src="\elevation\arrowright.svg" />
                                <p className="IncomeSharingHeader-main__left-list-item--text">Be the best Full stack developer</p>
                            </li>
                            <li className="IncomeSharingHeader-main__left-list-item">
                                <img className="IncomeSharingHeader-main__left-list-item--img" src="\elevation\arrowright.svg" />
                                <p className="IncomeSharingHeader-main__left-list-item--text">Job Guarantee</p>
                            </li>
                        </ul>
                        <div className="IncomeSharingHeader-main__left-buttons">
                            <div className="IncomeSharingHeader-main__left-buttons--button">
                                <button className="IncomeSharingHeader-main__left-buttons--button-enroll">Apply Now</button>
                            </div>
                            <div className="IncomeSharingHeader-main__left-buttons--button">
                                <button className="IncomeSharingHeader-main__left-buttons--button-knowmore">Get a call back</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="NewBatch">
                <div className="NewBatch-main">
                    <div className="NewBatch-main-left">
                        <p class="NewBatch__main_left_heading_text">For 2023, 2022 &amp; 2021 graduates</p>
                        <p class="NewBatch__main_left_date_text">Batch Starting: 1st May 2023</p>
                    </div>
                    <div className="NewBatch-main-right">
                        <div className="NewBatch__main_right_point_outer_counter">
                            <div className="NewBatch__main_right_point_container">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/free_class.webp" class="NewBatch__main_right_point_img" />
                                <div className="NewBatch__main_right_point_text_container">
                                    <span className="NewBatch__main_right_point_text_heading">Free Webinar</span>
                                    <span className="NewBatch__main_right_point_text_date">17th April</span>
                                </div>
                            </div>
                            <div className="NewBatch__main_right_point_container_connector_line_vertical"></div>
                        </div>
                        <div className="NewBatch__main_right_point_outer_counter">
                            <div className="NewBatch__main_right_point_container">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Start+Assesment.webp" className="NewBatch__main_right_point_img" />
                                <div className="NewBatch__main_right_point_text_container">
                                    <span className="NewBatch__main_right_point_text_heading">1:1 Counselling session</span>
                                    <span className="NewBatch__main_right_point_text_date">From 18th April</span>
                                </div>
                            </div>
                            <div className="NewBatch__main_right_point_container_connector_line_vertical">
                            </div>
                        </div>
                        <div className="NewBatch__main_right_point_outer_counter">
                            <div className="NewBatch__main_right_point_container">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Batch+Starts.webp" className="NewBatch__main_right_point_img" />
                                <div className="NewBatch__main_right_point_text_container">
                                    <span className="NewBatch__main_right_point_text_heading">Batch Start</span>
                                    <span className="NewBatch__main_right_point_text_date">01 May'23, Mon-Fri (7-10PM)</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="IncomeSharing-Journey-container" style={{ backgroundImage: "url(&quot;&quot)" }}>
                <div className="IncomeSharing-Journey-container-heading">
                    <h1 className="IncomeSharingJourney__heading">How will you reach to your dream Job?</h1>
                </div>
                <div className="IncomeSharing-Journey-container-list">
                    <div className="IncomeSharingJourney__list_title_container">
                        <div className="IncomeSharingJourney_item_title_container">
                            <div className="IncomeSharingJourney_title_container ">
                                <span className="IncomeSharingJourney_title_number" style={{ backgroundColor: "rgb(255, 251, 248", border: "1px dashed rgb (255, 158, 82)" }}>1</span>
                                <span className="IncomeSharingJourney_title" style={{ color: "rgb(255, 158, 82)" }}>Application &amp; Shortlisting</span>
                            </div>
                            <div className="IncomeSharingJourney_connector_line">
                            </div>
                        </div>
                        <div className="IncomeSharingJourney_item_title_container">
                            <div className="IncomeSharingJourney_title_container IncomeSharingJourney_title_container_glow">
                                <span className="IncomeSharingJourney_title_number" style={{ backgroundColor: "rgb(255, 242, 242", border: "1px dashed rgb (232, 63, 63)" }}>2</span>
                                <span className="IncomeSharingJourney_title" style={{ color: "rgb(232, 63, 63)" }}>Attend Free Webinar</span>
                            </div>
                            <div className="IncomeSharingJourney_connector_line">
                            </div>
                        </div>
                        <div className="IncomeSharingJourney_item_title_container">
                            <div className="IncomeSharingJourney_title_container ">
                                <span className="IncomeSharingJourney_title_number" style={{ backgroundColor: "rgb(255, 241, 253", border: "1px dashed rgb (192, 39, 175)" }}>3</span>
                                <span className="IncomeSharingJourney_title" style={{ color: "rgb(192, 39, 175)" }}>Batch Commencement</span>
                            </div>
                            <div className="IncomeSharingJourney_connector_line">
                            </div>
                        </div>
                        <div className="IncomeSharingJourney_item_title_container">
                            <div className="IncomeSharingJourney_title_container ">
                                <span className="IncomeSharingJourney_title_number" style={{ backgroundColor: "rgb(255, 246, 255", border: "1px dashed rgb (32, 142, 189)" }}>4</span>
                                <span className="IncomeSharingJourney_title" style={{ color: "rgb(32, 142, 189)" }}>7 Months Program</span>
                            </div>
                            <div className="IncomeSharingJourney_connector_line">
                            </div>
                        </div>
                        <div className="IncomeSharingJourney_item_title_container">
                            <div className="IncomeSharingJourney_title_container ">
                                <span className="IncomeSharingJourney_title_number" style={{ backgroundColor: "rgb(231, 255, 240", border: "1px dashed rgb (31, 194, 92)" }}>5</span>
                                <span className="IncomeSharingJourney_title" style={{ color: "rgb(31, 194, 92)" }}>Guaranteed Placement</span>
                            </div>
                            <div className="IncomeSharingJourney_connector_line">
                            </div>
                        </div>
                    </div>
                    <div className="IncomeSharing-Journey-container-list-desc">
                        {data.filter((item) => item.id >= 64 && item.id <= 68).map(

                            (item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="IncomeSharingJourney_desc_container">
                                            <div className="IncomeSharingJourney_desc_text_container">
                                                <span className="IncomeSharingJourney_desc">{item.text}</span>
                                            </div>
                                            <div className="IncomeSharingJourney_desc_img_container">
                                                <img loading="lazy" class="IncomeSharingJourney_desc_img" src={item.image} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )}


                    </div>

                </div>

            </div>

            <div className="programHighlight-New">
                <div className="ProgramHighlightsNew__heading_container">
                    <p className="ProgramHighlightsNew__heading_text">Why PrepBytes Elevation Academy? </p>
                    <p className="ProgramHighlightsNew__heading_subtext"></p>
                </div>
                <div className="programHighlight-New-cards">
                    {data.filter((item) => item.id >= 69 && item.id <= 74).map(
                        (item, index) => {
                            return (
                                <div key={index}>
                                    <div className="ProgramHighlightsNew__highlights_point_container">
                                        <div className="ProgramHighlightsNew__highlights_point_image_container">
                                            <img loading="lazy" src={item.image} className="ProgramHighlightsNew__highlights_point_image" />
                                        </div>
                                        <div className="ProgramHighlightsNew__highlights_point_text_container">
                                            <p className="ProgramHighlightsNew__highlights_point_text_heading">{item.name}</p>
                                            <p className="ProgramHighlightsNew__highlights_point_text_sub_heading">{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}


                </div>

            </div>

            <div className="incomeSharing-sylabus-main">
                <div className="IncomeSharingSyllabus__main-top">
                    <div className="IncomeSharingSyllabus__main-top-container">
                        <p className="IncomeSharingSyllabus__main-top-container--heading">Program Syllabus</p>
                    </div>
                    <p className="IncomeSharingSyllabus__main-top--text">Learn from the best and be prepared to crack full stack developer jobs </p>
                </div>
                <div className="IncomeSharingSyllabus">
                    <div className="IncomeSharingSyllabus__box" style={{ backgroundColor: "rgb(247, 128, 119)" }}>
                        <p class="IncomeSharingSyllabus__box--text">1st Week - 4th Week</p>
                    </div>
                    <div className="IncomeSharingSyllabus__course">
                        <div className="IncomeSharingSyllabusContent__course-section">
                            <div className="IncomeSharingSyllabus__course-top" style={{ borderLeftColor: " rgb(247, 128, 119)" }}>
                                <div className="IncomeSharingSyllabus__course-top-main">
                                    <div className="IncomeSharingSyllabus__course-top-main-box" style={{ borderColor: "rgb(247, 128, 119)" }}>
                                        <p className="IncomeSharingSyllabus__course-top-main-box--text" style={{ backgroundColor: "rgb(247, 128, 119)" }}>1</p>
                                    </div>
                                    <p className="IncomeSharingSyllabus__course-top-main--text">Frontend Development Basics</p>
                                </div>
                                <p className="IncomeSharingSyllabus__course-top--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="IncomeSharingSyllabus">
                    <div className="IncomeSharingSyllabus__box" style={{ backgroundColor: "rgb(101, 187, 229)" }}>
                        <p className="IncomeSharingSyllabus__box--text">5th Week - 8th Week</p>
                    </div>
                    <div className="IncomeSharingSyllabus__course">
                        <div className="IncomeSharingSyllabusContent__course-section">
                            <div className="IncomeSharingSyllabus__course-top" style={{ borderLeftColor: "rgb(101, 187, 229)" }}>
                                <div className="IncomeSharingSyllabus__course-top-main">
                                    <div className="IncomeSharingSyllabus__course-top-main-box" style={{ borderColor: "rgb(101, 187, 229)" }}>
                                        <p className="IncomeSharingSyllabus__course-top-main-box--text" style={{ backgroundColor: "rgb(101, 187, 229)" }}>2</p>
                                    </div>
                                    <p className="IncomeSharingSyllabus__course-top-main--text">Javascript Fundamentals &amp; Problem Solving</p>
                                </div>
                                <p className="IncomeSharingSyllabus__course-top--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="IncomeSharingSyllabus">
                    <div className="IncomeSharingSyllabus__box" style={{ backgroundColor: "rgb(101, 187, 229)" }}>
                        <p className="IncomeSharingSyllabus__box--text">9th Week - 12th Week</p>
                    </div>
                    <div className="IncomeSharingSyllabus__course">
                        <div className="IncomeSharingSyllabusContent__course-section">
                            <div className="IncomeSharingSyllabus__course-top" style={{ borderLeftColor: "rgb(101, 187, 229)" }}>
                                <div className="IncomeSharingSyllabus__course-top-main">
                                    <div className="IncomeSharingSyllabus__course-top-main-box" style={{ borderColor: "rgb(101, 187, 229)" }}>
                                        <p className="IncomeSharingSyllabus__course-top-main-box--text" style={{ backgroundColor: "rgb(101, 187, 229)" }}>3</p>
                                    </div>
                                    <p className="IncomeSharingSyllabus__course-top-main--text">Building Websites using JS</p>
                                </div>
                                <p className="IncomeSharingSyllabus__course-top--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="IncomeSharingSyllabus">
                    <div className="IncomeSharingSyllabus__box" style={{ backgroundColor: "rgb(247, 182, 67)" }}>
                        <p className="IncomeSharingSyllabus__box--text">13th Week - 16th Week</p>
                    </div>
                    <div className="IncomeSharingSyllabus__course">
                        <div className="IncomeSharingSyllabusContent__course-section">
                            <div className="IncomeSharingSyllabus__course-top" style={{ borderLeftColor: "rgb(247, 182, 67)" }}>
                                <div className="IncomeSharingSyllabus__course-top-main">
                                    <div className="IncomeSharingSyllabus__course-top-main-box" style={{ borderColor: "rgb(247, 182, 67)" }}>
                                        <p className="IncomeSharingSyllabus__course-top-main-box--text" style={{ backgroundColor: "rgb(247, 182, 67)" }}>4</p>
                                    </div>
                                    <p className="IncomeSharingSyllabus__course-top-main--text">React</p>
                                </div>
                                <p className="IncomeSharingSyllabus__course-top--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="IncomeSharingSyllabus">
                    <div className="IncomeSharingSyllabus__box" style={{ backgroundColor: "rgb(247, 128, 119)" }}>
                        <p class="IncomeSharingSyllabus__box--text">17th Week - 19th Week</p>
                    </div>
                    <div className="IncomeSharingSyllabus__course">
                        <div className="IncomeSharingSyllabusContent__course-section">
                            <div className="IncomeSharingSyllabus__course-top" style={{ borderLeftColor: " rgb(247, 128, 119)" }}>
                                <div className="IncomeSharingSyllabus__course-top-main">
                                    <div className="IncomeSharingSyllabus__course-top-main-box" style={{ borderColor: "rgb(247, 128, 119)" }}>
                                        <p className="IncomeSharingSyllabus__course-top-main-box--text" style={{ backgroundColor: "rgb(247, 128, 119)" }}>5</p>
                                    </div>
                                    <p className="IncomeSharingSyllabus__course-top-main--text">NodeJS</p>
                                </div>
                                <p className="IncomeSharingSyllabus__course-top--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="IncomeSharingSyllabus">
                    <div className="IncomeSharingSyllabus__box" style={{ backgroundColor: "rgb(101, 187, 229)" }}>
                        <p className="IncomeSharingSyllabus__box--text">20th Week - 22th Week</p>
                    </div>
                    <div className="IncomeSharingSyllabus__course">
                        <div className="IncomeSharingSyllabusContent__course-section">
                            <div className="IncomeSharingSyllabus__course-top" style={{ borderLeftColor: "rgb(101, 187, 229)" }}>
                                <div className="IncomeSharingSyllabus__course-top-main">
                                    <div className="IncomeSharingSyllabus__course-top-main-box" style={{ borderColor: "rgb(101, 187, 229)" }}>
                                        <p className="IncomeSharingSyllabus__course-top-main-box--text" style={{ backgroundColor: "rgb(101, 187, 229)" }}>6</p>
                                    </div>
                                    <p className="IncomeSharingSyllabus__course-top-main--text">Database</p>
                                </div>
                                <p className="IncomeSharingSyllabus__course-top--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="IncomeSharingSyllabus">
                    <div className="IncomeSharingSyllabus__box" style={{ backgroundColor: "rgb(247, 182, 67)" }}>
                        <p className="IncomeSharingSyllabus__box--text">23th Week - 24th Week</p>
                    </div>
                    <div className="IncomeSharingSyllabus__course">
                        <div className="IncomeSharingSyllabusContent__course-section">
                            <div className="IncomeSharingSyllabus__course-top" style={{ borderLeftColor: "rgb(247, 182, 67)" }}>
                                <div className="IncomeSharingSyllabus__course-top-main">
                                    <div className="IncomeSharingSyllabus__course-top-main-box" style={{ borderColor: "rgb(247, 182, 67)" }}>
                                        <p className="IncomeSharingSyllabus__course-top-main-box--text" style={{ backgroundColor: "rgb(247, 182, 67)" }}>7</p>
                                    </div>
                                    <p className="IncomeSharingSyllabus__course-top-main--text">Code Review & Development</p>
                                </div>
                                <p className="IncomeSharingSyllabus__course-top--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="IncomeSharingSyllabus">
                    <div className="IncomeSharingSyllabus__box" style={{ backgroundColor: "rgb(247, 182, 67)" }}>
                        <p className="IncomeSharingSyllabus__box--text">25th Week - 28th Week</p>
                    </div>
                    <div className="IncomeSharingSyllabus__course">
                        <div className="IncomeSharingSyllabusContent__course-section">
                            <div className="IncomeSharingSyllabus__course-top" style={{ borderLeftColor: "rgb(247, 182, 67)" }}>
                                <div className="IncomeSharingSyllabus__course-top-main">
                                    <div className="IncomeSharingSyllabus__course-top-main-box" style={{ borderColor: "rgb(247, 182, 67)" }}>
                                        <p className="IncomeSharingSyllabus__course-top-main-box--text" style={{ backgroundColor: "rgb(247, 182, 67)" }}>8</p>
                                    </div>
                                    <p className="IncomeSharingSyllabus__course-top-main--text">Interview Preparation & Major Project</p>
                                </div>
                                <p className="IncomeSharingSyllabus__course-top--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="IncomeSharingSyllabus">
                    <div className="IncomeSharingSyllabus__box" style={{ backgroundColor: "rgb(101, 187, 229)" }}>
                        <p className="IncomeSharingSyllabus__box--text">28th Week Onward</p>
                    </div>
                    <div className="IncomeSharingSyllabus__course">
                        <div className="IncomeSharingSyllabusContent__course-section">
                            <div className="IncomeSharingSyllabus__course-top" style={{ borderLeftColor: "rgb(101, 187, 229)" }}>
                                <div className="IncomeSharingSyllabus__course-top-main">
                                    <div className="IncomeSharingSyllabus__course-top-main-box" style={{ borderColor: "rgb(101, 187, 229)" }}>
                                        <p className="IncomeSharingSyllabus__course-top-main-box--text" style={{ backgroundColor: "rgb(101, 187, 229)" }}>9</p>
                                    </div>
                                    <p className="IncomeSharingSyllabus__course-top-main--text">Interview Opportunities</p>
                                </div>
                                <p className="IncomeSharingSyllabus__course-top--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="upcommingBatch">
                {data.filter((item) => item.id === 75).map(
                    (item, index) => {
                        return (
                            <div key={index}>
                                <div className="upcommingBatch-main">
                                    <div className="UpcomingBatches__main-left">
                                        <p className="UpcomingBatches__main-left--text">{item.text}</p>
                                        <button className="UpcomingBatches__main-left--btn">Apply Now</button>
                                    </div>
                                    <div className="UpcomingBatches__main-right">
                                        <img className="UpcomingBatches__main-right--img" src={item.image} />
                                    </div>
                                </div>

                            </div>
                        )
                    }
                )}
                <div>

                </div>

            </div>

            <div className="StudentTestimonials">
                <span class="StudentsTestimonials__heading">Testimonials</span>
                <h4 class="MuiTypography-root MuiTypography-h4" id="StudentsTestimonials__subHeading">Our Students Speaks</h4>
                <div className="StudentTestimonials-main">
                    {data.filter((item) => item.id >= 76 && item.id <= 78).map(
                        (item, index) => {
                            return (
                                <div key={index}>
                                    <div className="slick-slide slick-active slick-current">
                                        <div>
                                            <div tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                                                <div className="Student__testimonials-placed-people-container-card">
                                                    <div className="Student__testimonials-placed-people-container-card-top">
                                                        <img src={item.image} class="Student__testimonials-placed-people-container-card-top-image" alt="student" />
                                                        <div className="Student__testimonials-placed-people-container-card-top-right">
                                                            <p className="Student__testimonials-placed-people-container-card-top-name">{item.name}</p>
                                                            <p className="Student__testimonials-placed-people-container-card-top-text">{item.company}</p>
                                                        </div>
                                                    </div>
                                                    <div className="Student__testimonials-placed-people-container-card-bottom">
                                                        <p className="Student__testimonials-placed-people-container-card-bottom-text">{item.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}


                </div>
            </div>

            <div className="student-placed-main">
                <p className="StudentsPlaced__main--heading">Where our Students are placed</p>
                <p className="StudentsPlaced__main--subheading">"You guarantee hard work, We guarantee placements"</p>
                <div className="studentplaced-company">
                    <div className="studentplaced-company-container">
                        {data.filter((item) => item.id >= 79 && item.id <= 90).map(
                            (item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="StudentsPlaced__main-companies-container-box">
                                            <img src={item.image} alt="comany" class="StudentsPlaced__main-companies-container-box--img" />
                                        </div>
                                    </div>
                                )
                            }
                        )}


                    </div>

                </div>

            </div>

            <div className="paymentPlan">
                <div className="paymentPlan-main">
                    <p className="PaymentPlans__main--heading">Payment Plans</p>
                    <p className="PaymentPlans__main--subheading">Choose a payment plan suiting your needs</p>
                    <div className="paymentPlan-main-container">
                        <div className="paymentPlan-main-container">
                            <div className="PaymentPlans__main-container-right">
                                <img className="PaymentPlans__main-label-img" src="\elevation\tag4-01.webp" alt="payment label image" />
                                <div className="PaymentPlans__main-container-left-heading">Pay Upfront*</div>
                                <div className="PaymentPlans__main-container-left-book">Pay Now</div>
                                <div className="PaymentPlans__main-container-right-amount">
                                    <p className="PaymentPlans__main-container-right-amount-actual">₹ 70,000</p>
                                </div>
                                <hr className="PaymentPlans__main-container-right-break" />
                                <div className="PaymentPlans__main-container-right-detail">
                                    <p className="PaymentPlans__main-container-right-detail-title"> *Money-back guarantee on placements</p>
                                    <span className="PaymentPlans__main-container-right-detail-unplace">
                                    </span>
                                </div>
                                <div className="PaymentPlans__main-container-right-emi">EMI Starting at</div>
                                <div className="PaymentPlans__main-container-right-calculation">
                                    <p className="PaymentPlans__main-container-right-calculation-price">₹ 5833</p>/month
                                </div>
                            </div>
                            <div className="PaymentPlans__main-container-emi">
                                <button className="PaymentPlans__main--container-card-left-second--btn">Register</button>
                            </div>


                        </div>


                    </div>
                    <div className="PaymentPlans__main--guidelines">
                        <div className="PaymentPlans__main--guidelines-container">
                            <img className="PaymentPlans__main--guidelines-container--img" src="\elevation\paymenticonlower.svg" loading="lazy" />
                            <p className="PaymentPlans__main--guidelines-container--text">
                                <span>Guaranteed Placement of minimum 5 LPA </span>
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="prepmentors">
                <div className="prepmentors-main">
                    <p className="PrepMentors__main--heading">Our Mentors</p>
                    <p className="PrepMentors__main--subheading">Learn directly from experienced software developers and master full stack</p>
                    <div className="prepmentors-main-container">
                        {data.filter((item) => item.id >= 91 && item.id <= 93).map(
                            (item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="PrepMentors__main--container-card">
                                            <div className="PrepMentors__main--container-card-image">
                                                <div className="lazyload-wrapper ">
                                                    <img className="PrepMentors__main--container-card-image-background--img" alt="mentor" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor_background.png" />
                                                </div>
                                                <div className="lazyload-wrapper ">
                                                    <img className="PrepMentors__main--container-card-image--img" alt="mentor" src={item.image} />
                                                </div>
                                            </div>
                                            <div className="PrepMentors__main--container-card-text">
                                                <p className="PrepMentors__main--container-card-text--name">{item.name}</p>
                                                <p className="PrepMentors__main--container-card-text--designation">{item.text}</p>
                                            </div>
                                            <div className="PrepMentors__main--container-card-info">
                                                <p className="PrepMentors__main--container-card-info--text">{item.para}</p>
                                            </div>
                                            <div className="PrepMentors__main--container-card-company">
                                                <div className="lazyload-wrapper ">
                                                    <img className="PrepMentors__main--container-card-company--img" src={item.company} alt="company" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            }
                        )}
                    </div>

                </div>

            </div>

            <div className="TestDetails__main">
                <div className="TestDetails__main-container">
                    <div className="TestDetails__main--container-card">
                        <div className="TestDetails__main--container-card-left">
                            <div className="TestDetails__main--container-card-left-second">
                                <p className="TestDetails__main--container-card-left-second--text">Free Webinar</p>
                                <p className="TestDetails__main--container-card-left-second--subtext">Experts mentors designed to get you job-ready, designed for complete beginners as well.</p>
                            </div>
                            <div className="TestDetails__main--container-card-left-first">
                                <img loading="lazy" className="TestDetails__main--container-card-left-first--img" alt="calendar" src="\elevation\calendar.webp" />
                            </div>
                        </div>
                        <div className="TestDetails__main--container-card-right">
                            <p className="TestDetails__main--container-card-right--text">Free Webinar</p>
                            <p className="TestDetails__main--container-card-right--subtext">Experts mentors designed to get you job-ready, designed for complete beginners as well.</p>
                            <div className="TestDetails__main--container-card-right-box">
                                <p className="TestDetails__main--container-card-right-box--text">17th April</p>
                            </div>
                            <div className="TestDetails__main--container-card-right-button">
                                <button className="TestDetails__main--container-card-right-button--btn">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="IncomeSharingMetrics__main">
                <div className="IncomeSharingMetrics__main-container">
                    {data.filter((item) => item.id >= 94 && item.id <= 96).map(
                        (item, index) => {
                            return (
                                <div key={index}>
                                    <div className="IncomeSharingMetrics__main-container-item">
                                        <img className="IncomeSharingMetrics__main-container-item--img" loading="lazy" src={item.image} />
                                        <div className="IncomeSharingMetrics__main-container-item-content">
                                            <p className="IncomeSharingMetrics__main-container-item-content--text">{item.name}</p>
                                            <p className="IncomeSharingMetrics__main-container-item-content--subtext">{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>

            <div className="incomeSharing-main">
                <div className="IncomeSharingFaqs__main-top">
                    <p className="IncomeSharingFaqs__main-top--heading">Frequently Asked Questions</p>
                </div>
                <div className="IncomeSharingFaqs__main-middle">
                    <div className="IncomeSharingFaqs__main-middle-content">
                        <div className="IncomeSharingFaqs__main-middle-content-tab-one">
                            <p className="IncomeSharingFaqs__main-middle-content-tab--text">Eligibility Criteria</p>
                        </div>
                        <div className="IncomeSharingFaqs__main-middle-content-tab ">
                            <p className="IncomeSharingFaqs__main-middle-content-tab--text">Batch Enrolment</p>
                        </div>
                        <div className="IncomeSharingFaqs__main-middle-content-tab ">
                            <p className="IncomeSharingFaqs__main-middle-content-tab--text">Placement Support</p>
                        </div>
                    </div>
                </div>
                <div className="questionlinoine">
                    <div className="IncomeSharingFaqs-panel">
                        <button className="IncomeSharingFaqs-panel__header" onClick={() => setShow(!show)}>Can I apply if I am still in College?
                            <span className="IncomeSharingFaqs-panel__header-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                    <path fill="currentColor" d="M14,7H9V2A1,1,0,0,0,7,2V7H2A1,1,0,0,0,2,9H7v5a1,1,0,0,0,2,0V9h5a1,1,0,0,0,0-2Z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                        {
                            show ? <div className="IncomeSharingFaqs-panel__body">
                                <p>Current batch is focussed on 2022, 2021 and 2020 passouts.</p>
                            </div> : null
                        }

                    </div>
                    <div className="IncomeSharingFaqs-panel">
                        <button className="IncomeSharingFaqs-panel__header" onClick={() => setShowtwo(!showtwo)}>Can I apply if I am non cse branch?
                            <span className="IncomeSharingFaqs-panel__header-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                    <path fill="currentColor" d="M14,7H9V2A1,1,0,0,0,7,2V7H2A1,1,0,0,0,2,9H7v5a1,1,0,0,0,2,0V9h5a1,1,0,0,0,0-2Z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                        {
                            showtwo ? <div className="IncomeSharingFaqs-panel__body">
                                <p>yes, if are willing to work hard on your coding skiils, you can apply.</p>
                            </div> : null
                        }

                    </div>
                    <div className="IncomeSharingFaqs-panel">
                        <button className="IncomeSharingFaqs-panel__header" onClick={() => setShowthree(!showthree)}>Do I need to have storing coding skills?
                            <span className="IncomeSharingFaqs-panel__header-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                    <path fill="currentColor" d="M14,7H9V2A1,1,0,0,0,7,2V7H2A1,1,0,0,0,2,9H7v5a1,1,0,0,0,2,0V9h5a1,1,0,0,0,0-2Z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                        {
                            showthree ? <div className="IncomeSharingFaqs-panel__body">
                                <p>No, you do not need to have strong coding skills. you just need to have good fundamentals and willingness to work hard.</p>
                            </div> : null
                        }

                    </div>
                    <div className="IncomeSharingFaqs-panel">
                        <button className="IncomeSharingFaqs-panel__header" onClick={() => setShowfour(!showfour)}>How can I apply?
                            <span className="IncomeSharingFaqs-panel__header-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                    <path fill="currentColor" d="M14,7H9V2A1,1,0,0,0,7,2V7H2A1,1,0,0,0,2,9H7v5a1,1,0,0,0,2,0V9h5a1,1,0,0,0,0-2Z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                        {
                            showfour ? <div className="IncomeSharingFaqs-panel__body">
                                <p>Click on apply button on the top banner and fill the complete application form.</p>
                            </div> : null
                        }

                    </div>

                </div>

            </div>

        </>
    )
}

export default ElevationAcademy;