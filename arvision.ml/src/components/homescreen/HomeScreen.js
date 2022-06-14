import React, {useState} from 'react'
import './HomeScreen.scss'
import logo from '../../assets/images/logo.png' 
import ar1 from '../../assets/images/ar1.png'
import ar2 from '../../assets/images/ar2.png'
import ar3 from '../../assets/images/ar3.png'
import ar4 from '../../assets/images/ar4.png'
import ar5 from '../../assets/images/ar5.png'
import unity from '../../assets/images/unity3d.png'
import vuphoria from '../../assets/images/vuphoria.png'
import reactLogo from '../../assets/images/react.png'
import firebaseLogo from '../../assets/images/firebase.png'
import flutterLogo from '../../assets/images/flutter.png'
import ai4edu from '../../assets/images/ai4edu.png'
import { VscMail } from "react-icons/vsc"
import { Phone, List, Linkedin, ArrowRight } from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'


const HomeScreen = () => {
    const [hidden, setHidden] = useState(true)

    const NavEltsShow = () => {
        setHidden(false)
    }
    const NavEltsHide = () => {
        setHidden(true)
    }

  return (
    <div className="homescreen">
        {
            !hidden ?
            <div className="NavElts">
                <div className="NavEltsHide" onClick={NavEltsHide}><ArrowRight/></div>
                <div className='navigator' onClick={NavEltsHide}><a href="#about">A PROPOS</a></div>
                <div className='navigator' onClick={NavEltsHide}><a href="#contact">NOUS CONTACTER</a></div>
                <div className='navigator' onClick={NavEltsHide}><Link to="/login">COMMENCER</Link></div>
            </div>
            :
            ""
        }
      <section className="Page1">
        <section className="Navigation">
          <li className="Logo"><img  src={logo} alt="arvision" width="150"/></li>
          <div className="NavElemenets">
            <li className="NavElement"><a href="#about">A PROPOS</a></li>
            <li className="NavElement"><a href="#contact">NOUS CONTACTER</a></li>
            <li className="NavElement"><Link to="/login">COMMENCER</Link></li>
            <li className="NavElement_"><List size={24} onClick={NavEltsShow}/></li>
          </div>
        </section>
        <section className="Main">
          <div className="MainContainer">
              <h1 className="m" >AR FOR EDUCATION</h1>
              <h4 className="m">
                  L'objectif de ce projet est de faciliter la visualisation 3D des objets 2D pour les étudiants.
                  <br></br>Notre solution est totalement basée sur une application smartphone Android, 
                  notre application aide l'utilisateur à recevoir une visualisation en temps réel en 3D 
                  à partir d'une image 2d liée au domaine de l'éducation.
              </h4>
            </div>
        </section>
    </section>
    <section className="Page2">
                <h1>Application AR Simple et Rapide</h1>
                <div className="iconsContainer">
                    <img className="icon" src={ar1} alt=""  />
                    <img className="icon" src={ar2} alt="" />
                    <img className="icon" src={ar3} alt="" />
                    <img className="icon" src={ar4} alt="" />
                    <img className="icon" src={ar5} alt="" />
                </div>
      </section>
      <section className='Page3' id="about">
        <div className="Page3Container">
            <h1 className='Title'>REALITE AUGMENTEE</h1>
            <p className='Paragraph'>Notre plateforme cloud permet de gerer et diffuser le contenu 3D/AR vers notre application
             AR-Vision dans le but d'aider les eleves et etudiants à mieux comprendre leurs cours chimie, biologie, SVT et plus...
             Nous vous donnons la chance de nous aider à elargir notre base de donnees en ajoutant des objets 3D en les associant
            avec leurs cibles correspondants.
            Cette plateforme vous permet de faire ca en un seul clic !
            </p>
            <div className="toggleGetStarted"><Link to="/signup" className="toggleGetStartedLink">Commencer</Link></div>
        </div>      
        </section>
        <section className="Page4">
            <h1>TECHNOLOGIES UTILITSEES</h1>
            <div className="techContainer">
                    <div className="tech tech-1">
                        <img  className="tech-img" src={unity} alt="unity 3D" />
                    </div>
                    <div className="tech tech-2">
                        <img  className="tech-img" src={vuphoria} alt="vuphoria" />
                    </div>
                    <div className="tech tech-3">
                        <img  className="tech-img" src={reactLogo} alt="react" />
                    </div>
                    <div className="tech tech-4">
                        <img  className="tech-img" src={firebaseLogo} alt="firebase" />
                    </div>
                    <div className="tech tech-5">
                        <img  className="tech-img" src={flutterLogo} alt="flutter" />
                    </div>
            </div>
        </section>
        <section className="footer" >
            <div className="footer-card" >
                <div className="gridTitle" id="contact" >NOUS CONTACTER</div>
                <div className="gridContainer">
                    <div className="textholder" ><VscMail size={20}/></div>
                    <div className="textholder" >arvision.fstg@gmail.com </div>
                    <div className="textholder" ><Phone size={20}/></div>
                    <div className="textholder" >+212-615-558826</div>
                    <div className="textholder" ></div>
                    <div className="textholder" ></div>
                </div>    
            </div>
            <div className="footer-card" >
                <div className="gridTitle" >NOTRE EQUIPE</div>
                <div className="gridContainer">
                    <div className="textholder" ><Linkedin size={20} /></div>
                    <div className="textholder" ><a href="https://www.linkedin.com/in/mohamed-el-amine-chafiki/" target={'_blank'} rel="noreferrer">Mohamed El Amine Chafiki </a></div>
                    <div className="textholder" ><Linkedin size={20} /></div>
                    <div className="textholder" ><a href="https://www.linkedin.com/in/younes-idhamou/" target={'_blank'} rel="noreferrer">Younes Idhamou</a></div>
                    <div className="textholder" ><Linkedin size={20} /></div>
                    <div className="textholder" ><a href="https://www.linkedin.com/in/mouad-saad-0a400b190/" target={'_blank'} rel="noreferrer">Mouad Saad</a></div>
                    <div className="textholder" ><Linkedin size={20} /></div>
                    <div className="textholder" ><a href="https://www.linkedin.com/in/amine-ouakib-bb881121a/" target={'_blank'} rel="noreferrer">Amine Ouakib</a></div>
                </div>     
            </div>
            <div className="footer-img">
                <img  src={ai4edu} width="150" alt="" />
            </div>
        </section>
        <section className="footerExtension">copyright © 2022 Tous les droits sont réservés</section>
    </div>
  )
}

export default HomeScreen