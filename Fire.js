import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
    // Placez ici vos identifiants Firebase (SDK) - Cf. diapos 14 et 15
    apiKey: "AIzaSyASnVDDq3-ObixMF3yEQkins5O3Lb0QtzU",
    authDomain: "my-movies-364ea.firebaseapp.com",
    projectId: "my-movies-364ea",
    storageBucket: "my-movies-364ea.appspot.com",
    messagingSenderId: "644405769926",
    appId: "1:644405769926:web:510928c55b95435c1ac9c7"
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default class Fire {
    getMovies(callback) {
        const q = query(collection(db, 'movies'), orderBy('title', 'asc'));
        onSnapshot(q, (snapshot) => {
            let movies = [];
            snapshot.forEach(doc => {
                movies.push({ id: doc.id, ...doc.data() });
            });
            callback(movies);
        });
    }

    addMovie(movie) {
        addDoc(collection(db, 'movies'), movie);
    }

    updateMovie(movie) {
        updateDoc(doc(db, 'movies', movie.id), movie);
    }

    deleteMovie(movie) {
        deleteDoc(doc(db, 'movies', movie.id))
    }
}

