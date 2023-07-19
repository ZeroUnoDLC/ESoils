var soil_picture, idcli, codprov, codcan, altitud, latitud, longitud, numsueladd1;
let idnumber;
window.onload = function () {
    idnumber = document.getElementById("code_number");
    if (idnumber != null && idnumber != undefined) {
        //console.log("testtting_code");
        idnumber.addEventListener("input", function () {
            // La cadena que quieres convertir
            var cadena = localStorage.getItem("datos_registro");
            // Usar JSON.parse() para convertir la cadena en un objeto
            var objeto = JSON.parse(cadena);

            // Mostrar el objeto en la consola
            //console.log(objeto);

            if (idnumber.value == objeto.randomNumber) {
                let submit = document.getElementById("submit");
                submit.disabled = false;
            } else {
                submit.disabled = true;
            }
        });
    }
}

async function numRegSuelAdd() {
    //alert("testtttt");
    try {
        let data={".":"."};
        const res = await getId("numRegSuelAdd", data);
        // Aquí puedes hacer algo con el resultado obtenido
        var numero = res.slice(1, -1); 
        localStorage.setItem('numsueladd1', numero);
        //console.log(res);
    } catch (error) {
        console.log(error);
    }
}
window.onload = numRegSuelAdd;


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

        //alert(res);
        if (res != "null") {
            alert("inicio exitoso");
            localStorage.setItem('id_user', res);
            window.location.href = "Photo_Location.html";
        } else {
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
        
        //alert(res);
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
    let data = JSON.parse(cadena);

    try {
        //console.log(data);
        const res = await getId("postRegistro_Usuario2", data);
        // Aquí puedes hacer algo con el resultado obtenido
        
        //alert(res);
        window.location.href = "Login-general.html";

    } catch (error) {
        console.log(error);
    }
}

async function PostRegistro_Suelos() {
    idcli=localStorage.getItem("id_user");
    latitud=localStorage.getItem("latitud");
    longitud=localStorage.getItem("longitud");
    altitud=localStorage.getItem("elevacion");
    codprov=document.getElementsByName("codprov")[0].value;
    codcan=document.getElementsByName("codcan")[0].value;
    //var id_user = localStorage.getItem("nombreDato"); ->es para obtener un dato
    //localStorage.setItem("nombreDato", "valorDato"); -> nomenclatura agregar dato
    //localStorage.setItem("nombreDato", "nuevovalor"); -> actualizar dato


    let data = {
        idcli: idcli,
        codprov: codprov,
        codcan: codcan,
        soil_picture: soil_picture,
        altitude: altitud,
        latitude: latitud,
        length: longitud
    };

    console.log(data);
    // try {
    //     //console.log(data);
    //     const res = await getId("PostRegistro_Suelos", data);
    //     // Aquí puedes hacer algo con el resultado obtenido
    //     alert(res);
    //     localStorage.setItem("datos_registro_suelo", res);
    //     window.location.href = "Fisicas-1.html";

    // } catch (error) {
    //     console.log(error);
    // }
}