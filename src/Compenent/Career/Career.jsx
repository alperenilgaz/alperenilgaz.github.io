import React, { useState } from 'react'
import './career.css'
import data from './data.json'
import { MdLocationOn } from "react-icons/md";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import tezbitti from '../../Assets/img/yazılı.svg'
import ataseng from '../../Assets/img/ataseng.jpg'
import atabaum from '../../Assets/img/atabaum.jpg'
import AnimatedSection from '../Config/AnimatedSection';

const Career = () => {
  const [active, setactive] = useState([])
  console.log(active);

  const containerMods = [
    active.includes(1) && 'tezbitti',
    active.includes(2) && 'atabaum',
    active.includes(3) && 'ataseng',
  ].filter(Boolean).join(' ');

  const toogleActive = (id) => {
    if (active.includes(id)) {
      setactive(active.filter(item => item !== id))
    } else {
      setactive([...active, id])
    }
  }

  const imageMap = {
    "ataseng.jpg": ataseng,
    "tezbitti.jpg": tezbitti,
    "atabaum.jpg": atabaum
  }

  return (
    <div id='experience' className="career-section">
      <AnimatedSection x={0} y={150} amount={0.4}>
        <div className="carrer-section-title">
          <h2>Professional<br />Experience</h2>
        </div>
      </AnimatedSection>

      <div className={`career-container ${containerMods}`}>

        <div
          onClick={() => toogleActive(1)}
          className={`collapse-element ${active.includes(1) ? 'active' : ''}`}
        >
          <div className="collapse-title">
            <div className="career-title">
              <p>Co-Founder @ TEZBITTI</p>
            </div>
            <div className="career-date">
              <p>2023<span>-</span>present</p>
            </div>
          </div>
        </div>

        <div className="modal-wrapper-tezbitti">
          <div className="modal-container">
            {data.tezbitti.map((item, i) => {
              const image = imageMap[item.img]
              return (
                <div className="modal-tezbitti" key={i}>
                  <div className="modal-title">
                    <div className="modal-title-location">
                      <p><MdLocationOn /></p>
                      <p>{item.location}</p>
                    </div>
                    <div className="modal-title-website">
                      <a target='_blank' rel="noreferrer" href={item.url}><FaExternalLinkSquareAlt /></a>
                      <a target='_blank' rel="noreferrer" href={item.url}>{item.domain}</a>
                    </div>
                  </div>
                  <div className="modal-info">
                    <div className="modal-info-text">
                      <p>{item.text}</p>
                    </div>
                    <div className="modal-info-image">
                      <img className='tezbitti' src={image} alt="" />
                    </div>
                  </div>
                  <div className="modal-tag">
                    <ul>
                      {item.tag.map((tags, i) => (
                        <li key={i}>{tags.title}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          onClick={() => toogleActive(2)}
          className={`collapse-element ${active.includes(2) ? 'active' : ''}`}
        >
          <div className="collapse-title">
            <div className="career-title">
              <p>FullStack Developer @ ATABAUM</p>
            </div>
            <div className="career-date">
              <p>2025<span>-</span>2025</p>
            </div>
          </div>
        </div>

        <div className="modal-wrapper-atabaum">
          <div className="modal-container">
            {data.atabaum.map((item, i) => {
              const image = imageMap[item.img]
              return (
                <div className="modal-atabaum" key={i}>
                  <div className="modal-title">
                    <div className="modal-title-location">
                      <p><MdLocationOn /></p>
                      <p>{item.location}</p>
                    </div>
                    <div className="modal-title-website">
                      <a target='_blank' rel="noreferrer" href={item.url}><FaExternalLinkSquareAlt /></a>
                      <a target='_blank' rel="noreferrer" href={item.url}>{item.domain}</a>
                    </div>
                  </div>
                  <div className="modal-info">
                    <div className="modal-info-text">
                      <p>{item.text}</p>
                    </div>
                    <div className="modal-info-image">
                      <img src={image} alt="" />
                    </div>
                  </div>
                  <div className="modal-tag">
                    <ul>
                      {item.tag.map((tags, i) => (
                        <li key={i}>{tags.title}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          onClick={() => toogleActive(3)}
          className={`collapse-element ${active.includes(3) ? 'active' : ''}`}
        >
          <div className="collapse-title">
            <div className="career-title">
              <p>FullStackDeveloper @ ATASENG</p>
            </div>
            <div className="career-date">
              <p>2022<span>-</span>2024</p>
            </div>
          </div>
        </div>

        <div className="modal-wrapper-ataseng">
          <div className="modal-container">
            {data.ataseng.map((item, i) => {
              const image = imageMap[item.img]
              return (
                <div className="modal-ataseng" key={i}>
                  <div className="modal-title">
                    <div className="modal-title-location">
                      <p><MdLocationOn /></p>
                      <p>{item.location}</p>
                    </div>
                    <div className="modal-title-website">
                      <a target='_blank' rel="noreferrer" href={item.url}><FaExternalLinkSquareAlt /></a>
                      <a target='_blank' rel="noreferrer" href={item.url}>{item.domain}</a>
                    </div>
                  </div>
                  <div className="modal-info">
                    <div className="modal-info-text">
                      <p>{item.text}</p>
                    </div>
                    <div className="modal-info-image">
                      <img src={image} alt="" />
                    </div>
                  </div>
                  <div className="modal-tag">
                    <ul>
                      {item.tag.map((tags, i) => (
                        <li key={i}>{tags.title}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Career
