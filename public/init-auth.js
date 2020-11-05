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
const regPw = document.getElementById('reg-pw')
const regBut = document.getElementById('reg-but');

regBut.addEventListener('click', () => {
  let email = regEmail.value;
  let pw = regPw.value;
  let auth = firebase.auth();

  // Firebase function
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
