import React from 'react'
import './Banner.css'
import { useTypewriter } from 'react-simple-typewriter'
const Banner = () => {
    const [asciiArt] = useTypewriter({
      words:[
        `
 █████╗ ██╗     ██████╗ ███████╗██████╗ ███████╗███╗   ██╗
██╔══██╗██║     ██╔══██╗██╔════╝██╔══██╗██╔════╝████╗  ██║
███████║██║     ██████╔╝█████╗  ██████╔╝█████╗  ██╔██╗ ██║
██╔══██║██║     ██╔═══╝ ██╔══╝  ██╔══██╗██╔══╝  ██║╚██╗██║
██║  ██║███████╗██║     ███████╗██║  ██║███████╗██║ ╚████║
╚═╝  ╚═╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝
                                                          
██╗██╗      ██████╗  █████╗ ███████╗                      
██║██║     ██╔════╝ ██╔══██╗╚══███╔╝                      
██║██║     ██║  ███╗███████║  ███╔╝                       
██║██║     ██║   ██║██╔══██║ ███╔╝                        
██║███████╗╚██████╔╝██║  ██║███████╗                      
╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝                      
                                                          
            
        `
      ],
      typeSpeed:2
    })

    const [bannerText] = useTypewriter({
      words:["Welcome to my interactive web terminal. For a list of available commands, type "],
      typeSpeed:6
    })
    const [helptext] = useTypewriter({
      words:['help'],
      typeSpeed:8
    })
    
  return (
   <>
    <pre className="ascii-art">
        <code>{asciiArt}</code>
        </pre>
        <div className="banner-text">
        <p>{bannerText} <span>'{helptext}'</span></p>
        </div>
    
   </>
  )
}

export default Banner