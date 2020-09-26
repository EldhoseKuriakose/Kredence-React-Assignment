import app from 'firebase/app';
import 'firebase/auth';
 
const config = {
    apiKey: "AIzaSyARkKG9nv7DjckWJcJeCij6_89cO1PAJ1s",
    authDomain: "kredence-react-test.firebaseapp.com",
    databaseURL: "https://kredence-react-test.firebaseio.com",
    projectId: "kredence-react-test",
    storageBucket: "kredence-react-test.appspot.com",
    messagingSenderId: "3299541614",
    appId: "1:3299541614:web:3e6b30abb5eb5e884a5c7f",
    measurementId: "G-2G44B48V3K"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }
   
    // *** Auth API ***
   
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
   
    doSignOut = () => this.auth.signOut();
   
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
}
   
export default Firebase;