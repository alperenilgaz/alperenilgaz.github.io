import React from 'react'
import './welcome.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { Carousel } from 'antd';
import ts from '../../Assets/img/ts.png'
import antd from '../../Assets/img/antd.svg'
import so from '../../Assets/img/stackoverflow.jpg'
import lf from '../../Assets/img/lf.jpg'
import od from '../../Assets/img/od.jpg'
import AnimatedSection from '../Config/AnimatedSection';




const Welcome = () => {

  return (
    <section className="welcome">

      <div className="welcome-section-info">
        <div className="welcome-section-title">
          <h2>ALPEREN ILGAZ</h2>
        </div>
        <div className="welcome-section-profession">
          <h4>SOFTWARE ENGINEER & FULL STACK DEVELOPER</h4>
        </div>


      </div>

      <div className="inspired-by">
        <div className="inspired-title">
          <h4>Inspired By</h4>
        </div>

        <div className="inspired-element">
          <Carousel 
          dots={false} 
          arrows 
          slidesToShow={3}   
          slidesToScroll={1}
          infinite={true}
          responsive={[
            {
              breakpoint:768,
              settings:{
                slidesToShow:1
              }
            },
            {
              breakpoint:800,
                settings:{
                slidesToShow:2
              }
            }
          ]}>
            <div>
              <div className="slick-item">
                <img src={od} alt="" />
                <a target='_blank' href='https://osmandurdag.com'>osmandurdag.com</a>
              </div>
            </div>
            <div>
              <div className="slick-item">
                <img src={so} alt="" />
                <a target='_blank' href='https://stackoverflow.com'>Stack Overflow</a>
              </div>

            </div>
            <div>
              <div className="slick-item">
                <img src={ts} alt="" />
                <a target='_blank' href='https://tamalsen.dev'>tamalsen.dev</a>
              </div>
            </div>
            
            <div>
              <div className="slick-item">
                <img src={antd} alt="" />
                <a target='_blank' href='https://ant.design'>Ant Design</a>
              </div>
            </div>

            <div>
              <div className="slick-item">
                <img src={lf} alt="" />
                <a target='_blank' href='https://tamalsen.dev'>LottiFiles</a>
              </div>
            </div>


          </Carousel>
        </div>
      </div>

      <div className="welcome-page-scroll-down">
        <a href="#expertise">
          <DotLottieReact
            src="https://lottie.host/e52b2ce9-2d4c-4cbe-8655-44322edb80f1/JYerk97UN2.lottie"
            loop
            autoplay
          />
        </a>
      </div>




    </section>
  )
}

export default Welcome