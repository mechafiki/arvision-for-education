import React,{useRef, useState} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { updateProfile, EmailAuthProvider, reauthenticateWithCredential} from 'firebase/auth'


export default function Settings() {

  const { currentUser} = useAuth()
  const newUserame = useRef()
  const oldPassword = useRef()
  const newPassword = useRef()
  const PasswordConfirm = useRef()

  const save = async(e) => {
    e.preventDefault()
      if ( newUserame.current.value !== "" ){
        updateProfile(currentUser,{
          displayName: newUserame.current.value
        })
        .then(
          alert("Profile modifié")
        )
      }
 
      if ( newPassword.current.value !== ""){
        if ( newPassword.current.value !== PasswordConfirm.current.value){
          alert("PASSWORDS DO NOT MATCH")
        }
        else{
          const credential = EmailAuthProvider.credential( currentUser.email, oldPassword )
          await reauthenticateWithCredential(currentUser, credential)
          .then(()=>{
            alert("success")
          })
          .catch(()=>{
            alert("Quelque chose c'est mal passé, veuillez réessayer ultérieurement")
          })
        }
      }
  }

  return (
    <div className='settingsBody'>
        <div className='settings'>
        <h2 style={{marginBottom:10}}>Paramètres du compte</h2>
        <label >Nom d'utilisateur</label>
        <div>
            <input type="text" placeholder={currentUser.displayName} ref={newUserame} />
        </div>
        <label >Mot de passe actuel</label>
        <div>
            <input type="password" placeholder="••••••••••" ref={oldPassword} />
        </div>
        <label >Nouveau mot de passe</label>
        <div>
            <input type="password" placeholder="(Reste le même)" ref={newPassword} />
        </div>
        <label >Confirmer le mot de passe</label>
        <div>
            <input type="password" placeholder="(Reste le même)" ref={PasswordConfirm} />
        </div>
        
        <div className='exporter' onClick={save} >ENREGISTRER LES MODIFICATIONS</div>  
      </div>
    </div>
    
  )
}
