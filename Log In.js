//File Name Is - Log In.js
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

function logIn() {
    var username = document.getElementById("username_input").value;
    var roll_number = document.getElementById("roll_number_input").value;
    if (username == "") {
        document.getElementById("hidden_label").style.visibility = "visible";
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("roll_number", roll_number);
        window.location = "Room List.html";
    }

    if (roll_number == "") {
        document.getElementById("hidden_label").style.visibility = "visible";
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("roll_number", roll_number);
        window.location = "Room List.html";
    }
}
