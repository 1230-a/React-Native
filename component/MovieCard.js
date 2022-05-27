import { StyleSheet, Text, View } from 'react-native';
import AddButton from './AddButton';
import { useState, useEffect } from "react";
import MovieModal from './MovieModal';
import CommentModal from './CommentModal';
import Fire from '../Fire';
import { Button, Card, Title, Paragraph } from 'react-native-paper'; //HAHAHA
// import CommentModal from './components/CommentModal';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isCommentModalVisible, setIsCommentModalVisible] = useState(false)
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true);
  const [selectMovie, setSelectMovie] = useState(null)
  const [selectAuthor, setSelectAuthor] = useState(null)

  useEffect(() => {
    const firebase = new Fire();
    firebase.getMovies(movies => {
      setMovies(movies);
      setLoading(false);
    })
  }, [])
  function handleDelete(movie) {
    const firebase = new Fire();
    firebase.deleteMovie(movie);
  }

  return (

    <View style={styles.container}>
     
      {movies.map(movie => (
          <View style={styles.film} key={movie.id}>
            <Card>

              <Card.Content>
                <Title style={{fontWeight:'bold',textDecorationLine:'underline', textDecorationColor:'gray', fontSize:30}}>{movie.title}</Title>
              </Card.Content>
              <Card.Cover source={{ uri: movie.urlImage }}/>
              <Paragraph style={{fontSize:20, color:'gray',paddingLeft:20,paddingTop:5, textAlign:'justify'}}>{movie.synopsis}</Paragraph>
              <Card.Actions>
                <Button onPress={() => handleDelete(movie)}>🗑️</Button>
                <Button onPress={() => { setIsModalVisible(true), setSelectMovie(movie) }} style={styles.bt}>🖊️</Button>
                <Button onPress={() => setIsCommentModalVisible(true) } style={styles.bt}>✍️</Button>
              </Card.Actions>
            </Card>
            <CommentModal visible={isCommentModalVisible } cancelComment={() => { setIsCommentModalVisible(false) }}/>
          </View>
        ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor:'black',
    borderRadius:5,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
  },
  film: {
    borderWidth: 3,
    
    borderRadius:6,
    padding: 10,
    margin: 10,
    width:'90%'
  }
});