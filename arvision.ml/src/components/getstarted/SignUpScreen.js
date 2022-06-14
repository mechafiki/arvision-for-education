import React, {useRef, useState} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import {Link, useNavigate} from 'react-router-dom'
import './GetStarted.scss'
import {BsArrowLeft} from 'react-icons/bs'

export default function SignUpScreen(){

  const userNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup} = useAuth()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
        
        alert('la confirmation ne correspond pas au mot de passe') 
        return
    }
    try{
       setLoading(true)
       await signup(emailRef.current.value, passwordRef.current.value, userNameRef.current.value)
       navigate('/dashboard', { replace: true })
    }
    catch{
        alert('la création du compte a échoué')
    }
    setLoading(false)
  }
    

  return (
    <div className="body">
    <Link to="/" style={{color:'black',margin:20}}><span ><BsArrowLeft style={{marginRight:20}} />Retour à la page d'accueil</span></Link>
      <div className="container">
          <form onSubmit={handleSubmit}>
              <h1>Créer votre compte</h1>
              <input type="text" placeholder="nom d'utilisateur" ref={userNameRef} required />
              <input type="email" placeholder="email" ref={emailRef} required />
              <input type="password" placeholder="mot de passe" ref={passwordRef} required />
              <input type="password" placeholder="confirmer votre mot de passe" ref={passwordConfirmRef} required />
              <button  disabled={loading} type="submit">Inscription</button>
              <span style={{marginTop:15}}>Vous avez déjà un compte ? <Link to="/login" className="form-link">Se connecter</Link></span>
              <div className="dot-container">
                <div className="dot"></div>
                <div className="dot" style={{backgroundColor:'#b4145c'}}></div>
                <div className="dot"></div>

              </div>
          </form>
      </div>
    </div>
    
    
  )
}

