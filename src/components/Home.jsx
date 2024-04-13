import React from 'react'

import AboutMe from './About/AboutMe'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import ContactMe from './Contact/Contact'
import Profile from './Header/Profile'
import Introduction from './About/Introduction'

const Home = () => {
  return (
    <div>
        <Introduction/>
        <Profile/>


         <AboutMe/>
        <Skills/>
        <Projects/>
        <ContactMe/>
      
    </div>
  )
}

export default Home
