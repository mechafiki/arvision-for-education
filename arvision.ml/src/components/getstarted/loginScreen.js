import React ,{ useRef, useState} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import {Link, useNavigate} from 'react-router-dom'
import './GetStarted.scss'
import {BsArrowLeft} from 'react-icons/bs'

const LoginScreen = () => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    try{
       setLoading(true)
       await login(emailRef.current.value, passwordRef.current.value, )
       navigate('/dashboard', { replace: true })
    }
    catch{
        alert('E-mail ou mot de passe invalide')
    }
    setLoading(false)

  }
  return (
    <div className="body">
    <Link to="/" style={{color:'black',margin:20}}><span ><BsArrowLeft style={{marginRight:20}} />Retour à la page d'accueil</span></Link>
    <div className="container">
        <form onSubmit={handleSubmit}  >
            <h1 style={{margin:15}}>Se connecter</h1>
            <span>Si vous avez déjà un compte</span>
            <input type="email" placeholder="Email" ref={emailRef}  />
            <input type="password" placeholder="Mot de passe" ref={passwordRef} />
            <Link  to="/resetpassword" style={{margin:20}} className="form-link">Mot de passe oublié ?</Link>
            <button  disabled={loading} type="submit" >Connexion</button>
            <span style={{margin:15}}>Pas de compte? <Link to="/signup" className='form-link'>S'inscrire</Link> </span>
            <div className="dot-container">
                <div className="dot" style={{backgroundColor:'#b4145c'}}></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </form>
    </div>
    </div>
  )
}

export default LoginScreen