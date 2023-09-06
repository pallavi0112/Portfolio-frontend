import React from 'react'
import Typewriter from 'typewriter-effect';
const TypeWriter = () => {
  return (
    <Typewriter
    options={{
        strings: ['Frontend Devloper', 'Backend Developer'],
        autoStart: true,
        loop: true,
    }}

/>
  )
}

export default TypeWriter