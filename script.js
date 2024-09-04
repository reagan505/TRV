// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9rH1C8CWV8GMmbe1wV_WXeFygNipJw5Q",
  authDomain: "aqua-travel-4bbbd.firebaseapp.com",
  projectId: "aqua-travel-4bbbd",
  storageBucket: "aqua-travel-4bbbd.appspot.com",
  messagingSenderId: "1028042756902",
  appId: "1:1028042756902:web:a496ac7a79212bab9da7e7",
  measurementId: "G-RZJNDHLQ72"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig)
//initialize variables
const auth = firebaseConfig.auth()
const db = firebaseConfig.db()

//set registration function
function register(params) {
//Get all our input fields
const email = params .email
const password = params .password
const name = params .name
const subject = params .subject
const messages = params .messages

//validate input fields


}