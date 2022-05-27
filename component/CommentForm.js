import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'

export default function CommentForm(props) {
  return (
    <View style={styles.view}>
      <Text style={[styles.text, {fontSize:25}]}> Entrer votre commentaire</Text>
            <Text style={[styles.text, {fontSize:15},{marginTop:25}]}>Votre nom</Text>
            <TextInput placeholder='Entrer votre nom' 
            style={[styles.TextInput, { height: 40 }]}  
            value={props.name} 
            onChangeText={props.handleNameChange}/>
            <Text style={[styles.text, {fontSize:15},{marginTop:25}]}>Votre commentaire</Text>
            <TextInput placeholder='Comments' 
            style={[styles.TextInput, { height: 140 }]} 
            value={props.comment} multiline
            onChangeText={props.handleCommentChange}/>
      <Button
        title="Valider"
        buttonStyle={[styles.button, {backgroundColor: "green"}]}
        onPress={props.onValidate}></Button>

    </View>
  )
}

const styles = StyleSheet.create({
    view:{
        alignItems:'center',
        justifyContent:'center',
        margin:'5%',
        
    },
    text:{
       fontWeight:'bold',
       fontFamily:'Arial',
       textAlign:'center'
       
    },
    TextInput: {
        backgroundColor: "skyblue",
        borderWidth: 5,
        borderRadius:10,
        alignContent:'center',
        margin:5,
        padding:'2%',
        width: "90%",
        
    },
    button: {
        margin:5,
        width: "100%",
        border:15,
        borderRadius:10
    }
})
