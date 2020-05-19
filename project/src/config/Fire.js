import firebase from 'firebase';

const config = {
apiKey: "AIzaSyCjN4obQGSoePw-wME_yA8JVx6kIzuRCwE",
authDomain: "kunskapspaketet.firebaseapp.com",
databaseURL: "https://kunskapspaketet.firebaseio.com",
projectId: "kunskapspaketet",
storageBucket: "kunskapspaketet.appspot.com",
messagingSenderId: "1011354741666",
appId: "1:1011354741666:web:fe999e52c5d62fedb420fb"
};

const fire = firebase.initializeApp(config);

export default fire;
