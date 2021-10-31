import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBpeE7yMd42sMnmFiYy7VOCYngI6oFXTv8",
    authDomain: "react-cooking-app.firebaseapp.com",
    projectId: "react-cooking-app",
    storageBucket: "react-cooking-app.appspot.com",
    messagingSenderId: "538904877416",
    appId: "1:538904877416:web:e7700b127ce77a6b261edd"
  }

  //initialize firebase
  firebase.initializeApp(firebaseConfig)

  //initialize services
  const projectFirestore = firebase.firestore()

  export {projectFirestore}