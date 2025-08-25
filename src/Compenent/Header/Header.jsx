import React, { useCallback, useEffect, useState } from 'react'
import './header.css'
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { MdWorkspacePremium } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { element } from 'three/tsl';

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const getStoredTheme = localStorage.getItem('theme') || 'dark'
  const [theme, setTheme] = useState(getStoredTheme)
  const [showMobileHeader, setShowMobileHeader] = useState(false);

  const changeTheme = useCallback((newTheme) => {
    const previousTheme = localStorage.getItem('theme')
    if(previousTheme){
      document.body.classList.remove(previousTheme)
    }
    if(newTheme){
      document.body.classList.add(newTheme)
      localStorage.setItem('theme',newTheme)
    }
  },[])

  useEffect(() => {
      changeTheme(theme)
  },[theme])

  useEffect(() => { 
    const handleScroll = () => {
      if(window.scrollY>300){
        setShowMobileHeader(true)
      } else {
        setShowMobileHeader(false)
      }
    }

    window.addEventListener('scroll',handleScroll)
    return () => window.removeEventListener('scroll',handleScroll)
  },[])

  const menuItems = [
    { label: "// Home",targetId:"home"},
    { label: "// Expertise",targetId:"expertise"},
    { label: "// Work",targetId:"work"},
    { label: "// Abilities",targetId:"abilities"},
    { label: "// Experience",targetId:"experience"},
    { 
      label: "Theme", 
      icon: theme === 'dark' 
        ? <IoMoonOutline onClick={() => setTheme('light')} /> 
        : <IoSunnyOutline onClick={() => setTheme('dark')} /> 
    }
  ];

    const mobileItems = [
      { icon: <FaHome/>,          targetId: 'home' },
      { icon: <FaLaptopCode/>,    targetId: 'expertise' },
      { icon: <MdWorkspacePremium/>, targetId: 'work' },
      { icon: <IoIosStar/>,       targetId: 'abilities' },
      { icon: <FaBriefcase/>,     targetId: 'experience' },
      { 
        label: "Theme", 
        icon: theme === 'dark' 
          ? <IoMoonOutline onClick={() => setTheme('light')} /> 
          : <IoSunnyOutline onClick={() => setTheme('dark')} /> 
      }
    ];

  return (
    <header className="header">
      <div className="header-logo">
        <h2>AlperenIlgaz<span className='logo-dot'>.</span><span className='logo-dash'>_</span></h2>
      </div>


      <div className={`mobile-header ${showMobileHeader ? "show" : ""}`}>
      <div className="mobilde-header-menu">
        <ul>
            {mobileItems.map((m,i) => (
              <li onClick={() => {
                if(m.targetId){
                  const element = document.getElementById(m.targetId)
                  if(element){
                    element.scrollIntoView({behavior:"smooth"})
                  }
                }
 
              }}>
                {m.icon}
              </li>
            ))}
        </ul>
      </div>

    </div>
      <div className="header-menu">
        <ul>
          {
            menuItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  if(item.targetId){
                    const element = document.getElementById(item.targetId)
                    if(element){
                      element.scrollIntoView({behavior:"smooth"})
                    }
                  }
                }}
                style={{
                  color: theme === 'dark' 
                  ? 

                  hoveredIndex === null ? "#fff"
                  : hoveredIndex === index ? "#fff" : "#6e6e6eff" 

                  :

                  hoveredIndex === null ? "#000"
                  : hoveredIndex === index ? "#000" : "rgba(163, 163, 163, 0.6)"
               
                }}
              >
                {item.icon ? item.icon : item.label}
              </li>
            ))
          }
        </ul>
      </div>
    </header>
  )
}

export default Header
