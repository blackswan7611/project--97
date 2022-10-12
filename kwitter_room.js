
const firebaseConfig = {
      apiKey: "AIzaSyCssiSjMZufwFcVH4crAwHAwyehKT_QiHE",
      authDomain: "kwitterproject-a0869.firebaseapp.com",
      databaseURL: "https://kwitterproject-a0869-default-rtdb.firebaseio.com",
      projectId: "kwitterproject-a0869",
      storageBucket: "kwitterproject-a0869.appspot.com",
      messagingSenderId: "196128794246",
      appId: "1:196128794246:web:3ba8e2821dfb06763a1307"
    };    
    
firebase.initializeApp(firebaseConfig);

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) 
      {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot)
             {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - "+ Room_names );
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      });});}
getData();

user_name = localStorage.getItem("userName");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
    console.log(user_name);

    function redirectToRoomName(name1)
    {
      console.log(name1);
      localStorage.setItem("room_name", name1);
      window.location = "kwitter_page.html";
    }

    function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("userName");
      localStorage.removeItem("room_name");
      window.location = "index.html" ;
}

