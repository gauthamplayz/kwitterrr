
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAEShqMrPDLmb8g6XP2ecCS9reZNBaevnM",
      authDomain: "kwitter-a5381.firebaseapp.com",
      projectId: "kwitter-a5381",
      storageBucket: "kwitter-a5381.appspot.com",
      messagingSenderId: "718186417226",
      appId: "1:718186417226:web:b55317f64dc0cc73e5eab3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
