

// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB74-WW-7njwHwQvYfSzS-I_xtSJ9Cdw1c",
    authDomain: "pokemon-game-19f73.firebaseapp.com",
    databaseURL: "https://pokemon-game-19f73-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pokemon-game-19f73",
    storageBucket: "pokemon-game-19f73.appspot.com",
    messagingSenderId: "428168442141",
    appId: "1:428168442141:web:c6d78bf795fa079b33b1f4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Firebase {
     constructor() { 
        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonsSocket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val());
        })
    }

    offPokemonsSocket = () => {
        this.database.ref('pokemons').off();
    
    }

    getPokemonsOnce =async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());

    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addPokemon = (data,cb) =>{
        const newKey=this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/'+ newKey).set(data).then(()=> cb());
    }
}
 
export default Firebase;

 

