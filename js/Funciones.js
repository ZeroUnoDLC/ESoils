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


