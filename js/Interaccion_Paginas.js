// JavaScript Document
function home() {
    window.location.href = "Index.html";
}

function mis_registros() {
    window.location.href = "Opciones_mis_registros.html";
}

function busqueda() {
    window.location.href = "BusquedaDeSuelos.html";
}

function login() {
    window.open("Login-general.html", "_blank"); 
}

function signin() {
    window.open("Sign-up-1.html", "_blank");  
}

function myregisters() {
    let id_user = localStorage.getItem("id_user");
    if (id_user != "null") {
        window.location.href = "MisRegistros.html";
    }else{
        window.open("Login-general.html", "_blank"); 
    }
}

function nuevoregistro() {
    let id_user = localStorage.getItem("id_user");
    if (id_user != "null") {
        window.location.href = "Photo_Location.html"
    }else{
        window.open("Login-general.html", "_blank"); 
    };
}

function aboutus() {
    window.location.href = "About_us.html";
}

function myprofile(){
    window.location.href = "EditProfile.html";
}

// var none1 = document.getElementById('none1');
// var none2 = document.getElementById('none2');2
// none1.disabled = true;
// none2.disabled = true;
