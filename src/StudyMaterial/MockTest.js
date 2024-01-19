import React, { useEffect, useState } from 'react'
import './MockTest.css';

const MockTest = () => {
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
            <div>
                <div className="MockTestFirstContainer">
                    <div className="MockTestFirstContainer-text">
                        <div className="MockTestFirstContainer-text-left">

                            <h2 className="MockTestFirstContainer-text-left-top">Mock Tests</h2>
                            <p className="MockTestFirstContainer-text-left-bottom">
                                Technical and Aptitude Test is a very important process of most of the placement tests. Crack your next placement with series of PrepBytes practice and mock tests. Practice subject-wise and company-wise tests. Take real-time mock tests with other students and test your preparation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="featured-mock-test-container">
                <div className='featured-mock-test-container-main'>
                    <p className='featured-mock-test-heading'>Featured Mock Tests</p>
                    <div className='featured-mock-test-main-Container'>
                        <div className='featured-mock-test-main-Container-inner'>
                            <p className='featured-mock-test-main-Container-inner-heading'>PAST MOCK TESTS</p>
                            
                            <div className='featured-mock-test-cards'>
                            {data.filter((item) => item.id >=7 && item.id <= 18).map(
                                (item,index) => {
                                    return(
                                        <div key={index}>
                                            <div className='mockCards'>
                                                <div className='mockCards-top'>
                                                    <img src='\VideoImage\infoicon.svg' className='mockCards-top-infoicon'></img>
                                                    <div className='mockCards-top-bar'>
                                                        <div className='mockCards-top-bar-share-button'>
                                                            <img src='\VideoImage\shareicon.svg' className='mockCards-top-shareicon'/>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='mockCards-middele'>
                                                    <img src={item.image}className='mockCards-middele-image'/>
                                                </div>
                                                <p className='cardName'>{item.name}</p>
                                                <div className='cardContent'>
                                                    <div className='cardContent-left'>
                                                        <p className='cardContent-left-date'>{item.date}</p>
                                                        <p className='cardContent-left-date-heading'>{item.dateheading}</p>

                                                    </div>
                                                    <div className='cardContent-middle'>
                                                        <p className='testParticipants'>{item.participants}</p>
                                                        <p className='testParticipants-heading'>{item.participantsheading}</p>
                                                        
                                                    </div>
                                                    <div className='cardContent-right'>
                                                        <p className='time'>{item.duration}</p>
                                                        <p className='durationheading'>{item.durationheading}</p>
                                                        
                                                    </div>
                                                </div>
                                                <div className='cardbuy'>
                                                    <button className='cardbuybtn'>Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            ) }
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='practicemock-testlist-container'>
                <div className='practicemock-testlist-container-main'>
                    <p className='practicemock-testlist-heading'>Practice Tests</p>
                    <div className='practicemock-testlist-container-card'>
                        <div className='practicemock-testlist-container-topic'>
                            <p className='practicemock-testlist-container-topic-heading'>Topic Wise</p>
                            <div className='practice-mock-Testlist-container-topicwise'>
                                {data.filter((item) => item.id >= 19 && item.id <= 27).map(
                                    (item,index) => {
                                        return(
                                            <div key={index}>
                                                <div className='topic-wise-card'>
                                                    <div className='topic-wise-card-image'>
                                                        <img src={item.image} className='topic-wise-card-image-img' alt='image'/>
                                                    </div>
                                                    <p className='topic-wise-card-name'>{item.name}</p>
                                                    <div className='topic-wise-card-btn'>
                                                        <button className='topic-wise-card-buybtn'>Buy Now</button>

                                                    </div>

                                                </div>

                                            </div>
                                        )
                                    }
                                )}

                            </div>

                        </div>

                        <div className='practicemock-testlist-container-company'>
                            <p className='practicemock-testlist-container-company-heading'>Company Wise</p>
                            <div className='practicemock-testlist-container-card-company'>
                                {data.filter((item) => item.id >= 28 && item.id <= 37).map(
                                    (item,index) => {
                                        return(
                                            <div key={index}>
                                                <div className='practicemock-testlist-company-card'>
                                                    <div className='practicemock-testlist-company-card-image'>
                                                        <img src={item.image} className='practicemock-testlist-company-card-image-img' alt='image'/>

                                                    </div>
                                                    <div className='practicemock-testlist-company-card-btn'>
                                                        <button className='practicemock-testlist-company-card-buybtn'>Buy Now</button>

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

            </div>
        </div>
    )
}

export default MockTest