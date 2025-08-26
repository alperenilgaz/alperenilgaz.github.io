import React from 'react'
import Welcome from '../Compenent/Welcome/Welcome'
import Expertise from '../Compenent/Expertise/Expertise'
import Work from '../Compenent/Work/Work'
import Experience from '../Compenent/Experience/Experience'
import Career from '../Compenent/Career/Career'
import Footer from '../Compenent/Footer/Footer'
import SplashCursor from '../Compenent/Config/SplashCursor'

const HomePage = () => {
  return (
    <>
    <Welcome/>   
    <Expertise/>
    <Work/>
    <Experience/>
    <Career/>
    <Footer/>
<SplashCursor  SPLAT_RADIUS={0.0341}/>




    </>
    
)
}

export default HomePage