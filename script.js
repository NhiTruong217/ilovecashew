let name = "Nhi";
let age = 14;
let likesushi = false;

function greeting(name) {
    console.log("Hello", name);
}

greeting("Nhi");

function saveName() {
    let newName = document.getElementById("greeter").value; // text field value from the user
    document.getElementById('username').textContent = newName;
    document.getElementById("greeter").value = "";
}