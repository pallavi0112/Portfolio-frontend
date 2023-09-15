import React from 'react'
import Button from '../Button';
import AboutContent from './AboutContent';

const ContentBox = () => {
    return (
        <>
            <div className='contentBox'>
                <h3 className='name-line'>Hello, I'm <span className='name'>Pallavi Soldey</span></h3>
                 <AboutContent
                    head= "a"
                    para= "I'm a motivated front-end developer with a passion for learning and collaborating with experienced peers. I specialize in creating user-friendly websites and web applications, proficient in HTML, CSS, JavaScript, ReactJs, NextJs, and much more."
                 />
                <Button title="Download CV"/>

            </div>

        </>
    )
}

export default ContentBox