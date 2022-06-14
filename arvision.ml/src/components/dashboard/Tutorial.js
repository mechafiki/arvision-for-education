import React from 'react'
import './dashboard.scss'
import gif from '../../assets/images/iaB.gif'
import marker from '../../assets/images/marker.png'
import objet3D from '../../assets/images/objet3D.png'
import upload from '../../assets/images/upload.gif'
import { useAuth } from '../../contexts/AuthContext'

export default function Tutorial() {

  const { currentUser} = useAuth()

  return (
    <div className='tutorialBody'>
        <h1>Bonjour, <span style={{color:'#164583',fontSize:30}}>{currentUser.displayName}</span></h1>
        <p className='notice'>Cette page est un aperçu de la documentation AR-Vision et des actions associées</p>
        <div className='ligne'></div>
        <div className='tutorialContainer'></div>
        <h2 className="section-title">Concept d'utilisation</h2>
        <div className="concept-container">
            <div className="concept"><p>Le concept principal de l'application est basé sur des cibles (markers) 
                qui vont jouer le rôle de la repère sue laquelle on va placer notre objet.
                <br></br>En utilisant l'apprentissage automatique, L'objet 3D va apparaître lorsque le marqueur est identifié par la caméra. 
                </p>
            </div>
            <div className='img-container'>
                <img src={gif} alt="ar processing" height='300'/>
            </div>            
        </div>
        <h2 className="section-title">Guide d'utilisation</h2>
        <div className="concept-container">
            <img src={marker} alt="marker" width='50%'/>
            <div className="concept _right">
                <h2>1. Sélcetionner votre marqueur</h2>
                <p>Tout simplement le marer c'est l'image sur laquelle l'objet 3D sera affiché. 
                    <br></br><br></br>
                Voici un exemple de marqueur pour vous.
                </p>
                <div className='download'><a className='link' href={marker} download="marker">Télécharger</a></div>
            </div>    
        </div>
        <div className="concept-container">
            <div className="concept ">
                <h2>2. Sélcetionner votre objet 3D</h2>
                <p>Sélectionnez l'objet que vous souhaitez lier à votre marqueur, 
                    puis téléchargez le fichier depuis votre ordinateur.<br/><br/>
                    Il peut avoir plusieurs formats :<br/><br/>
                    • Objet 3D (.gltf, .glb .zip)<br/><br/>
                    • Image (.jpg, .png, .gif)<br/><br/>
                    • Video (.mp4)
                    <br></br><br></br>
                Voici un exemple d'objet pour vous.
                </p>
                <div className='download'><a className='link' href={objet3D} download="model">Télécharger</a></div>
            </div>    
            <div className='img-container'>
                <iframe title="molecule" style={{width: '100%', height: '400px',marginBottom:50}} frameBorder="0" src="https://embed.molview.org/v1/?mode=balls&bg=white"></iframe>
            </div>
        </div>
        <div className="concept-container">
            <img src={upload} alt="upload" width='50%'/>
            <div className="concept _right">
                <h2>3. Exporter votre contneu</h2>
                <p>Et voilà, tout est fait</p>
            </div>    
        </div>
    </div>        
  )
}
