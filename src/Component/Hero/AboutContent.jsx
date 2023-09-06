import React from 'react'
import TypeWriter from './TypeWriter'

const AboutContent = ({para , head}) => {
    return (
        <>
            <div className='professionsBox'>
                <h3>{head}</h3>
                <TypeWriter />
            </div>
            <p className='aboutme-content'>{para}</p>
        </>
    )
}

export default AboutContent