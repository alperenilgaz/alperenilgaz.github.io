import React from 'react'
import './experience.css'
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import data from './data.json'
import skills from '../../Assets/img/skills.jpg'
import AnimatedSection from '../Config/AnimatedSection';
const Experience = () => {
  const iconMap = {
    FaPython:FaPython,
    SiDjango:SiDjango,
    IoLogoNodejs:IoLogoNodejs,
    DiMysql:DiMysql,
    DiPostgresql:DiPostgresql,
    FaLaravel:FaLaravel,
    SiFlask:SiFlask,
    DiMongodb:DiMongodb,
    FaPhp:FaPhp,


    FaHtml5:FaHtml5,
    IoLogoCss3:IoLogoCss3,
    SiRedux:SiRedux,
    FaJs:FaJs,
    FaReact:FaReact,
    RiTailwindCssFill:RiTailwindCssFill,
    FaBootstrap:FaBootstrap,
    SiAntdesign:SiAntdesign,
    DiJqueryLogo:DiJqueryLogo,

    



  }
  return (
    <div id='abilities' className="experience-section">
      <AnimatedSection
        x={0}
        y={150}
        amount={0.4}>
          <div className="experience-title">
            <h2>My Abilities</h2>
          </div>
      </AnimatedSection>
        <AnimatedSection
        x={0}
        y={150}
        amount={0.4}>
      <div className="abilities-container">
        <div className="abilities-box">
          <div className="abilities-title">
            <h2>backend</h2>
          </div>

          <div className="abilities-element">

                  {
                    data.backend.map((item,i)=>{
                      const Icon = iconMap[item.icon]
                      return(
                        <>
                      <div className="abilities-info">
                          <div className="abilities-icon">
                            <p><Icon/></p>
                          </div>
                          <div className="abilities-name">
                            <p>{item.name}</p>
                          </div>
                          <div className="abilities-level">
                            <p>{item.level}</p>
                          </div>
                      </div>
                        </>
                      )
                    })
                  }


          </div>
    
        </div>
        <div className="abilities-box">
          <div className="abilities-title">
            <h2>frontend</h2>
          </div>
          <div className="abilities-element">
                  {
                    data.frontend.map((item,i)=>{
                      const Icon = iconMap[item.icon]
                      return(
                        <>
                      <div className="abilities-info">
                          <div className="abilities-icon">
                            <p><Icon/></p>
                          </div>
                          <div className="abilities-name">
                            <p>{item.name}</p>
                          </div>
                          <div className="abilities-level">
                            <p>{item.level}</p>
                          </div>
                      </div>
                        </>
                      )
                    })
                  }


          </div>
        </div>

        

      </div>
      </AnimatedSection>
            <div className="skills-image">
              <img src={skills} alt="" />
            </div>
      </div>
    
  )
}

export default Experience