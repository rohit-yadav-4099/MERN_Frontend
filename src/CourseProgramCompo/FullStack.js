import React, { useEffect, useState } from 'react'
import '../CSScompo/FullStack.css';
import { NavLink } from 'react-router-dom';

const FullStack = () => {

  const [data, setData] = useState([])
  console.log(data)
  const [show, setShow] = useState(false)
  const [showtwo, setShowtwo] = useState(false)
  const [showthree, setShowthree] = useState(false)
  const [showfour, setShowfour] = useState(false)
  const [showfive, setShowfive] = useState(false)
  const [showsix, setShowsix] = useState(false)
  const [showsevan, setShowsevan] = useState(true)
  const [showeight, setShoweight] = useState(false)
  const [shownine, setShownine] = useState(false)
  const [showten, setShowten] = useState(false)
  const [showoneone, setShowoneone] = useState(false)
  const [showonetwo, setShowonetwo] = useState(false)

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
    <div>
      <div className="StackHeader">
        <div className="StackHeader-main">
          <div className="StackHeader-main__left">
            <p className="StackHeader-main__left--partner">Partner with</p>
            <div className="StackHeader-main__left--top">
              <img src="\image\future-skills-homepage.webp" />
            </div>
            <h1 className="StackHeader-main__left--heading">Learn Full Stack Web Development &amp; Build Real World Projects using React &amp; Node</h1>
            <p className="StackHeader-main__left--text">Full Stack Web Development Certification Course - Accredited by Nasscom, approved by the Government India.</p>
            <div className="StackHeader-main__left-buttons">
              <div className="StackHeader-main__left-buttons--button StackHeader-main__left-buttons-secondary">
                <a href="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/PrepBytes+Full+Stack+Development+MERN+Certification+Program.pdf" target="_blank">
                  <button className="StackHeader-main__left-buttons--button-syllabus">Download Syllabus</button>
                </a>
              </div>
            </div>
          </div>
          <div className="StackHeader_main__right">

            <div className="StackHeader_box box_1">
              <p className="StackHeader_box__heading">Next Batch starts: 1st May, 2023</p>
              <p className="StackHeader_box__text">Limited seats available</p>
            </div>
            <div className="StackHeader_box box_2">
              <p className="StackHeader_box__heading">Program Duration: 4 - 5 months</p>
              <p className="StackHeader_box__text">15-20 hours/week</p>
            </div>
            <div className="StackHeader_box box_3">
              <p className="StackHeader_box__heading">Learning Format</p>
              <p className="StackHeader_box__text">Recorded Lectures + Online Live Classes</p>
            </div>
          </div>
        </div>
      </div>

      <div id="BatchDetails__section_container_id" className="BatchDetails__section_container">
        <h4 className="BatchDetails__heading"> SELECT BATCH </h4>
        <div className="BatchDetails__section">
          <div className="BatchDetails__batch_text_section">
            <div className="BatchComponent__date_container">
              <div className="BatchComponent_radio_buttons BatchComponent_radio_buttons_shadow">
                <label className="BatchComponent_radio_label BatchComponent_radio_label_top_no">
                  <input className="BatchComponent__radio_input" type="radio" checked />
                  <span className="BatchComponent__radio_text_container">
                    <h5 className="BatchComponent__radio_batch_start_date">1st May</h5>
                    <p className="BatchComponent__reg_end_date">
                      Enrolment Started
                    </p>
                  </span>
                </label>
              </div>
              <div className="BatchComponent_radio_buttons ">
                <label className="BatchComponent_radio_label BatchComponent_radio_label_top_no">
                  <input className="BatchComponent__radio_input" type="radio" />
                  <span className="BatchComponent__radio_text_container">
                    <h5 className="BatchComponent__radio_batch_start_date">15th May</h5>
                    <p className="BatchComponent__reg_end_date">
                      Enrolment Started
                    </p>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="BatchDetails__enrollNow_container">
            <div className="BatchDetails__actual_priceamount_no_discount">₹ 30000</div>
            <div className="BatchDetails__cta_container">
              <div className="BatchDetails__enroll_now_button_box">
                <button className="BatchDetails__enroll_now_button">Enroll Now</button>
              </div>
              <div className="BatchDetails__try_free">
                <button className="BatchDetails__try_free_button">Try for free</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="StackTools">
        <div className="StackTools__left">
          <p className="StackTools__left--heading">Languages &amp; Tools you will learn</p>
          <p className="StackTools__left--text">Start learning web development from basics of HTML, CSS, Javascript.Master latest technologies like React, Node, Express. Get hands on Github, MongoDB, Google Analytics, Facebook Analytics</p>
        </div>
        <div className="StackTools__right">
          <img loading="lazy" src="\FullStack\tools1.png" class="StackTools__right--img" alt="tools" />
        </div>
      </div>

      <div className='fullstackProgram-main'>
        <div className='fullstackProgram-main-left'>
          <img loading="lazy" class="StackProgram__main__left-img" style={{ display: "flex" }} src="\FullStack\girlimage.webp" alt="girl" />
        </div>
        <div className='fullstackProgram-main-right'>
          <p class="StackProgram__main__right--heading">What you will be after finishing the program?</p>
          <div className="StackProgram__main__right--box">
            {data.filter((item) => item.id >= 97 && item.id <= 99).map(
              (item, index) => {
                return (
                  <div key={index}>
                    <div className="StackProgram__main__right--box-one">
                      <div className="StackProgram__main__right--box-one--icon-container">
                        <img loading="lazy" src={item.image} alt="excellent" className="StackProgram__main__right--box-one--icon-container--icon" />
                      </div>
                      <div className="StackProgram__main__right--box-one--text-container">
                        <p className="StackProgram__main__right--box-one--text-container--text">{item.text}</p>
                      </div>
                    </div>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </div>

      <div className='StackCompanies-main'>
        <p className="StackCompanies__main--heading">Companies that hire for the roles</p>
        <div className='StackCompanies-main-container'>
          {data.filter((item) => item.id >= 100 && item.id <= 102).map(
            (item, index) => {
              return (
                <div key={index}>
                  <div className='StackCompanies-main-container-card'>
                    <p className="StackCompanies__main--container-card--heading">{item.name}</p>
                    <p className="StackCompanies__main--container-card--text">{item.text}</p>
                    <div className='StackCompanies__main--container-card-companies'>
                      <div className='StackCompanies__main--container-card-companies-top'>
                        <img src={item.image} className='StackCompanies__main--container-card-companies-top-img' alt='company' />
                        <img src={item.imageone} className='StackCompanies__main--container-card-companies-top-img-two' alt='company' />
                      </div>
                      <div className='StackCompanies__main--container-card-companies-middle'>
                        <img src={item.imagetwo} className='StackCompanies__main--container-card-companies-middle-img' alt='company' />
                      </div>
                      <div className='StackCompanies__main--container-card-companies-bottom'>
                        <img src={item.imagethree} className='StackCompanies__main--container-card-companies-top-img' alt='company' />
                        <img src={item.imagefour} className='StackCompanies__main--container-card-companies-top-img-two' alt='company' />
                      </div>

                    </div>

                  </div>

                </div>
              )
            }
          )}

        </div>

      </div>

      <div className="Statistics">
        <div className='Statistics-main'>
          <div className='Statistics-main-left'>
            <p className="Statistics__main-left-container--heading">Industry Growth</p>
            <div className='Statistics__main-left-container-block'>
              {data.filter((item) => item.id >= 103 && item.id <= 104).map(
                (item, index) => {
                  return (
                    <div key={index}>
                      <div className="Statistics__main-left-container--block-container-block">
                        <img src={item.image} alt="growth" className="Statistics__main-left-container--block-container-block--icon" />
                        <div className="Statistics__main-left-container--block-container-block-box">
                          <p className="Statistics__main-left-container--block-container-block-box-heading">{item.name}</p>
                          <p className="Statistics__main-left-container--block-container-block-box-text">{item.text}</p>
                        </div>
                      </div>

                    </div>
                  )
                }
              )}

            </div>

          </div>
          <div className="Statistics__main-right-container">
            <p className="Statistics__main-right-container--heading">Annual Salary</p>
            <div className="Statistics__main-right-container--image">
              <img src="\FullStack\sharegladisor.svg" alt="graph" className="Statistics__main-right-container--image-img" />
            </div>
            <p className="Statistics__main-right-container--source">Source:
              <span>Glassdoor</span>
            </p>
          </div>

        </div>

      </div>

      <div className='StackMentors'>
        <div className='StackMentors-main'>
          <p className="StackMentors__main--heading">Mentors &amp; Instructors</p>
          <div className='StackMentors-main-container'>
            {data.filter((item) => item.id >= 105 && item.id <= 107).map(
              (item, index) => {
                return (
                  <div key={index}>
                    <div className="StackMentors__main--container-card">
                      <div className="StackMentors__main--container-card-image">
                        <img loading="lazy" className="StackMentors__main--container-card-image--img" src={item.image} alt="mentor" />
                      </div>
                      <p className="StackMentors__main--container-card--heading">{item.name}</p>
                      <p className="StackMentors__main--container-card--text">{item.text}</p>
                    </div>

                  </div>
                )
              }
            )}

          </div>

        </div>

      </div>

      <div className='StackSyllabus-main'>
        <div className="StackSyllabus__main-top">
          <div className="StackSyllabus__main-top-container">
            <p className="StackSyllabus__main-top-container--heading">Program Syllabus &amp; Projects</p>
            <div className="StackSyllabus__main-top-container--right">
              <NavLink to="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/PrepBytes+Full+Stack+Development+MERN+Certification+Program.pdf" target="_blank">
                <button className="StackSyllabus__main-top-container--right-button" fdprocessedid="6610x7">Download Syllabus</button>
              </NavLink>
            </div>
          </div>
          <p className="StackSyllabus__main-top--text">We have reverse engineered our syllabus by talking to the best companies and understanding what skills the industry needs the most right now.</p>
        </div>
        <div className="StackSyllabus">
          <div className="StackSyllabus__course">
            <div className="StackSyllabusContent__course-section">
              <div className="StackSyllabus__course-top">
                <div className="StackSyllabus__course-top-main">
                  <p className="StackSyllabus__course-top-main--text">Web Development Basics - HTML, CSS, BootStrap</p>
                  <p className="StackSyllabus__course-top-main--done">Week 1-2</p>
                </div>
                <p className="StackSyllabus__course-top--text">Get to learn how websites work. Start your web development journey with the basics of HTML and learn how to create impressive websites using HTML, CSS, and Bootstrap. </p>
              </div>
              <div className="StackSyllabus__course-bottom null">
                <p className="StackSyllabus__course-bottom--chapter">
                  <span>Course Content</span>
                </p>
                <button className="StackSyllabus__course-bottom--button" onClick={() => setShow(!show)}>View Details</button>
              </div>
              {show ?
                <div className="StackSyllabusContent__course-content">
                  <div className="StackSyllabus__course-content">
                    <ul className="list">
                      <li className="list__item">How websites work</li>
                      <li className="list__item">Web Development Overview - Advantages</li>
                      <li className="list__item">HTML Introduction</li>
                      <li className="list__item">Structure of Webpage</li>
                      <li className="list__item">HTML Tags</li>
                      <li className="list__item">Texts, Images, Videos</li>
                      <li className="list__item">Lists, Forms, Tables</li>
                      <li className="list__item">Links, Anchor tags</li>
                      <li className="list__item">HTML Divs</li>
                      <li className="list__item">CSS Introduction</li>
                      <li className="list__item">Inline vs Internal vs External styling</li>
                      <li className="list__item">CSS Display</li>
                      <li className="list__item">CSS Font Styling, background, margin, padding</li>
                      <li className="list__item">Styling Lists, Tables, Forms</li>
                      <li className="list__item">FontAwesome</li>
                      <li className="list__item">Transitionals, Transformations, Animations</li>
                      <li className="list__item">Styling button</li>
                      <li className="list__item">Tool tip, Box Sizing, Flex, Grid</li>
                      <li className="list__item">Bootstrap containers</li>
                      <li className="list__item">Bootstrap Tables,Images, Colors</li>
                      <li className="list__item">Bootstrap Alerts, Buttons</li>
                      <li className="list__item">Bootstrap Spinners, Cards, Pagination, Drop Down</li>
                      <li className="list__item">Bootstrap Corousel</li>
                    </ul>
                  </div>
                </div> : null}
            </div>
          </div>
        </div>
        <div className="StackSyllabus">
          <div className="StackSyllabus__course">
            <div className="StackSyllabusContent__course-section">
              <div className="StackSyllabus__course-top">
                <div className="StackSyllabus__course-top-main">
                  <p className="StackSyllabus__course-top-main--text">Javascript</p>
                  <p className="StackSyllabus__course-top-main--done">week 3-4</p>
                </div>

                <p className="StackSyllabus__course-top--text">Deep dive into the world of Javascript, one of the commonly used languages for web development. Explore the basics of JS, promises, closures, and complete Javascript.</p>
              </div>
              <div className="StackSyllabus__course-bottom null">
                <p className="StackSyllabus__course-bottom--chapter">
                  <span>Course Content</span>
                </p>
                <button className="StackSyllabus__course-bottom--button" onClick={() => setShowtwo(!showtwo)}>View Details</button>
              </div>
              {
                showtwo ?

                  <div className="StackSyllabusContent__course-content">
                    <div className="StackSyllabus__course-content">
                      <ul className="list">
                        <li className="list__item">Introduction to Javascript</li>
                        <li className="list__item">Variables, scoping, Data type</li>
                        <li className="list__item">Strings and Numbers</li>
                        <li className="list__item">Operators and loops</li>
                        <li className="list__item">Functions</li>
                        <li className="list__item">Arrays and Objects</li>
                        <li className="list__item">Data Structures - List, Stack, Queues, Maps</li>
                        <li className="list__item">Hashing</li>
                        <li className="list__item">Understanding and working with DOM</li>
                        <li className="list__item">Developer tools in Browsers</li>
                        <li className="list__item">Prototypes</li>
                        <li className="list__item">Closures</li>
                        <li className="list__item">Browser Local Storage</li>
                        <li className="list__item">Jquery, Ajax</li>
                        <li className="list__item">Promises</li>
                        <li className="list__item">ES5 vs ES6 vs ES7</li>
                        <li className="list__item">Eventloop in Javascript</li>
                      </ul>
                    </div>
                  </div> : null}
            </div>
          </div>
        </div>
        <div className="StackSyllabus">
          <div className="StackSyllabus__course">
            <div className="StackSyllabusContent__course-section">
              <div className="StackSyllabus__course-top">
                <div className="StackSyllabus__course-top-main">
                  <p className="StackSyllabus__course-top-main--text">ReactJS</p>
                  <p className="StackSyllabus__course-top-main--done">week 5-7</p>
                </div>
                <p className="StackSyllabus__course-top--text">Most of the websites getting built nowadays are using React, so why should you stay behind. Learn all the components of React, understand how React is better, and don't just learn, build amazing web apps using react.</p>
              </div>
              <div className="StackSyllabus__course-bottom null">
                <p className="StackSyllabus__course-bottom--chapter">
                  <span>Course Content</span>
                </p>
                <button className="StackSyllabus__course-bottom--button" onClick={() => setShowthree(!showthree)}>View Details</button>
              </div>
              {
                showthree ?

                  <div className="StackSyllabusContent__course-content">
                    <div className="StackSyllabus__course-content">
                      <ul className="list">
                        <li className="list__item">React Intro</li>
                        <li className="list__item">Node installation</li>
                        <li className="list__item">Create an app using create-react-app</li>
                        <li className="list__item">Understanding basics of react app</li>
                        <li className="list__item">Understanding JSX</li>
                        <li className="list__item">Understanding virtual DOMS , Single page apps</li>
                        <li className="list__item">React Lifecycle</li>
                        <li className="list__item">States, class components vs functional components</li>
                        <li className="list__item">Event handling, props</li>
                        <li className="list__item">Building forms in React</li>
                        <li className="list__item">Routes</li>
                        <li className="list__item">Conditional Rendering</li>
                        <li className="list__item">Pure Components</li>
                        <li className="list__item">High order components</li>
                        <li className="list__item">Controlled vs Uncontrolled components</li>
                        <li className="list__item">Redux</li>
                        <li className="list__item">Babel, Webpack</li>
                        <li className="list__item">Axios, Creating a mock server</li>
                        <li className="list__item">SASS overview</li>
                      </ul>
                    </div>
                  </div> : null}
            </div>
          </div>
        </div>
        <div className="StackSyllabus">
          <div className="StackSyllabus__course">
            <div className="StackSyllabusContent__course-section">
              <div className="StackSyllabus__course-top">
                <div className="StackSyllabus__course-top-main">
                  <p className="StackSyllabus__course-top-main--text">NodeJs</p>
                  <p className="StackSyllabus__course-top-main--done">week 7-9</p>
                </div>
                <p className="StackSyllabus__course-top--text">Always thinking about how to build servers? Its time to build one. Learn about express, security, authentication, restricting routes, hashing passwords, and JWT’s, and much more.</p>
              </div>
              <div className="StackSyllabus__course-bottom null">
                <p className="StackSyllabus__course-bottom--chapter">
                  <span>Course Content</span>
                </p>
                <button className="StackSyllabus__course-bottom--button" onClick={() => setShowfour(!showfour)}>View Details</button>
              </div>
              {
                showfour ?
                  <div className="StackSyllabusContent__course-content" >
                    <div className="StackSyllabus__course-content">
                      <ul className="list">
                        <li className="list__item">Creating a Simple Server</li>
                        <li className="list__item">Response types  - HTML, JSON</li>
                        <li className="list__item">Routing</li>
                        <li className="list__item">Express Introduction</li>
                        <li className="list__item">Intergrate Frontend and Backend</li>
                        <li className="list__item">Express Params and Query String</li>
                        <li className="list__item">Express Middleware</li>
                        <li className="list__item">API Authentication</li>
                        <li className="list__item">JWT Token, Passport.js</li>
                        <li className="list__item">Socket Programming</li>
                      </ul>
                    </div>
                  </div> : null}
            </div>
          </div>
        </div>
        <div className="StackSyllabus">
          <div className="StackSyllabus__course">
            <div className="StackSyllabusContent__course-section">
              <div className="StackSyllabus__course-top">
                <div className="StackSyllabus__course-top-main">
                  <p className="StackSyllabus__course-top-main--text">Databases - MongoDB</p>
                  <p className="StackSyllabus__course-top-main--done">week 10</p>
                </div>
                <p className="StackSyllabus__course-top--text">Want to know how companies manage all their Data and how on a click of a button all the data is there? Don't just learn, master the concepts of Databases. Be a pro in managing data using MongoDB.</p>
              </div>
              <div className="StackSyllabus__course-bottom null">
                <p className="StackSyllabus__course-bottom--chapter">
                  <span>Course Content</span>
                </p>
                <button className="StackSyllabus__course-bottom--button" onClick={() => setShowfive(!showfive)}>View Details</button>
              </div>
              {
                showfive ?
                  <div className="StackSyllabusContent__course-content" >
                    <div className="StackSyllabus__course-content">
                      <ul className="list">
                        <li className="list__item">SQL vs NOSQL</li>
                        <li className="list__item">MongoDB overview</li>
                        <li className="list__item">Installing MongoDB</li>
                        <li className="list__item">Connecting and Inserting Data</li>
                        <li className="list__item">Deleting and updating Data</li>
                        <li className="list__item">Understanding CRUD operations</li>
                      </ul>
                    </div>
                  </div> : null}
            </div>
          </div>
        </div>
        <div className="StackSyllabus">
          <div className="StackSyllabus__course">
            <div className="StackSyllabusContent__course-section">
              <div className="StackSyllabus__course-top">
                <div className="StackSyllabus__course-top-main">
                  <p className="StackSyllabus__course-top-main--text">Code Review + Deployment</p>
                  <p className="StackSyllabus__course-top-main--done">week 11</p>
                </div>
                <p className="StackSyllabus__course-top--text">Developers don't just write code, they write production level code. Learn how to write production-level code, deploy your projects, and flaunt it to the world.</p>
              </div>
              <div className="StackSyllabus__course-bottom null">
                <p className="StackSyllabus__course-bottom--chapter">
                  <span>Course Content</span>
                </p>
                <button className="StackSyllabus__course-bottom--button" onClick={() => setShowsix(!showsix)}>View Details</button>
              </div>
              {
                showsix ?

                  <div className="StackSyllabusContent__course-content" >
                    <div className="StackSyllabus__course-content">
                      <ul className="list">
                        <li className="list__item">Tools for Code review</li>
                        <li className="list__item">Understand Review Board</li>
                        <li className="list__item">Understanding Firebase</li>
                        <li className="list__item">Github</li>
                        <li className="list__item">Deploy using Netlify and Github</li>
                        <li className="list__item">Get code review by Software Developers</li>
                        <li className="list__item">Deploy all the projects</li>
                      </ul>
                    </div>
                  </div> : null}
            </div>
          </div>
        </div>
        <div className="StackSyllabus">
          <div className="StackSyllabus__course">
            <div className="StackSyllabusContent__course-section">
              <div className="StackSyllabus__course-top">
                <div className="StackSyllabus__course-top-main">
                  <p className="StackSyllabus__course-top-main--text">Projects</p>
                  <p className="StackSyllabus__course-top-main--done">week 3-16</p>
                </div>
                <p className="StackSyllabus__course-top--text">You will build 6+ projects during the whole program. Starting from building basic apps to bring your learning to the application, to building a real-world website that you can add in your resume or start your own business, you will do it all. The projects are carefully chosen by software developers for you.</p>
              </div>
              <div className="StackSyllabus__course-bottom null">
                <p className="StackSyllabus__course-bottom--chapter">
                  <span>Course Content</span>
                </p>
                <button className="StackSyllabus__course-bottom--button" onClick={() => setShowsevan(!showsevan)}>View Details</button>
              </div>
              {
                showsevan ?

                  <div className="StackSyllabusContent__course-content">
                    <div className="StackSyllabus__course-content">
                      <div className="StackSyllabus__main--container">

                        <div className="StackSyllabus__main--container-card">
                          <div className="StackSyllabus__main--container-card--image">
                            <img loading="lazy" className="StackSyllabus__main--container-card--image-img" alt="project" src="/FullStack/HTML_HTML.svg" />
                          </div>
                          <p className="StackSyllabus__main--container-card--heading">HTML Blog Page</p>
                          <p className="StackSyllabus__main--container-card--text">Start your web development by making a simple blog page using HTML.</p>
                        </div>
                        <div className="StackSyllabus__main--container-card">
                          <div className="StackSyllabus__main--container-card--image">
                            <img loading="lazy" className="StackSyllabus__main--container-card--image-img" alt="project" src="/FullStack/Clock.svg" />
                          </div>
                          <p className="StackSyllabus__main--container-card--heading">Reminder Clock App</p>
                          <p className="StackSyllabus__main--container-card--text">Want to build an app to keep your reminders? Build your own Digital Reminder Clock App using HTML, CSS and JS</p>
                        </div>
                        <div className="StackSyllabus__main--container-card">
                          <div className="StackSyllabus__main--container-card--image">
                            <img loading="lazy" className="StackSyllabus__main--container-card--image-img" alt="project" src="/FullStack/app_todo.svg" />
                          </div>
                          <p className="StackSyllabus__main--container-card--heading">ToDo App</p>
                          <p className="StackSyllabus__main--container-card--text">This will be a basic project to make your understanding of HTML and CSS clear but you can use it to keep your ToDos as well.</p>
                        </div>
                        <div className="StackSyllabus__main--container-card">
                          <div className="StackSyllabus__main--container-card--image">
                            <img loading="lazy" className="StackSyllabus__main--container-card--image-img" alt="project" src="/FullStack/app_blog.svg" />
                          </div>
                          <p className="StackSyllabus__main--container-card--heading">React Blog App</p>
                          <p className="StackSyllabus__main--container-card--text">Create your own Medium website. Through the project you will understand how React , Node and MongoDB work together to create magic.</p>
                        </div>
                        <div className="StackSyllabus__main--container-card">
                          <div className="StackSyllabus__main--container-card--image">
                            <img loading="lazy" className="StackSyllabus__main--container-card--image-img" alt="project" src="/FullStack/app_shopping.svg" />
                          </div>
                          <p className="StackSyllabus__main--container-card--heading">E-commerce Web App</p>
                          <p className="StackSyllabus__main--container-card--text">This will be one of the major projects of the program. It will be a full-fledged working website. Just add some products and you will be ready to sell online and take payments.</p>
                        </div>
                      </div>


                    </div>
                  </div> : null}

            </div>
          </div>
        </div>



      </div>

      <div className='StackIntern-main'>
        <div className='StackIntern-main-left'>
          <p className="StackIntern__main__left--heading">Get a real time project</p>
          <div className='StackIntern-main-left-container'>
            {data.filter((item) => item.id >= 108 && item.id <= 110).map(
              (item, index) => {
                return (
                  <div key={index}>
                    <div className="StackIntern__main__left--box-two">
                      <div className="StackIntern__main__left--box-two--icon-container">
                        <img loading="lazy" src={item.image} alt="excellent" className="StackIntern__main__left--box-two--icon-container--icon" />
                      </div>
                      <div className="StackIntern__main__left--box-two--text-container">
                        <p className="StackIntern__main__left--box-two--text-container--text">{item.text}</p>
                      </div>
                    </div>
                  </div>
                )
              }
            )}


          </div>

        </div>
        <div className="StackIntern__main__right">
          <p className="StackIntern__main__right--heading">Certification</p>
          <p className="StackIntern__main__right--text">Joint Co-Branded Participation Certificate &amp; Partner Completion Certificate</p>
          <div className="StackIntern__main__right--image">
            <img loading="lazy" className="StackIntern__main__right--image-img" src="\FullStack\nasscom-certificate-full-satck-mern.png" alt="certificate" />
          </div>
        </div>

      </div>

      <div className='StackFees'>
        <div className='StackFees-main'>
          <div className='StackFees-main-container'>
            <div className="StackFees__main-fees__left">
              <div className="StackFees__main-fees__left-content">
                <div className="StackFees__main-fees__left-content--top">
                  <div className="StackFees__main-fees__left-content--top-duration">
                    <img src="\FullStack\ghadi.svg" className='StackFees__main-fees__left-content--top-duration--container-icon' alt='duration' />
                    <p className="StackFees__main-fees__left-content--top-duration--container-text">Course Duration</p>
                    <div className="StackFees__main-fees__left-content--top-duration--time">
                      <p className="StackFees__main-fees__left-content--top-duration--time-hr">80 hours</p>
                    </div>
                  </div>
                  <div className="StackFees__main-fees__left-content--top-level">
                    <img src="\FullStack\level.svg" alt="level" class="StackFees__main-fees__left-content--top-level--container-icon" />
                    <p className="StackFees__main-fees__left-content--top-level--container-text">Level</p>
                    <div className="StackFees__main-fees__left-content--top-level--text">
                      <p className="StackFees__main-fees__left-content--top-level--text-level">Beginners &amp; Intermediate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="StackFees__main-fees__right">
              <div className="StackFees__main-fees__right-content">
                <p className="StackFees__main-fees__right-content--heading">Not sure? Talk to our advisors</p>
                <form autocomplete="off" className="StackFees__main-fees__right-content--main">
                  <div className="StackFees__main-fees__right-content--main-form">
                    <div>
                      <div>
                        <div className="form__container">
                          <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                            <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated" data-shrink="false">Email *</label>
                            <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl">
                              <input aria-invalid="false" type="email" className="MuiInputBase-input MuiInput-input" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="form__container">
                          <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                            <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated" data-shrink="false">Phone no. * </label>
                            <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl">
                              <input aria-invalid="false" type="tel" className="MuiInputBase-input MuiInput-input" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="StackFees__main-fees__right-content--main--bottom">
                    <button className="StackFees__main-fees__right-content--main--bottom-button" type="Submit">Get In Touch</button>
                  </div>
                  <p className="StackFees__main-fees__right-content--registeration-status"></p>
                </form>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className='StudentTest'>
        <span className="StudentsTestimonials__heading">Testimonials</span>
        <h4 className="MuiTypography-root MuiTypography-h4" id="StudentsTestimonials__subHeading">Our Students Speaks</h4>
        <div className='StudentTest-container'>


          {data.filter((item) => item.id >= 111 && item.id <= 113).map(
            (item, index) => {
              return (
                <div key={index}>
                  <div className="Student__testimonials-placed-people-container-card">
                    <div className="Student__testimonials-placed-people-container-card-top">
                      <img loading="lazy" src={item.image} className="Student__testimonials-placed-people-container-card-top-image" alt="student" />
                      <div className="Student__testimonials-placed-people-container-card-top-right">
                        <p className="Student__testimonials-placed-people-container-card-top-name">{item.name}</p>
                        <p className="Student__testimonials-placed-people-container-card-top-text"></p>
                      </div>
                    </div>
                    <div className="Student__testimonials-placed-people-container-card-bottom">
                      <p className="Student__testimonials-placed-people-container-card-bottom-text">{item.text}</p>
                    </div>
                  </div>
                </div>
              )
            }
          )}

        </div>
      </div>

      <div className="StackMetrics">
        <img loading="lazy" className="StackMetrics--img" src="\FullStack\feature.webp" alt="Metrics" />
      </div>

      <div className="StackGetInTouch">
        <p className="StackGetInTouch__text">Still confused! Drop your details &amp; get a call back from our academic counselling expert</p>
        <button className="StackGetInTouch__button">Get in touch</button>
      </div>

      <div className="StackFaq">
        <p className="StackFaq__heading">FAQs</p>
      </div>

      <div className='StackFaq-wraper'>
        <div className='panel-group' role='group'>
          <div className="panel">
            <button className="panel__header" onClick={() => setShoweight(!showeight)}>What is the duration of this program?
              <span className="panel__header-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                  <path fill="currentColor" d="M14,7H9V2A1,1,0,0,0,7,2V7H2A1,1,0,0,0,2,9H7v5a1,1,0,0,0,2,0V9h5a1,1,0,0,0,0-2Z"></path>
                </svg>
              </span>
            </button>
            {
              showeight ?

                <div className="panel__body">
                  <p>Duration of this program is 3-4 months</p>
                </div> : null}
          </div>

        </div>
        <div className="panel">
          <button className="panel__header" onClick={() => setShownine(!shownine)}>What will be the primary language for this program?
            <span className="panel__header-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <path fill="currentColor" d="M14,7H9V2A1,1,0,0,0,7,2V7H2A1,1,0,0,0,2,9H7v5a1,1,0,0,0,2,0V9h5a1,1,0,0,0,0-2Z">
                </path>
              </svg>
            </span>
          </button>
          {
            shownine ?

              <div className="panel__body">
                <p>Javascript would be the primary language.</p>
              </div> : null}
        </div>
        <div className="panel">
          <button className="panel__header" onClick={() => setShowten(!showten)}>Is there any pre-requisite for this program?
            <span className="panel__header-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <path fill="currentColor" d="M14,7H9V2A1,1,0,0,0,7,2V7H2A1,1,0,0,0,2,9H7v5a1,1,0,0,0,2,0V9h5a1,1,0,0,0,0-2Z">
                </path>
              </svg>
            </span>
          </button>
          {
            showten ?

              <div className="panel__body">
                <p>No, there are no pre-requisites.</p>
              </div> : null}
        </div>
        <div className="panel">
          <button className="panel__header" onClick={() => setShowoneone(!showoneone)}>What if I miss the Live sessions?
            <span className="panel__header-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <path fill="currentColor" d="M14,7H9V2A1,1,0,0,0,7,2V7H2A1,1,0,0,0,2,9H7v5a1,1,0,0,0,2,0V9h5a1,1,0,0,0,0-2Z">
                </path>
              </svg>
            </span>
          </button>
          {
            showoneone ?

              <div className="panel__body">
                <p>Although its highly recommended to not miss the live project sessions but in case if missed recording of the session would be added in your dashboard.</p>
              </div> : null}
        </div>
        <div className="panel">
          <button className="panel__header" onClick={() => setShowonetwo(!showonetwo)}>How is this program different from other full stack courses?
            <span className="panel__header-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <path fill="currentColor" d="M14,7H9V2A1,1,0,0,0,7,2V7H2A1,1,0,0,0,2,9H7v5a1,1,0,0,0,2,0V9h5a1,1,0,0,0,0-2Z">
                </path>
              </svg>
            </span>
          </button>
          {
            showonetwo ?

              <div className="panel__body">
                <p>This program provides not only learning but also complete experience of a full stack developer &amp; software development cycle.</p>
              </div> : null}
        </div>

      </div>


    </div>
  )
}

export default FullStack