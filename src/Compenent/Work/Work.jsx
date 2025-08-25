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
            <p>Developed 50+ full-stack projects with clients worldwide, delivering scalable platforms built on Laravel, Node.js, and Django backends, and modern React.js frontends. 5+ deployed platforms in production, combining innovative architectures with advanced data processing and visualization.
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
            <a target='_blank' href="https://tezbitti.com">
                <button>View Project</button>
            </a>
        </div>
    </div>

    <div className="tezbitti-logo">
        <a target='_blank' href="https://tezbitti.com">
            <img src={tezbitti} alt="" />
        </a>
    </div>


        <Project/>
    </div>
  )
}

export default Work