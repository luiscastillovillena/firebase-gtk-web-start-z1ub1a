// Import stylesheets
import './style.css';

// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from 'firebase/app';

// Add the Firebase products and methods that you want to use
import { getAuth, EmailAuthProvider } from 'firebase/auth';
import {} from 'firebase/firestore';

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

let rsvpListener = null;
let guestbookListener = null;

let db, auth;

async function main() {
  // Add Firebase project configuration object here
  const firebaseConfig = {
    apiKey: 'AIzaSyAdaRkffrd8XtMkVdqf7XA8QaG8r33t1Gc',
    authDomain: 'fir-web-codelab-26a98.firebaseapp.com',
    projectId: 'fir-web-codelab-26a98',
    storageBucket: 'fir-web-codelab-26a98.appspot.com',
    messagingSenderId: '52497944425',
    appId: '1:52497944425:web:1f37790b061a1548b377f8',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  auth = getAuth();

  // FirebaseUI config
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      },
    },
  };

  // Initialize the FirebaseUI widget using Firebase
  const ui = new firebaseui.auth.AuthUI(auth);

  // Listen to RSVP button clicks
  startRsvpButton.addEventListener('click', () => {
    ui.start('#firebaseui-auth-container', uiConfig);
  });
}
main();
