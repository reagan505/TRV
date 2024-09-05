// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

//  Firebase configuration
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
const analytics = getAnalytics(app); // Add this line to initialize Analytics

// DOM elements
const main = document.getElementById("main");
const returnBtn = document.getElementById("return-btn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");
const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createacct = document.getElementById("create-acct");
const createacctbtn = document.getElementById("create-acct-btn");
const signupButton = document.getElementById("sign-up");

createacctbtn.addEventListener("click", () => {
  let isVerified = true;
  const signupEmail = signupEmailIn.value;
  const confirmSignupEmail = confirmSignupEmailIn.value;
  const signupPassword = signupPasswordIn.value;
  const confirmSignUpPassword = confirmSignUpPasswordIn.value;

  if (signupEmail !== confirmSignupEmail) {
    window.alert("Emails do not match.");
    isVerified = false;
  }

  if (signupPassword !== confirmSignUpPassword) {
    window.alert("Passwords do not match.");
    isVerified = false;
  }

  if (!signupEmail || !confirmSignupEmail || !signupPassword || !confirmSignUpPassword) {
    window.alert("All fields are required.");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        window.alert("Account created successfully!");
        window.location = "../html/packages.html"; // Redirect on success
      })
      .catch((error) => {
        window.alert("Error: " + error.message);
      });
  }
});

submitButton.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.alert("Login successful!");
      window.location = "../html/packages.html"; // Redirect after login
    })
    .catch((error) => {
      window.alert("Login failed: " + error.message);
    });
});

// Toggle between login and signup forms
signupButton.addEventListener("click", () => {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", () => {
  main.style.display = "block";
  createacct.style.display = "none";
});
