import React from 'react'
import Typewriter from 'typewriter-effect';
import ylogo from './utils/ylogo3.jpeg'
import cartoonProfile from './cartoon-profile.jpg'

const About = () => {
  return (
    <div id='about'>

{/* <div id="introduction">I'm <span>Yash Lokhande</span>,<br></br> your trusty Full Stack Companion! Whether it's crafting seamless user experiences or fine-tuning server-side magic, I'm here to guide you through the tech jungle. Let's embark on this journey together!"</div> */}

    <div className='profile-pic'>
      <img src={ProfilePhoto} />
    </div>
    <div className="position">
      <h3><span>Programmer</span><span>Web developer</span><span>Computer Engineer</span></h3>
    </div>


 <h1><Typewriter
  options={{
    strings: ["I'm Yash Lokhande  your trusty Full Stack Companion! Whether it's crafting seamless user experiences or fine-tuning server-side magic, I'm here to guide you through the tech jungle. Let's embark on this journey together!"],
    autoStart: true,
    loop: true, 
    delay: 25, deleteSpeed: 20
  }}
/></h1>


      
    </div>
  )
}

export default About
