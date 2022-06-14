import React ,{ useRef, useState} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import {Link} from 'react-router-dom'
import './GetStarted.scss'
import {BsArrowLeft} from 'react-icons/bs'

const ResetPassword = () => {

  const emailRef = useRef()
  const {resetPassword} = useAuth()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    try{
       setLoading(true)
       if (emailRef.current.value === ""){
         alert("Veuiller saisir votre email")
       }
       else{
        await resetPassword(emailRef.current.value)
        alert('Email envoyé, Veuillier vérifier votre inbox')
       }      
    }
    catch{
        alert('Aucun compte avec cet email')
    }
    setLoading(false)
  }
  
  return (
    <div className="body">
      <Link to="/" style={{color:'black',margin:20}}><span ><BsArrowLeft style={{marginRight:20}} />Retour à la page d'accueil</span></Link>
    <div className="container">
        <form onSubmit={handleSubmit}  >
            <h1 style={{margin:15}}>Réinitialiser votre mot de passe</h1>
            <input type="email" placeholder="Email" ref={emailRef}  />           
            <button className="reset" disabled={loading} type="submit" >Réinitialiser</button>
            <span style={{margin:15}}>Pas de compte? <Link to="/signup" className="form-link" style={{color:'#17153d'}}>S'inscrire</Link> </span>
            <Link to="/login" className="con" >Se connecter</Link>
            <div className="dot-container">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot" style={{backgroundColor:'#b4145c'}}></div>
            </div>
        </form>
    </div>
    </div>
  )
}

export default ResetPassword