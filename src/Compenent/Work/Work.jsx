import React from 'react'
import './work.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import tezbitti from '../../Assets/img/yazısız.svg'
import Project from '../Project/Project'
import AnimatedSection from '../Config/AnimatedSection'
const Work = () => {
  return (
    <div id='work' className="work-section">
    <div className="work-section-welcome">

        <AnimatedSection
        x={0}
        y={150}
        amount={0.4}>
            <div className="work-section-title">
                <h2>My <br /> Work</h2>
            </div>
        </AnimatedSection>
        
    <AnimatedSection
        x={0}
        y={150}
        amount={0.4}>
        <div className="work-section-text">
            <p>Deployed 10+ scalable AI-driven, travel, event and telemedicine solutions as web and hybrid mobile apps using React SPA and PWA.  
                0+ projects with clients worldwide, delivering innovative platforms and exploring advanced data analytics and visualization.
            </p>
        </div>
        </AnimatedSection>
    </div>
    <div className="work-section-best-work">
        <div className="work-arrow">
                    <DotLottieReact
                    src="https://lottie.host/b26d8310-faf9-465d-a01c-d31648115b17/YT05iI0ZuT.lottie"
                    loop={false}
                    autoplay
                />
        </div>
        <div className="best-work-title">
            <h4>Best Project</h4>
        </div>
        <div className="best-work-name">
            <h4>Tezbitti App</h4>
        </div>

        <div className="best-work-btn">
            <button>View Project</button>
        </div>
    </div>

    <div className="tezbitti-logo">
        <img src={tezbitti} alt="" />
    </div>


        <Project/>
    </div>
  )
}

export default Work