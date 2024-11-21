import React from 'react'

const Navbar = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <nav>
        <h2>Yash Lokhande</h2>
        <ul className="">
            <li onClick={() => scrollToSection('about-me')}>About Me</li>
            <li onClick={() => scrollToSection('tech-stack')}>Tech Stack</li>
            <li onClick={() => scrollToSection('project-gallery')}>Project Gallery</li>
            <li  onClick={() => scrollToSection('contact')} >Hire me</li>
        </ul>
      
    </nav>
  )
}

export default Navbar
