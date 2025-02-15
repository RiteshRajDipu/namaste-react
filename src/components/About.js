import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
    <div>
        <h1>About Us</h1>
        <p>This is app components</p>
        <User name={"Akshay (functional)"} />
        <UserClass name={"Akshay (classy)"} location={"dehradun (class)"} />
    </div>

  )
}

export default About