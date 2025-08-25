import React from 'react'
import './expertise.css'
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import expertise from '../../Assets/img/code.webp'
import cvFile from '../../Assets/cv/cv.pdf';
import AnimatedSection  from '../Config/AnimatedSection';

const Expertise = () => {
  return (
    <div id='expertise' className="expertise-section">

      <AnimatedSection
      x={0}
      y={80}
      amount={1}
      >
        <div className="expertise-section-title">
            <h2>My Expertise</h2>
        </div>
      </AnimatedSection>

        <div className="expertise-info">
          <AnimatedSection 
          y={30}
          x={0}
          delay={0.1}>
          <div className="expertise-box">
            <div className="expertise-box-title">
              <p className='expertise-icon'><HiOutlineComputerDesktop/></p>
              <p><span className='software'>Software</span> <br /> Development</p>
            </div>

            <div className="expertise-box-info">
              <div className="expertise-box-tag">
                <div className="info-tag">
                <p>&lt;h3&gt;</p>
                <p>&lt;h3&gt;</p>
              </div>

              </div>
              <div className="expertise-box-text">
                <p>Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.</p>
              </div>
            </div>
          </div>

          </AnimatedSection>

        <AnimatedSection 
          y={30}
          x={0}
          delay={0.3}>
          <div className="expertise-box">
            <div className="expertise-box-title">
              <p className='expertise-icon'><FaReact /></p>
              <p><span className='frontend'>Frontend Dev</span> <br />React</p>
            </div>

            <div className="expertise-box-info">
              <div className="expertise-box-tag">
                <div className="info-tag">
                <p>&lt;h3&gt;</p>
                <p>&lt;h3&gt;</p>
              </div>

              </div>
              <div className="expertise-box-text">
                <p>  Passionate about UI/UX. Over 3 years of development experience in HTML, CSS, JavaScript, React frameworks.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        
          <AnimatedSection 
          y={30}
          x={0}
          delay={0.5}>
          <div className="expertise-box">
            <div className="expertise-box-title">
              <p className='expertise-icon'><HiOutlineComputerDesktop/></p>
              <p><span className='backend'>Backend Dev</span> <br />Node,Laravel</p>
            </div>

            <div className="expertise-box-info">
              <div className="expertise-box-tag">
                <div className="info-tag">
                <p>&lt;h3&gt;</p>
                <p>&lt;h3&gt;</p>
              </div>

              </div>
              <div className="expertise-box-text">
                <p>  Backend developer with 3 years of experience building scalable applications using Laravel and Node.js.</p>
              </div>
            </div>
          </div>
          </AnimatedSection>

          <AnimatedSection 
          y={30}
          x={0}
          delay={0.7}>
          <div className="mobile-expertise-box">
            <div className="mobile-expertise-text">
              <p>“Working tirelessly may only make you the wealthiest person in the cemetery.”</p>
            </div>
              <div className="quotation">
                <p>-My Father</p>
              </div>
          </div>
      </AnimatedSection>
        </div>
          <div className="expertise-img">
            <img src={expertise} alt="" />
          </div>


          <AnimatedSection 
          y={50}
          x={0}
          amount={0.8}>
          <div className="download-cv">
            <a href={cvFile} download="Alperen_Ilgaz_CV.pdf">
              <button>Download CV</button>
            </a>
          </div>
      </AnimatedSection>


    </div>
  )
}

export default Expertise