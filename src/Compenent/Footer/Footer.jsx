import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-section-title">
        <h2>Alperen Ilgaz</h2>
      </div>

      <div className="footer-social-accounts">
        <ul>
          <li>
            <a target='_blank' href="https://www.linkedin.com/in/alperen-ilgaz-00b67527b">
                  <i><FaLinkedin/></i>
                  <span> - Linkedin</span>
            </a>
          </li>
          <li>
            <a target='_blank' href="https://github.com/alperenilgaz">
                  <i><FaGithub/></i> 
                  <span> - Github</span>
            </a>
          </li>
          <li>
            <a target='_blank' href="https://www.instagram.com/alperenilgazz">
                  <i><FaInstagramSquare/></i>
                  <span> - Instagram</span>
            </a>
          </li>
          <li>
                  <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=alpilgz1@gmail.com">
                  <i><BiLogoGmail/></i>
                  <span> - Mail</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer