let idnumber =document.getElementById("code_number");
window.onload = function() { 
    if(idnumber!=null){
        console.log("testtting_code");
        idnumber.addEventListener("input",function(){
            // La cadena que quieres convertir
var cadena = localStorage.getItem("datos_registro");

// Usar JSON.parse() para convertir la cadena en un objeto
var objeto = JSON.parse(cadena);

// Mostrar el objeto en la consola
console.log(objeto);

            if(idnumber.value==objeto.randomNumber){
                let submit=document.getElementById("submit");
                submit.disabled=false;
            }else{
                submit.disabled=true;
            }
        });
    }
}

//////////////////////////////////
//////VARIABLE URL NECESARIA//////
const url = "http://localhost:3000/";//no modificar, se modifica cuando esté en produccion
//////FUNCIONES NECESARIAS PARA INTRODUCIR DATOS, NO MODIFICAR////
async function postId(url, data) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json();
}

async function getId(direccion, data) {
    try {
        const respuesta = await postId(`${url}${direccion}`, data);
        let resultadopost = (JSON.stringify(respuesta));
        return resultadopost;
    } catch (error) {
        console.log(error);
    }
}
//////////////////Funciones////////////////////
async function login() {
    let idcli = document.getElementsByName("idcli")[0].value;
    let passwordcli = document.getElementsByName("passwordcli")[0].value;
    //var id_user = localStorage.getItem("nombreDato"); ->es para obtener un dato
    //localStorage.setItem("nombreDato", "valorDato"); -> nomenclatura agregar dato
    //localStorage.setItem("nombreDato", "nuevovalor"); -> actualizar dato
    let data = {
        idcli: idcli,
        passwordcli: passwordcli
    };

    try {
        const res = await getId("login", data);
        // Aquí puedes hacer algo con el resultado obtenido
        alert(res);
        if(res==null){
            alert("inicio exitoso");
            localStorage.setItem('id_user', res);
        }else{
            alert("credenciales incorrectas");
        }
    } catch (error) {
        console.log(error);
    }
}

async function postRegistro_Usuario1() {
    let inputs = document.getElementsByTagName("input");
    //var id_user = localStorage.getItem("nombreDato"); ->es para obtener un dato
    //localStorage.setItem("nombreDato", "valorDato"); -> nomenclatura agregar dato
    //localStorage.setItem("nombreDato", "nuevovalor"); -> actualizar dato
    let data = {
        name: inputs[0].value,
        surname: inputs[1].value,
        id_number: inputs[2].value,
        email: inputs[3].value,
        password: inputs[4].value,
        r_password: inputs[5].value
    };

    try {
        //console.log(data);
        const res = await getId("postRegistro_Usuario1", data);
        // Aquí puedes hacer algo con el resultado obtenido
        alert(res);
        localStorage.setItem("datos_registro", res);
        window.location.href = "Sign-up-2.html";
        
    } catch (error) {
        console.log(error);
    }
}

async function postRegistro_Usuario2() {
    let inputs = document.getElementsByTagName("input");
    //var id_user = localStorage.getItem("nombreDato"); ->es para obtener un dato
    //localStorage.setItem("nombreDato", "valorDato"); -> nomenclatura agregar dato
    //localStorage.setItem("nombreDato", "nuevovalor"); -> actualizar dato
    var cadena = localStorage.getItem("datos_registro");

// Usar JSON.parse() para convertir la cadena en un objeto
let data=JSON.parse(cadena);

    try {
        //console.log(data);
        const res = await getId("postRegistro_Usuario2", data);
        // Aquí puedes hacer algo con el resultado obtenido
        alert(res);
        window.location.href = "Login-general.html";
        
    } catch (error) {
        console.log(error);
    }
}