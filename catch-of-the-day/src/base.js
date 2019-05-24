import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCM3klXyJNb2rZWlvWFp1BtvQvv2ugKnBk",
  authDomain: "catch-of-the-day-lhp.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-lhp.firebaseio.com",
  projectId: "catch-of-the-day-lhp"
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;
