import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
    authDomain: "myapp-project-123.firebaseapp.com",
    databaseURL: "https://myapp-project-123.firebaseio.com",
    projectId: "myapp-project-123",
    storageBucket: "myapp-project-123.appspot.com",
    messagingSenderId: "65211879809",
    appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
    measurementId: "G-8GSGZQ44ST"
  };
  firebase.initializeApp(firebaseConfig);
 // const messaging = firebase.messaging();

  /*
export function initNotification() {
    
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        
        
        if(permission === "granted"){ 
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
              
        }
        })
    
}
*/




export function initNotification() {
    
   return Notification.requestPermission();
    
}