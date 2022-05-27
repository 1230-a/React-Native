import { Modal,StyleSheet, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import MoviesForm from './MoviesForm'
import { useState } from 'react';
import Fire from '../Fire';

export default function MovieModal(props) {
  const[title, setTitle] = useState("")
  const [synopsis, setSynopsis] = useState("")
  const[url, setUrl]= useState("");
  const[comments, setComments]= useState([]);
  const [error, setError] = useState("");
  const [succes, setSucces]= useState("");
 
  
  function handleSubmit() {

    // if (title < 3) {
    //   setError("Le titre saisi n'est pas correct");
    // } else {
   
    //   console.log(title, synopsis);
    //   setSucces("Vous avez enregistrez votre film avec succès");
    //   setTitle("");
    //   setSynopsis("");
    //   setUrl("");
    //   console.log("enregistrez un nouveau film");
      
    //  }
    const firebase = new Fire();
    let movie ={
      "title": title,
      "synopsis": synopsis,
      "urlImage": url,
      "comment":[ author= "", content = ""]
    }
    if (props.movie){
      movie.id = props.movie.id;
      movie.comments = props.movie.comments
      firebase.updateMovie(movie);
    }else{
      firebase.addMovie(movie);
      setTitle("");
      setSynopsis("");
      setUrl("");
      setSucces("Votre film à été enregistré avec succès")
    }
    console.log(title, synopsis)
  }

  return (
    <Modal visible={props.isVisible} animationType="slide" >
      <MoviesForm 
      title={title} 
      synopsis={synopsis}
      urlImage={url}
      handleTitleChange={(newTitle)=>setTitle(newTitle)}
      handleSynopsisChange={(newSynopsis)=>setSynopsis(newSynopsis)}
      handleUrlChange={(newUrl)=>setUrl(newUrl)}
      onSubmit={()=>handleSubmit()}/>
    <Text> {succes}</Text>
      <Button title="Fermer" onPress={props.handleClose}  style={styles.vue}/>
    </Modal>
  )
}

const styles = StyleSheet.create({
  vue: {
    flex:1,
    border:15,
    borderRadius:10,
    alignItems:'center',
    width:'100%'
  }
});