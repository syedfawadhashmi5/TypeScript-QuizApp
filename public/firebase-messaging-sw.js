importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyDGDT1xXw0VyH7HKQmN-Hp2OMDod8i6V4M",
  authDomain: "quiz-web-app-v1.firebaseapp.com",
  databaseURL: "https://quiz-web-app-v1.firebaseio.com",
  projectId: "quiz-web-app-v1",
  storageBucket: "quiz-web-app-v1.appspot.com",
  messagingSenderId: "771231989612",
  appId: "1:771231989612:web:73c972b286fe958a0f7d49",
  measurementId: "G-K7R9Z1R880"
};

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();