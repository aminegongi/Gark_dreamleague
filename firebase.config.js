// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA4Cz6ES-MFLRT2AkR24suPLE5Q_8hI1EM',
  authDomain: 'achour-8acf1.firebaseapp.com',
  databaseURL: 'https://achour-8acf1.firebaseio.com',
  projectId: 'achour-8acf1',
  storageBucket: 'achour-8acf1.appspot.com',
  messagingSenderId: '433977748267',
  appId: '1:433977748267:web:6039df93b62631d5eb336e',
}

// Initialize Firebase
// initializeApp(firebaseConfig)
initializeApp(firebaseConfig)

export default getFirestore()
