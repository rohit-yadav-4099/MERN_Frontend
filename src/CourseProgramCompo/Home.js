import React, { useEffect, useState } from "react";
import '../CSScompo/Home.css';
import { NavLink } from "react-router-dom";

const Home = () => {

    const [data, setData] = useState([])
    console.log(data)
    const [show, setShow] = useState(false)

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
            <div className="Home-main">
                <div className="Home-main-left">
                    <h1 className="Home-main-left-heading">Start your journey of success</h1>
                    <h1 className="Home-main-left-subheading">Personalised Coding Programs to make coding easier for you</h1>
                    <h1 className="Home-main-left-list-item--text">Want to know how PrepBytes can help you?</h1>
                    <div className="Home-main-left-buttons">
                        <div className="Home-main-left-buttons--button">
                            <button className="Home-main-left-buttons--button-enroll">Know More</button>
                        </div>
                    </div>
                </div>
                <div className="Home-main-right">
                    <img className="Home-main-right-img" src="./image/Masterhead(web).svg" alt="header" />
                </div>
            </div>

            <div className="Home-achivement">
                <div className="Home-achivement-container">

                    <div className="Home-achivement-lazyload">
                        <picture>
                            {/* <source srcset="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Google-launchpad.webp 1x" type="image/webp" />
                            <source srcset="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Google-launchpad.png 1x" type="image/jpeg" /> */}
                            <img loading="lazy" class="Home__achievement-container-icon" src=".\image\Google-launchpad.webp" height="57" width="130" alt="err" />
                        </picture>
                    </div>

                    <div className="Home-achivement-lazyload">
                        <picture>
                            <img loading="lazy" class="Home__achievement-container-icon" src=".\image\future-skills-homepage.webp" height="57" width="130" alt="err" />
                        </picture>
                    </div>

                    <div className="Home-achivement-lazyload">
                        <picture>
                            <img loading="lazy" class="Home__achievement-container-icon" src=".\image\she-leads.webp" height="57" width="130" alt="err" />
                        </picture>
                    </div>
                    <div className="Home-achivement-lazyload">
                        <picture>
                            <img loading="lazy" class="Home__achievement-container-icon" src="./image/aws-ed-start.webp" height="57" width="130" alt="err" />
                        </picture>
                    </div>
                </div>
            </div>

            <div>
                <section className="Coding-Journey">
                    <div className="Coding-Journey-main">
                        <div className="Coding-Journey-main-left">
                            <div className="Home-achivement-lazyload">
                                <img className="Coding-Journey-main-left-img" src="./image/stairs_of_approach(web).svg" alt="coder" loading="lazy" />
                            </div>
                        </div>
                        <div className="Coding-Journey-main-right">
                            <p className="Coding-Journey-main-right-heading">How PrepBytes Mentorship driven Personalised Learning works?</p>
                            <p className="Coding-Journey-main-right-subheading"></p>
                            <div className="Coding-Journey-main-right-container">
                                <div className="Home-achivement-lazyload">
                                    <img src="./image/stairs_of_approach(web).svg" alt="coder" class="CodingJourney__main-right--img" loading="lazy" />
                                </div>
                                <div className="Coding-Journey-main-right-container-card-one">
                                    <div className="Coding-Journey-main-right-container-card-one-left">
                                        <p className="Coding-Journey-main-right-container-card-one-left-heading">Personalised Lectures &amp; Weekly Plan</p>
                                        <div className="Coding-Journey-main-right-container-card-one-left-box">
                                            <img className="Coding-Journey-main-right-container-card-one-left-box-img" src=".\image\personalised_learning.svg" width="46" height="116" alt="err" />
                                            <p className="Coding-Journey-main-right-container-card-one-left-box-text">Get learning videos &amp; weekly plan based on your coding skills</p>
                                        </div>
                                    </div>
                                    <div className="Coding-Journey-main-right-container-card-one-right">
                                        <img src=".\image\arrow.svg" className="Coding-Journey-main-right-container-card-one-right-icon" alt="arrow" />
                                    </div>
                                </div>
                                <div className="Coding-Journey-main-right-container-card-two">
                                    <div className="Coding-Journey-main-right-container-card-two-left">
                                        <img src=".\image\arrow2.svg" className="Coding-Journey-main-right-container-card-two-left-icon" alt="arrow" />
                                    </div>
                                    <div className="Coding-Journey-main-right-container-card-two-right">
                                        <p className="Coding-Journey-main-right-container-card-two-right-heading">Personalised Coding Assignments</p>
                                        <div className="Coding-Journey-main-right-container-card-two-right-box">
                                            <img className="Coding-Journey-main-right-container-card-two-right-box-img" src=".\image\code_live_with_experts.svg" width="46" height="116" alt="err" />
                                            <p className="Coding-Journey-main-right-container-card-two-right-box-text">Practice coding questions that adapts based on your progress</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="Coding-Journey-main-right-container-card-one">
                                    <div className="Coding-Journey-main-right-container-card-one-left">
                                        <p className="Coding-Journey-main-right-container-card-one-left-heading">Doubt Solving by Coding Experts</p>
                                        <div className="Coding-Journey-main-right-container-card-one-left-box">
                                            <img className="Coding-Journey-main-right-container-card-one-left-box-img" src=".\image\ask_doubts_totally_live.svg" width="46" height="116" alt="err" />
                                            <p className="Coding-Journey-main-right-container-card-one-left-box-text">Getting Stuck While Coding? Get all your doubts resolved.</p>
                                        </div>
                                    </div>
                                    <div className="Coding-Journey-main-right-container-card-one-right">
                                        <img src=".\image\arrow.svg" className="Coding-Journey-main-right-container-card-one-right-icon" alt="arrow" />
                                    </div>
                                </div>
                                <div className="Coding-Journey-main-right-container-card-two">
                                    <div className="Coding-Journey-main-right-container-card-two-left">
                                        <img src=".\image\arrow2.svg" className="Coding-Journey-main-right-container-card-two-left-icon" alt="arrow" />
                                    </div>
                                    <div className="Coding-Journey-main-right-container-card-two-right">
                                        <p className="Coding-Journey-main-right-container-card-two-right-heading">CODE LIVE WITH Top Coders</p>
                                        <div className="Coding-Journey-main-right-container-card-two-right-box">
                                            <img className="Coding-Journey-main-right-container-card-two-right-box-img" src=".\image\personalised_practice.svg" width="46" height="116" alt="err" />
                                            <p className="Coding-Journey-main-right-container-card-two-right-box-text">Topic wise Live Coding sessions with top rated coders</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="Coding-Journey-main-right-container-card-three">
                                    <img className="Coding-Journey-main-right-container-card-three-img" src=".\image\achieve_your_coding_dream.svg" alt="err" />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

            <div className="course-type">
                <div className="course-type-main">
                    <p className="course-type-main-heading">I want to</p>
                    <div className="course-type-main-container">
                        {data.filter((item) => item.id === 49).map(
                            (item, index) => {
                                return (
                                    <div key={index}>
                                        <NavLink to="/development-programs/online-full-stack-developer-mern-certification-program">
                                            <div className="course-type-cards">
                                                <div className="course-type-cards-image">
                                                    <img src={item.image} className="course-type-cards-image-img" />
                                                </div>
                                                <h2 className="course-type-cards-name">{item.name}</h2>
                                                <div className="course-type-cards-arrow">
                                                    <span className="course-type-cards-arrow-image">
                                                        <div className="course-type-cards-arrow-img">
                                                            <img src="\image\rightarrow.svg" />
                                                        </div>
                                                    </span>
                                                </div>

                                            </div>
                                        </NavLink>

                                    </div>
                                )
                            }
                        )}
                        {data.filter((item) => item.id === 50).map(
                            (item, index) => {
                                return (
                                    <div key={index}>
                                        <NavLink to="/prepbytes-expert-coder/master-competitive-programming">
                                            <div className="course-type-cards">
                                                <div className="course-type-cards-image">
                                                    <img src={item.image} className="course-type-cards-image-img" />
                                                </div>
                                                <h2 className="course-type-cards-name">{item.name}</h2>
                                                <div className="course-type-cards-arrow">
                                                    <span className="course-type-cards-arrow-image">
                                                        <div className="course-type-cards-arrow-img">
                                                            <img src="\image\rightarrow.svg" />
                                                        </div>
                                                    </span>
                                                </div>

                                            </div>
                                        </NavLink>

                                    </div>
                                )
                            }
                        )}
                        {data.filter((item) => item.id === 51).map(
                            (item, index) => {
                                return (
                                    <div key={index}>
                                        <NavLink to="/css-project">
                                            <div className="course-type-cards">
                                                <div className="course-type-cards-image">
                                                    <img src={item.image} className="course-type-cards-image-img" />
                                                </div>
                                                <h2 className="course-type-cards-name">{item.name}</h2>
                                                <div className="course-type-cards-arrow">
                                                    <span className="course-type-cards-arrow-image">
                                                        <div className="course-type-cards-arrow-img">
                                                            <img src="\image\rightarrow.svg" />
                                                        </div>
                                                    </span>
                                                </div>

                                            </div>
                                        </NavLink>

                                    </div>
                                )
                            }
                        )}

                    </div>

                </div>

            </div>

            <div className="Home-jurney">
                <div className="Home-jurney-main">
                    <div className="Home-jurney-main-left">
                        <p class="Home-jurney-main-left-heading">Are you an Experienced Professional willing to Switch?</p>
                        <div className="Home-jurney-main-left-container">
                            <div className="Home-jurney-main-left-container-card">
                                <div className="Home-jurney-main-left-container-card-image">
                                    <img src="\image\industry_vetted_curriculum.svg" className="Home-jurney-main-left-container-card-image-img" />
                                </div>
                                <p className="Home-jurney-main-left-container-card-text">INDUSTRY VETTED CURRICULUM STRUCTURED FOR YOU</p>
                            </div>
                            <div className="Home-jurney-main-left-container-card">
                                <div className="Home-jurney-main-left-container-card-image">
                                    <img src="\image\real_life_projects.svg" className="Home-jurney-main-left-container-card-image-img" />
                                </div>
                                <p className="Home-jurney-main-left-container-card-text">REAL LIFE PROJECCT BUILT ON DEMAND TECH STACK</p>
                            </div>
                            <div className="Home-jurney-main-left-container-card">
                                <div className="Home-jurney-main-left-container-card-image">
                                    <img src="\image\exclusive_placement.svg" className="Home-jurney-main-left-container-card-image-img" />
                                </div>
                                <p className="Home-jurney-main-left-container-card-text">EXCLUSIVE PLACEMENT SUPPORT TEAM WITH JOB GURANTEE</p>
                            </div>

                        </div>

                        <p className="Home-jurney-main-left-container-text"> <span> PrepBytes Elevation Academy</span> -  4 months Full Stack Program with Job Guarantee</p>
                        <button className="Home-jurney-main-left-container-btn">Know more</button>

                    </div>
                    <div className="Home-jurney-main-right">
                        <p className="Home-jurney-main-right-heading">Are you an Experienced Professional willing to Switch?</p>
                        <div className="Home-jurney-main-right-box">
                            <div className="Home-jurney-main-right-box-left">
                                <div className="Home-jurney-main-right-box-left-image">
                                    <img className="Home-jurney-main-right-box-left-image-img" src="\image\for_2020(1st+Image).svg" alt="coder" />
                                </div>

                            </div>
                            <div className="Home-jurney-main-right-box-right">
                                <div className="Home-jurney-main-right-box-right-top">
                                    <img className="Home-jurney-main-right-box-right-top-img" src="\image\tools_for_2020.svg" alt="girl thinking" />
                                </div>
                                <div className="Home-jurney-main-right-box-right-bottom">
                                    <div className="Home-jurney-main-right-box-right-bottom-image">
                                        <img className="Home-jurney-main-right-box-right-bottom-image-img" src="\image\image22020.svg" />
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div>
                <div className="know-detail">
                    <div className="know-detail-main">
                        <div className="know-detail-main-top">
                            <div className="know-detail-main-top-left">
                                <div className="know-detail-main-top-left-back">
                                    <img src="\image\know_details_back.svg" alt="backimage" />
                                </div>
                                <div className="know-detail-main-top-left-box">
                                    <div className="know-detail-main-top-left-box-top">
                                        <div className="know-detail-main-top-left-box-top-image">
                                            <img src="\image\mamta_mentor.png" className="know-detail-main-top-left-box-top-image-img" />

                                        </div>

                                    </div>
                                    <p className="know-detail-main-top-left-box-text">Mamta Kumari</p>
                                    <p className="know-detail-main-top-left-box-subtext">Co-Founder PrepBytes</p>
                                    <div className="know-detail-main-top-left-box-company">
                                        <img src="\image\Amazon+sam.png" className="know-detail-main-top-left-box-company-img" alt="comapny" />

                                    </div>

                                </div>

                            </div>
                            <div className="know-detail-main-top-right">
                                <p class="know-detail-main-top-right-heading">Attend Free sessions with industry experts and get valuable guidance</p>
                                <div className="know-detail-main-top-right-container">
                                    <div className="know-detail-main-top-right-container-box">
                                        <p className="know-detail-main-top-right-container-box-text">How to master competitive coding?</p>
                                        <button className="know-detail-main-top-right-container-box-text-btn">Know More</button>

                                    </div>
                                    <div className="know-detail-main-top-right-container-box">
                                        <p class="know-detail-main-top-right-container-box-text">How to crack coding interviews?</p>
                                        <button className="know-detail-main-top-right-container-box-text-btntwo">Know More</button>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className="know-detail-main-bottom">
                            <div className="know-detail-main-bottom-container">
                                {data.filter((item) => item.id >= 52 && item.id <= 55).map(
                                    (item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className="know-detail-main-bottom-container-card">
                                                    <div className="know-detail-main-bottom-container-card-image">
                                                        <img src={item.image} className="know-detail-main-bottom-container-card-image-img" alt="image" />
                                                    </div>
                                                    <p className="know-detail-main-bottom-container-card-name">{item.name}</p>
                                                    <p className="know-detail-main-bottom-container-card-text">{item.text}</p>

                                                </div>

                                            </div>
                                        )
                                    }
                                )}

                            </div>

                        </div>

                    </div>

                </div>
                <div>
                    <div className="Home-poolexperts">
                        <div className="Home-poolexperts-image">
                            <img src="\image\Bespoke+Mentors.webp" className="Home-poolexperts-image-img" />

                        </div>
                        <div className="Home-poolexperts-image">
                            <img src="\image\Bespoke+Mentors.webp" className="Home-poolexperts-image-img-mob" />

                        </div>

                    </div>
                </div>
            </div>

            <div className="PrepBytePlaced-student">
                <img className="PrepBytePlaced-student-img" src="\image\you_could_be_the(web_1366).png" alt="placedStudents" />
            </div>

            <div className="prepByttes-mentors">
                <div className="prepByttes-mentors-main">
                    <p className="PrepMentors__main--heading">PrepBytes Mentors</p>
                    <p className="PrepMentors__main--subheading">PrepBytes students get mentored by industry experts who have achieved in their careers and are passionate about helping students achieve their dream.</p>
                    <div className="prepByttes-mentors-container">
                        {data.filter((item) => item.id >= 115 && item.id <= 120).map(
                            (item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="PrepMentors__main--container-card">
                                            <div className="PrepMentors__main--container-card-image">
                                                <div className="lazyload-wrapper ">
                                                    <img className="PrepMentors__main--container-card-image-background--img" alt="mentor" src={item.imagetwo} />
                                                </div>
                                                <div className="lazyload-wrapper ">
                                                    <img className="PrepMentors__main--container-card-image--img" alt="mentor" src={item.image} />
                                                </div>
                                            </div>
                                            <div className="PrepMentors__main--container-card-text">
                                                <p className="PrepMentors__main--container-card-text--name">{item.name}</p>
                                                <p className="PrepMentors__main--container-card-text--designation">{item.about}</p>
                                            </div>
                                            <div className="PrepMentors__main--container-card-info">
                                                <p className="PrepMentors__main--container-card-info--text">{item.text}</p>
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

            <div className="CBMBanner">
                <div className="CBMBanner-main">
                    <img className="CBMBanner_bg-img" src="\image\CBM-WEB.webp" loading="lazy" alt="campus-manager" />
                    <div className="CBMBanner_info-cont">
                        <h3 className="CBMBanner_info-title">Want to represent your college?</h3>
                        <div className="CBMBanner_info-text">
                            <span>
                                <p>Join <strong style={{ color: "#00afec" }}>PrepBytes Campus Business Manager Internship program.</strong></p>
                            </span>
                        </div>
                        <NavLink className="MuiButtonBase-root MuiButton-root MuiButton-text CBMBanner_cta" target="_blank" to="https://www.prepbytes.com/campus-business-manager">
                            <span className="MuiButton-label">Join Now</span>
                            <span className="MuiTouchRipple-root"></span>
                        </NavLink>
                    </div>
                </div>

            </div>

            <div className="Community">
                <div className="Community-main">
                    <p className="Community__main--heading">PrepBytes for <span>Mentors &amp; Colleges</span></p>
                    <p class="Community__main--subheading">"Join PrepBytes in the journey to reach more colleges and mentor more students"</p>
                    <div className="Community-main-container">
                        {data.filter((item) => item.id >= 121 && item.id <= 122).map(
                            (item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="Community__main-container-card">
                                            <div className="Community__main-container-card-image">
                                                <div className="lazyload-wrapper ">
                                                    <img src={item.image} alt="community" className="Community__main-container-card-image--img" width="354" height="214" />
                                                </div>
                                            </div>
                                            <p className="Community__main-container-card--heading">{item.name}</p>
                                            <p className="Community__main-container-card--subheading">{item.text}</p>
                                            <div class="Community__main-container-card-button">
                                                <NavLink to="https://docs.google.com/forms/d/1lbjX6WZtWTwPorzrwlrFu3EwY3X4w3QWQH_Fhd_eafw/viewform?ts=602f5280" target="_blank" className="Community__main-container-card-button--btn">Know More</NavLink>
                                            </div>
                                        </div>

                                    </div>
                                )
                            }
                        )}

                    </div>

                </div>

            </div>

            <div>
                <div className="Popular-blog-Main">
                    <p className="PopularBlogs__main--heading">Most Popular Blogs</p>
                    <div className="Popular-blog-Main-blog">
                        {data.filter((item) => item.id >= 123 && item.id <= 125).map(
                            (item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="PopularBlogs__main-container-card">
                                            <div className="PopularBlogs__main-container-card-image">
                                                <div className="lazyload-wrapper ">
                                                    <img className="PopularBlogs__main-container-card-image--img" src={item.image} alt="blog" />
                                                </div>
                                            </div>
                                            <p className="PopularBlogs__main-container-card--heading">{item.text}</p>
                                            <div className="PopularBlogs__main-container-card-button">
                                                <NavLink target="_blank" className="PopularBlogs__main-container-card-button--btn" to="/preparation-bytes/top-50-c-programming-interview-questions-answers">Read Now</NavLink>
                                            </div>
                                        </div>

                                    </div>
                                )
                            }
                        )}

                    </div>

                </div>
                <div className="PopularBlogs"></div>
            </div>

            <div className="GetCallback">
                <div className="GetCallback-main">
                    <div className="GetCallback-main-container">
                        <div className="GetCallback-main-container-left">
                            <p className="GetCallBack__main-container-left--heading">Talk to our experts</p>
                            <p className="GetCallBack__main-container-left--subheading">Still Confused how PrepBytes can help you achieve your dream? Talk to our experts</p>
                            <div className="GetCallBack__main-container-left-image">
                                <div className="lazyload-wrapper GetCallBack__main-container-left-image-wrapper">
                                    <img src="\image\call_back.svg" className="GetCallBack__main-container-left-image--img" />
                                </div>
                            </div>

                        </div>
                        <div className="getCallBack-main-container-right">
                            <form>
                                <input className="GetCallBack__main-container-right--name" type="text" placeholder="Name" name="name" id="name" required />
                                <input className="GetCallBack__main-container-right--email" type="email" placeholder="Email" name="email_id" id="email_id" required />
                                <input className="GetCallBack__main-container-right--email" type="tel" placeholder="Phone" name="phone" id="phone" required />
                                <textarea placeholder="Query" rows="20" name="query" id="query" cols="40" className="GetCallBack__main-container-right--textarea" autocomplete role="textbox" required textarea />
                                <button type="Submit" className="GetCallBack__main-container-right--button" onClick={() => setShow(!show)}>Request a call back</button>
                                {
                                    show ?

                                        <p>Thanks for registering with us. Our Team will get back to you soon.</p> : null}
                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Home;