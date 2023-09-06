import React from 'react'
import Button from '../Button';
import AboutContent from './AboutContent';

const ContentBox = () => {
    return (
        <>
            <div className='contentBox'>
                <h3 className='name-line'>Hello, my name is <span className='name'>Pallavi Soldey</span></h3>
                 <AboutContent
                    head= "I'm a"
                    para= " your portfolio should be well-organized, visually appealing, and easy to navigate. It's essential to keep it up to date and regularly add new projects and experiences as you progress in your career. Tailor the content to your specific audience and the type of opportunities you seek."
                 />
                <Button title="Download CV"/>

            </div>

        </>
    )
}

export default ContentBox