import React, { useEffect, useState } from 'react'
import './Project.css';
import { NavLink } from 'react-router-dom'

const Javascript = () => {
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
    <div>
      <div className="top-container">
        <h1>JAVA SCRIPT PROJECTS</h1>
        <div className="top-container-image">
          <img src="\project\js.png" className="top-container-image-img" alt="logo"></img>
        </div>
      </div>

      {data.filter((item) => item.id === 59).map(
        (item, index) => {
          return (
            <div key={index}>
              <div className="project-container">
                <h1>Reminder Clock App</h1>
                <div className='project-container-main'>
                  <div className="project-container-left">
                  <h3>Repo Link</h3>
                    <NavLink to={item.repolink}>{item.repolink}</NavLink><br /><br />
                    <h3>Host Link</h3>
                    <NavLink to={item.hostlink}>{item.hostlink}</NavLink>
                  </div>
                  <div className="project-container-right">
                    <h5>About this Project</h5>
                    <p>{item.about}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      )}


      {data.filter((item) => item.id === 60).map(
        (item, index) => {
          return (
            <div key={index}>
              <div className="project-container">
                <h1>Todo App JS</h1>
                <div className='project-container-main'>
                  <div className="project-container-left">
                  <h3>Repo Link</h3>
                    <NavLink to={item.repolink}>{item.repolink}</NavLink><br /><br />
                    <h3>Host Link</h3>
                    <NavLink to={item.hostlink}>{item.hostlink}</NavLink>
                  </div>
                  <div className="project-container-right">
                    <h5>About this Project</h5>
                    <p>{item.about}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}

export default Javascript