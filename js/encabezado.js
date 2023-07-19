function logout(){
    localStorage.setItem("id_user","null");
    window.location.href = "Index.html";
}
function cambiar_header() {
    let id_user = localStorage.getItem("id_user");
    alert(id_user);

    if (id_user != "null") {
        document.getElementById("header").innerHTML = `
    <img src="../IMAGENES/Logo.png" width="168.32" height="154" alt="Logo ESoils" class="Logo" />
    <ul class="menu">
        <div id="cont_menu">
            <li class="Boton_nav" onclick="home()"><img src="../VECTORES/Ícono_home.svg" width="58" height="50" alt="" class="img_navigation" />HOME</li>
            <li class="Boton_nav" onclick="mis_registros()"><img src="../VECTORES/registration.svg" width="46" height="50" alt="Registros" class="img_navigation" /> MY REGISTERS</li>
            <li class="Boton_nav" onclick="busqueda()"><img src="../VECTORES/imagen_2023-06-29_105553808.svg" width="50" height="50" alt="Búsqueda" class="img_navigation">SEARCH</li>
        </div>
    </ul>
    <div class="MyProfile" onclick="myprofile()">
        <div>
            <img src="../images/My profile.png" width="90" height="90" alt="mi perfil">
        </div>
    </div>`;

    }

}


cambiar_header();