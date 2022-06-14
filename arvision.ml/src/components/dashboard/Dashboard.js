import React, {useState} from 'react'
import './dashboard.scss'
import Logo from '../../assets/images/logo.png'
import { List, ArrowRight } from 'react-bootstrap-icons'
import {useAuth} from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import Tutorial from './Tutorial'
import Settings from './Settings'
import Items from './Items'


const Dashboard = () => {

  const {logout} = useAuth()
  const [page, setPage]=useState({
    tutorial:true,
    settings:false,
    items:false
  })

  const navigate = useNavigate()

  async function handleLogout(){
      try{
        await logout()
        navigate('/login', { replace: true })
      }catch(error){
        alert(error)
      }
  }

  function activateTutorial(){
    setPage({
      tutorial:true,
      settings:false,
      items:false
    })
  }
  function activateItems(){
    setPage({
      tutorial:false,
      settings:false,
      items:true
    })
  }
  function activateSettings(){
    
    setPage({
      tutorial:false,
      settings:true,
      items:false
    })
  }

  const [hidden, setHidden] = useState(true)

    const NavEltsShow = () => {
        setHidden(false)
    }
    const NavEltsHide = () => {
        setHidden(true)
    }

  return (      
      <div className="dashboard-body">
      {
        !hidden ?
        <div className="NavElts"  >
            <div className="NavEltsHide" onClick={NavEltsHide}><ArrowRight/></div>
              <li className='navigator' onClick={activateTutorial}>Tutoriel</li>
              <li className='navigator' onClick={activateItems}>Mes articles</li>
              <li className='navigator' onClick={activateSettings}>Paramètres</li>
              <li className='navigator'onClick={handleLogout}>Déconnexion</li>
        </div>
        :
        ""
        }
        <section className="Navigation" style={{backgroundColor:'white'}}>
          <li className="Logo"><img  src={Logo} alt="arvision" width="150"/></li>
          <div className="NavElemenets">
            <li className="inline-navigator" onClick={activateTutorial}>Tutoriel   </li>
            <li className="inline-navigator" onClick={activateItems}   >Mes articles</li>
            <li className="inline-navigator" onClick={activateSettings}>Paramètres  </li>
            <li className='inline-navigator disconnect' onClick={handleLogout}    >Déconnexion </li>
            <li className="NavElement_"><List color='#164583' size={24} onClick={NavEltsShow}/></li>
          </div>
        </section>    
        {page.tutorial ? 
          <>
            <Tutorial/>
            <div className='start' onClick={activateItems}>
              Commencer
            </div>
          </>       
          : ""}
        {page.settings ? <Settings/>: ""}
        {page.items ? <Items/>: ""}
      </div>
  )
}



export default Dashboard