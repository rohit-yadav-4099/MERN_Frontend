import React, { useEffect, useState } from "react";
import './Video.css';

const VideoTutorial = () => {

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
        <div className="videopage">

            <div className="Video-container">
                <div className="Video-container-left">
                    <h1 className="Video-container-left-top">Prepbytes Video Library</h1>
                    <p className="Video-container-left-bottom">Increase your knowledge with PrepBytes free videos. PrepBytes video library is a repository of more than 250 videos containing videos on Competitive Programming , Language Fundamentals - C, C++, Java, Data Structures and Algorithms, Aptitude, Operating System, Interview Questions and much more all at one place. </p>
                </div>
                <img class="Video-container-right-image" src="\VideoImage\video_lib_illustration.png" />
            </div>

            <div className="video-containerTwo">
                <div>
                    <h2 class="Video-content-heading">CATEGORIES
                        <div></div></h2>
                    <div className="video-cards">
                        {data.filter((item) => item.id >= 1 && item.id <= 6).map(
                            (item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="videoimges">
                                            <img src={item.image} className="videoimg" />
                                            <div className="videoContent">
                                                <p className="videoName">{item.name}</p>
                                                <p className="videopara">{item.para}</p>
                                            </div>
                                            <div className="YTicon">
                                                <img src="\VideoImage\YTicon.svg" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoTutorial;