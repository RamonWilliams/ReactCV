import React from 'react'
import "./About.css"

const About = ({hero}) => {
  return (
    <div className='about'>
    {hero.aboutMe.map((item)=>
    <p>{item.info}</p>
    
   
    )}


    </div>
  )
}

export default About