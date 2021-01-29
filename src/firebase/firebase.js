import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyB32JBL6t0VCOOrCmR3u7GS8HgyJkysdsQ",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: "https://budgifyapp-499e1-default-rtdb.firebaseio.com",
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
