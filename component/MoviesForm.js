import { Text, TextInput, View, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'

export default function MoviesForm(props) {
    return (
        <View style={styles.view}>
            <Text style={[styles.text, {fontSize:25}]}> Ajouter un Film</Text>
            <Text style={[styles.text, {fontSize:15},{marginTop:25}]}>Titre</Text>
            <TextInput placeholder='Titre du film' 
            style={[styles.TextInput1, { height: 40 }]}  
            value={props.title} 
            onChangeText={props.handleTitleChange}/>
            <Text style={[styles.text, {fontSize:15},{marginTop:25}]}>Synopsis</Text>
            <TextInput placeholder='Synopsies du film' 
            style={[styles.TextInput1, { height: 140 }]} 
            value={props.synopsis} multiline
            onChangeText={props.handleSynopsisChange}/>
            <Text style={[styles.text, {fontSize:15},{marginTop:25}]}>Entrez l'url de l'image</Text>
            <TextInput placeholder='Url valide' 
            style={[styles.TextInput1, { height: 40 }]} 
            value={props.urlImage}
            onChangeText={props.handleUrlChange}/>
            <Button title='Enregistrer' buttonStyle={styles.button} onPress={props.onSubmit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        alignItems:'center',
        justifyContent:'center',
        margin:'5%',
        backgroundColor:'skyblue'
        
    },
    text:{
       fontWeight:'bold',
       fontFamily:'Arial',
       textAlign:'center'
       
    },
    TextInput1: {
        backgroundColor: "skyblue",
        borderWidth: 5,
        borderRadius:10,
        alignContent:'center',
        margin:5,
        padding:'2%',
        width: "90%",
        
    },
    button: {
        backgroundColor:"skyblue",
        margin:5,
        width: "100%",
        border:15,
        borderRadius:10
    }
});