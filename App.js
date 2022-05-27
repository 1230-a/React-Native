import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import Fire from './Fire';
import AddButton from './component/AddButton';
import MovieModal from './component/MovieModal';
import { Button, Card } from 'react-native-elements';
import { Image } from 'react-native-web';
import MovieCard from './component/MovieCard'
import { Paragraph, Title } from 'react-native-paper';
import CommentModal from './'


export default function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [isCommentModalVisible, setIsCommentModalVisible] = useState(false)

  useEffect(() => {
    const firebase = new Fire();
    firebase.getMovies(movies => {
      setMovies(movies);
      setLoading(false);
    })
  }, [])
  console.log(movies)
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.texte1}>Bienvenue sur <Text style={styles.Text}>My Movies </Text></Text>
        <MovieModal isVisible={isModalVisible} handleClose={() => { setIsModalVisible(false) }} />
        <StatusBar style="auto" />
        <MovieCard />
        <AddButton content="Ajouter un film" handlePress={() => { setIsModalVisible(true) }} />
      </ScrollView>


    </View>

  );

}


const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aliceblue',
    width: '100%'

  },
  Text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 26,
    margin: 1,
    padding: 5,
    lineHeight: 100,
    textAlign: 'center'
  },
  texte1:
  {
    textAlign: 'center',
    lineHeight: 110,
    fontWeight: 'bold',
    margin: 10,
    padding: 5,
    fontSize: 18,
  },
  photo: {

    width: '100%',
    height: '100%',
    marginTop: '5%'
  }
});

