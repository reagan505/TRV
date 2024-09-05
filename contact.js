// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// New Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9rH1C8CWV8GMmbe1wV_WXeFygNipJw5Q",
  authDomain: "aqua-travel-4bbbd.firebaseapp.com",
  databaseURL: "https://aqua-travel-4bbbd-default-rtdb.firebaseio.com",
  projectId: "aqua-travel-4bbbd",
  storageBucket: "aqua-travel-4bbbd.appspot.com",
  messagingSenderId: "1028042756902",
  appId: "1:1028042756902:web:a496ac7a79212bab9da7e7",
  measurementId: "G-RZJNDHLQ72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

// DOM elements
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    try {
        // Add a new document with a generated ID
        await addDoc(collection(firestore, 'contactMessages'), {
            name: name,
            email: email,
            subject: subject,
            message: message,
            timestamp: new Date()
        });

        // Notify user of successful submission
        alert(`Thank you, ${name}! Your message has been sent. We will contact you shortly at ${email}.`);

        // Reset the form
        contactForm.reset();
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("There was an error sending your message. Please try again later.");
    }
});
