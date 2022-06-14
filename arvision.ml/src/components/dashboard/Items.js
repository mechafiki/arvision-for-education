import React,{useState, useRef, useEffect} from 'react'
import { db, storage } from '../../firebase'
import {ref,uploadBytes} from "firebase/storage"
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'

export default function Items() {

  const { currentUser} = useAuth()
  const [imgUpload, setImgUpload] = useState(null)
  const [objUpload, setObjUpload] = useState(null)
  const [markerUpload, setMarkerUpload] = useState(null)
  const [progress, setProgress] = useState(false)
  const [subject, setSubject] = useState("Chimie")
  const objectNameRef = useRef()
  const [items, setItems] = useState([])

  useEffect(() => {
    const unsubscribe = db.collection('users').doc(currentUser.email).collection('objects').onSnapshot((snapshot)=>{
      setItems(
        snapshot.docs.map((doc)=> ({
          id:doc.id,
          data:doc.data()

        }))
      )
    })
  }, []);

  
  function uploadFileApi(token, content) {

    var data = JSON.stringify({
        "message": "txt file",
        "content": `${content}`
    });

    var config = {
        method: 'put',
        url: 'https://api.github.com/repos/mechafiki/arforeveryone/contents/abc.txt',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
  }

  const uploadFiles = (e) => {

    e.preventDefault()
    
    const formData = new FormData(); 
    formData.append( 
      "myFile", 
      imgUpload, 
      imgUpload.name 
    ); 

    console.log(imgUpload)
    var axios = require('axios');
    var base64 = require('base-64');

    let token = "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"
    
    console.log(formData);
    var content = base64.encode(formData);
    console.log(content);
    uploadFileApi(token, content)
    
    
    if (imgUpload == null || markerUpload == null){
        alert("Le marqueur ne peut pas être vide")
        return;
    }
    if (objUpload == null){
      alert("Le marqueur ne peut pas être vide")
      return;
    }
    if (objectNameRef.current.value === ""){
      alert("Informations incomplètes")
      return;
    }
    alert('Cette opération peut prendre quelques secondes, veuillez patienter')
    setProgress(true)
    const objId = Math.random().toString(36).substring(7)
    const imgRef = ref(storage, `img/${imgUpload.name}`)
    const objRef = ref(storage, `obj/${objUpload.name}`)
    const markerRef = ref(storage, `marker/${objUpload.name}`)
    uploadBytes(imgRef, imgUpload).then(()=>{
      uploadBytes(objRef, objUpload)
      uploadBytes(markerRef, markerUpload)
      db.collection('users').doc(currentUser.email).collection('objects').add({
        id:objId,
        nom_objet:objectNameRef.current.value,
        sujet:subject
    });
      alert("Succès")
    })
    setProgress(false)
  }
  
  const change = (e) => {
    setSubject(e.target.value)
  }
 
  return (
    <div className="items-body">
       <div className='add-article'>
          <h2 style={{marginBottom:10}}>Ajouter un article</h2>
          <div className="fileInput">
          <label >Nom de l'objet</label>
            <div>
                <input type="text" placeholder='Ex: molécule, protéine, DNA' ref={objectNameRef} />
            </div>
          </div>
          <div className="fileInput">
          <label >Sujet</label>
            <div style={{width:'100%',height:'100%'}}>
                <select name="cars" id="cars"  onChange={change} value={subject} className="select" >
                    <option value="Chimie">Chimie</option>
                    <option value="Math">Math</option>
                    <option value="Physique">Physique</option>
                    <option value="Sciences-de-vie">Sciences de vie</option>
                </select>
            </div>
          </div>
          <div className="fileInput">
          <label >Sélectionnez votre Marqueur (PATT)</label>
            <div>
                <input type="file" accept=".patt" onChange={(event) => {setMarkerUpload(event.target.files[0]);}}  />
            </div>
          </div>
          <div className="fileInput">
          <label >Sélectionnez votre Marqueur (IMG)</label>
            <div>
                <input type="file" accept="image/png" onChange={(event) => {setImgUpload(event.target.files[0]);}}  />
            </div>
          </div>
          <div className="fileInput">
            <label >Sélcetionnez votre objet (.GLTF, .GLB .ZIP, .PNG, ..etc)</label>
              <div>
                  <input type="file" name="fileToUpload" id="fileToUpload" onChange={(event) => {setObjUpload(event.target.files[0]);}} />
              </div>
          </div>
          <input className='exporter' type="submit" value="AJOUTER" disabled={progress} onClick={uploadFiles}></input>  
       </div>

      <div className='my-items'>
          <h2>Mes articles</h2>
          {
            items.length !== 0 ?
            <div className="items-container">
              {
                items.map((item)=>{                
                  return(
                   
                    <table className="item" key={item.id}>
                      <tr className='pair-row'>
                        <td>Id</td><td> {item.data.id}</td>
                      </tr>
                      <tr>
                        <td>Nom</td><td> {item.data.nom_objet}</td>
                      </tr>
                      <tr className='pair-row'>
                        <td>Sujet</td><td> {item.data.sujet}</td>
                      </tr>
                    </table>
                  );
                }) 
              }
            </div> 
            :
            <div style={{color:'grey',width:'auto',margin:40,textAlign:'center'}}>Aucun article</div>
          }          
      </div>    
    </div>
  )
}
