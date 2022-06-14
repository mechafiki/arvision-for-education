import React, {useContext, useState, useEffect} from 'react'
import {auth, db} from '../firebase'
import { useNavigate } from 'react-router-dom'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider( {children} ) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()


    function signup(email, password,userName){
      //  return auth.createUserWithEmailAndPassword(email,password)
            auth.createUserWithEmailAndPassword(email,password)
            .then((authUser)=>{
                authUser.user.updateProfile({
                    displayName: userName,
                })
                db.collection('users').doc(auth.currentUser.email).set({
                    displayName:userName
                });
                alert("Votre compte est crée, veuiller se connecter")
            })
            navigate('/dashboard', { replace: true })
            
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout(){
        return auth.signOut()
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe 
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword
    }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}


