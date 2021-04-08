//File Name Is - Room List.js
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
//Firebase Link
var firebaseConfig = {
    apiKey: "AIzaSyCaYnj3U5BuFSbgha6SWHa2P31tESfbRmU",
    authDomain: "school-hive.firebaseapp.com",
    projectId: "school-hive",
    storageBucket: "school-hive.appspot.com",
    messagingSenderId: "460097997985",
    appId: "1:460097997985:web:4fb1e4cf6e45f82a6274e0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//Variables
