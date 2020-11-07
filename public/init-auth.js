// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyDIS1xQpI4Y1bhaU0h_fQPBEYKGp-pqR0A",
  authDomain: "learn-firebase-cc9bc.firebaseapp.com",
  databaseURL: "https://learn-firebase-cc9bc.firebaseio.com",
  projectId: "learn-firebase-cc9bc",
  storageBucket: "learn-firebase-cc9bc.appspot.com",
  messagingSenderId: "32575314068",
  appId: "1:32575314068:web:128f001784230986e3bc81"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get elements from DOM
const regEmail = document.getElementById('reg-email');
const regPw = document.getElementById('reg-pw');
const regBut = document.getElementById('reg-but');
const logEmail = document.getElementById('log-email');
const logPw = document.getElementById('log-pw');
const loginBut = document.getElementById('login-but');
const logoutBut = document.getElementById('logout-but');
const welcome = document.getElementById('welcome');

let auth = firebase.auth();

// Register
regBut.addEventListener('click', () => {
  let email = regEmail.value;
  let pw = regPw.value;

  // Register new user
  let result = auth.createUserWithEmailAndPassword(email, pw);


  //Catch errors
  result.catch(error => {
    // Handle errors
    let errorCode = error.code;
    let errorMessage = error.message;

    if (errorCode == 'auth/weak-password') {
      alert('Password too weak.');
    } else {
      alert(errorMessage);
    }

    console.log(error);
  });
});

// Login
loginBut.addEventListener('click', () => {
  let email = logEmail.value;
  let pw = logPw.value;

  // Sign in user
  let result = auth.signInWithEmailAndPassword(email, pw);

  //Catch errors
  result.catch(error => {
    // Handle errors
    let errorCode = error.code;
    let errorMessage = error.message;

    if (errorCode == 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }

    console.log(error);
  });
});

// Logout
logoutBut.addEventListener('click', () => {
  // Sign out currently authenticated user
  auth.signOut();
});

// Add realtime auth listener
auth.onAuthStateChanged(user => {
  // Check if user is logged in
  if (user) {
    // Log user info to console
    console.log(user);
    console.log('Logged in.')

    // Show logout button and hide login button
    loginBut.style.display = "none";
    logoutBut.style.display = "block";

    // Welcome user
    let email = user.email;
    welcome.innerHTML = `Hello! ${email}`;
    welcome.style.display = 'block';

  } else {
    console.log('Logged out.');
    logoutBut.style.display = "none";
    loginBut.style.display = "block";

    welcome.style.display = "none";
  }
});
