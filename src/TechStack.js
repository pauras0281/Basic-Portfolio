import React from 'react'
import mern from './utils/mern.png'

const TechStack = () => {
  return (
    <div id='tech-stack'>
              <h1 className="heading">Tech Stack</h1>

                <div className='tech-container'>
                    <div className="tech-card" data-aos="zoom-in">
                        <img src="https://hackr.io/tutorials/learn-data-structures-algorithms/logo/logo-data-structures-algorithms?ver=1550834269" alt="" />
                        Data Structures and Algorithms
                    </div>
                    <div className="tech-card" data-aos="zoom-in">
                        <img src="https://cdn0.iconfinder.com/data/icons/business-management-2-8/66/104-1024.png" alt="" />
                        Problem Solving
                    </div>
                    <div className="tech-card" data-aos="zoom-in">
                        <img src="https://logodix.com/logo/1164429.png" alt="" />
                        Database Management
                    </div>
                    <div className="tech-card" data-aos="zoom-in">
                        <img src="https://clipart.info/images/ccovers/1499794874html5-js-css3-logo-png.png" alt="" />
                        HTML CSS and Javascript
                    </div>
                    <div className="tech-card" data-aos="zoom-in">
                        <img src="http://blog.desafiolatam.com/wp-content/uploads/2018/05/c-logo.png" alt="" />
                        C++
                    </div>
                    <div className="tech-card" data-aos="zoom-in">
                        <img src="https://logodix.com/logo/1764972.png" alt="" />
                        NodeJS
                    </div>
                    <div className="tech-card"  data-aos="zoom-in">
                        <img src="http://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png" alt="" />
                        ReactJS
                    </div>
                    <div className="tech-card" data-aos="zoom-in">
                        <img src={mern} alt="" />
                        MERN stack
                    </div>
                    
                    
                </div>
      
    </div>
  )
}

export default TechStack
