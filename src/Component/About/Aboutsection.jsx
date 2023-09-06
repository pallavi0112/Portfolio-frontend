import React from 'react'
import './about.css'
import SectionTitle from './SectionTitle'
import AboutContent from '../Hero/AboutContent'
import EduExp from './EduExp'
import SkillBar from './SkillBar'
import { SkillsData } from './SkillsData'
import ExperienceDetails, { EducationDetails} from './EduExpDetails.js'
const Aboutsection = () => {
    return (
        <div className='about section-container'>
            <div className='section-row'>
                <SectionTitle title="About Me" />
                <div className='about-content-section'>
                    <AboutContent
                        head="I'm Pallavi Soldey and"
                        para="A highly motivated and passionate front-end developer with a proven ability
                         to collaborate effectively with senior developers while spending extra time to be mentored.
                          I am a fast learner and always keen to learn new things from my seniors
                        and adapt to the different technologies.Having experience in creating and implementing 
                        visually appealing and user-friendly websites and web applications. I enjoy working closely 
                        with team members and am always ready to apply my passion for coding to a talented engineering 
                        team to develop quality solutions. I have a solid understanding of HTML, CSS, and JavaScript, and 
                        am proficient in using front-end frameworks such as ReactJs and NextJs."
                    />
                </div>
            </div>
            <div className='section-row'>
            <h3 className='skill-header'>My Skills</h3>
            <div className='skillbar-container'>
            {
                SkillsData.map((skill , index)=>{
                    return <SkillBar key={index} data={skill}/>
                })
            }
                 

            </div>
            </div>
            <div className='section-row'>
                 <EduExp header="Education" Data={EducationDetails}  aosType="fade-right"/>
                 <EduExp header="Experience" Data={ExperienceDetails}  aosType="fade-left" />
                
            </div>
        </div>
    )
}

export default Aboutsection