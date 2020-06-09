import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAuGsGquosdeO1eIdUvMp5q6bM8bS3Nw0g",
  authDomain: "vue-practice-b1153.firebaseapp.com",
  databaseURL: "https://vue-practice-b1153.firebaseio.com",
  projectId: "vue-practice-b1153",
  storageBucket: "vue-practice-b1153.appspot.com",
  messagingSenderId: "356756071193",
  appId: "1:356756071193:web:c74abb64f0a58fe5a0db88",
  measurementId: "G-R26QB71W8Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const dbMessages = db.collection('messages');