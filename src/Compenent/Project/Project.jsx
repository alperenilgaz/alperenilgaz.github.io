import React, { useState } from 'react'
import './project.css'
import yazili from '../../Assets/img/yazılı.svg'
import lojman from '../../Assets/img/lojman.jpg'
import license from '../../Assets/img/license.jpg'
import ecommerce from '../../Assets/img/ecommerce.jpg'
import ataseng from '../../Assets/img/ataseng.jpg'
import coffe from '../../Assets/img/coffe.webp'
import network from '../../Assets/img/network.jpg'
import github from '../../Assets/img/github.jpg'
import data from './data.json'
import AnimatedSection from '../Config/AnimatedSection'
import { motion } from 'framer-motion';

const Project = () => {
    const imageMap = {
        "ataseng.jpg": ataseng,
        "lojman.jpg": lojman,
        "yazili.svg": yazili,
        "ecommerce.jpg": ecommerce,
        "coffe.webp": coffe,
        "network.jpg": network,
        "license.jpg": license,
        "github.jpg": github,

    }
    const [filter, setfilter] = useState("")
    

    const filteredData =  data.filter(item => {
        if(filter === ''){
            return true
        }
        return item.tag.includes(filter)
    })

 

    
    
    
    
    return (
        <>
            <div className="all-project">
                <AnimatedSection
                y={100}
                amount={0.2}
                >
                    <div className="filter-options">
                        <p className='filter-by'>Filter by</p>
                        <div className="filter-elements">
                            <ul>
                                <li onClick={() => setfilter("")}>all</li>
                                <li onClick={() => setfilter("ai")}>// Artificial intelligence</li>
                                <li onClick={() => setfilter("web")}>// Web Development</li>
                            </ul>
                        </div>
                    </div>
                </AnimatedSection>


                <div className="project-container">
                    {
                        filteredData.map((item, key) => {
                            const image = imageMap[item.img]
                            
                            return (
                                    <motion.div
                                        key={item.id}
                                        className="project-element"
                                        initial={{ opacity:0,x:50,y: 0 }}
                                        whileInView={{opacity:1,y: 0 }}
                                        viewport={{ once: true}}

                                        transition={{ delay: key * 0.15, type: 'spring', stiffness: 70, damping: 18 }}
                                        >
                                    <a style={{textDecoration:"none"}} target='_blank' href={`${item.link}`}>
                                    <div className="project-image">
                                        <img className={`${item.id === 6 ? 'tezbitti-img' : '' }`} src={image} alt="" />
                                    </div>
                                    <div className="project-title">
                                        <p>{item.title}</p>
                                    </div>
                                    <div className="project-tag">
                                        <p className="subtitle">{item.subtitle}</p>
                                        <p className="show-project">{item.id === 8 ? 'Github Profile' : 'Show Project'}</p>
                                    </div>
                                    </a>
                                    </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Project