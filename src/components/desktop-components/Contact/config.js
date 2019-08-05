import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDRpGW5QIMktIariviT6_w8Ne0hXbMn3HY",
  authDomain: "relationship-advices.firebaseapp.com",
  databaseURL: "https://relationship-advices.firebaseio.com",
  projectId: "relationship-advices",
  storageBucket: "relationship-advices.appspot.com",
  messagingSenderId: "1057064483666",
  appId: "1:1057064483666:web:f2aafc9bda984c65"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
