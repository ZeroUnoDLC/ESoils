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
        })
}}

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
//URL NECESARIA
const url = "http://localhost:3000/";//no modificar, se modifica cuando esté en produccion
//FUNCION NECESARIA
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
//Funciones
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
        alert(res);
        if (res == null) {
            alert("inicio exitoso");
            localStorage.setItem('id_user', res);
        } else {
            alert("credenciales incorrectas");
        }
    }} catch (error) {
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
}
//////////////FORMULARIO FÍSICAS////////////////////////////////
async function postFisicas() {
    let apparent_density = document.getElementsByName("apparent_density")[0].value;
    let real_density = document.getElementsByName("real_density")[0].value;
    let relative_density = document.getElementsByName("relative_density")[0].value;
    let maximum_dry_density = document.getElementsByName("maximum_dry_density")[0].value;
    let compressive_strength = document.getElementsByName("compressive_strength")[0].value;
    let thermal_conductivity = document.getElementsByName("thermal_conductivity")[0].value;
    let liquid = document.getElementsByName("liquid")[0].value;
    let plastic = document.getElementsByName("plastic")[0].value;
    let silt = document.getElementsByName("silt")[0].value;
    let clay = document.getElementsByName("clay")[0].value;
    let gravel = document.getElementsByName("gravel")[0].value;
    let sand = document.getElementsByName("sand")[0].value;
    let optimum_moisture_content = document.getElementsByName("optimum_moisture_content")[0].value;
    let plasticity_index = document.getElementsByName("plasticity_index")[0].value;
    let grain_size = document.getElementsByName("grain_size")[0].value;
    let water_content = document.getElementsByName("water_content")[0].value;
    let color = document.getElementsByName("color")[0].value;
    let tensile_strength = document.getElementsByName("tensile_strength")[0].value;
    let porosity = document.getElementsByName("porosity")[0].value;
    let initial_moisture = document.getElementsByName("initial_moisture")[0].value;
    let earring = document.getElementsByName("earring")[0].value;
    let ground_altitude = document.getElementsByName("ground_altitude")[0].value;
    let average_temperature = document.getElementsByName("average_temperature")[0].value;
    let rainfall_regime = document.getElementsByName("rainfall_regime")[0].value;

    /*
    var idcli = localStorage.getItem("idcli"); 
    var ide_suelo = localStorage.getItem("ide_suelo"); */
    //var idcli = "0401751227"
    var ide_suelo = "SOILRRDSQw";

    let data = {
        ide_suelo: ide_suelo,
        apparent_density: apparent_density, real_density: real_density,
        relative_density: relative_density, maximum_dry_density: maximum_dry_density,
        compressive_strength: compressive_strength, thermal_conductivity: thermal_conductivity,
        liquid: liquid, plastic: plastic, silt: silt, clay: clay,
        gravel: gravel, sand: sand, optimum_moisture_content: optimum_moisture_content,
        plasticity_index: plasticity_index, grain_size: grain_size,
        water_content: water_content, color: color, tensile_strength: tensile_strength,
        porosity: porosity, initial_moisture: initial_moisture, earring: earring,
        ground_altitude: ground_altitude, average_temperature: average_temperature,
        rainfall_regime: rainfall_regime
    }

    try {
        const res = await getId("postFisicas", data);
        // Aquí puedes hacer algo con el resultado obtenido
        
        //alert(res);
        localStorage.setItem("datos_registro", res);
        window.location.href = "Sign-up-2.html";

        //alert(res);
        if (res != "null") {
            alert("Successfully Registered Physical Properties");
            //localStorage.setItem('id_user', res);
            location.href = "../PAGINAS/Quimicas-1.html";

        }
    } catch (error) {
        console.log(error);
    }
}

async function postQuimicas() {
    let alkalinity_or_acidity = document.getElementsByName("alkalinity_or_acidity")[0].value;
    let organic_material = document.getElementsByName("organic_material")[0].value;
    let total_phosphorus = document.getElementsByName("total_phosphorus")[0].value;
    let extractable_sulfur = document.getElementsByName("extractable_sulfur")[0].value;
    let interchangeable_aluminum = document.getElementsByName("interchangeable_aluminum")[0].value;
    let electric_conductivity = document.getElementsByName("electric_conductivity")[0].value;
    let exchangeable_calcium = document.getElementsByName("exchangeable_calcium")[0].value;
    let exchangeable_magnesium = document.getElementsByName("exchangeable_magnesium")[0].value;
    let exchangeable_potassium = document.getElementsByName("exchangeable_potassium")[0].value;
    let exchangeable_sodium = document.getElementsByName("exchangeable_sodium")[0].value;
    let extractable_copper = document.getElementsByName("extractable_copper")[0].value;
    let removable_iron = document.getElementsByName("removable_iron")[0].value;
    let extractable_manganese = document.getElementsByName("extractable_manganese")[0].value;
    let extractable_zinc = document.getElementsByName("extractable_zinc")[0].value;
    let boron = document.getElementsByName("boron")[0].value;

    /*
    var idcli = localStorage.getItem("idcli"); 
    var ide_suelo = localStorage.getItem("ide_suelo"); */
    //var idcli = "0401751227"
    var ide_suelo = "SOILRRDSQw";

    let data = {
        ide_suelo: ide_suelo,
        alkalinity_or_acidity: alkalinity_or_acidity,
        organic_material: organic_material,
        total_phosphorus: total_phosphorus,
        extractable_sulfur: extractable_sulfur,
        interchangeable_aluminum: interchangeable_aluminum,
        electric_conductivity: electric_conductivity,
        exchangeable_calcium: exchangeable_calcium,
        exchangeable_magnesium: exchangeable_magnesium,
        exchangeable_potassium: exchangeable_potassium,
        exchangeable_sodium: exchangeable_sodium,
        extractable_copper: extractable_copper,
        removable_iron: removable_iron,
        extractable_manganese: extractable_manganese,
        extractable_zinc: extractable_zinc,
        boron: boron
    }

    console.log(data);
    try {
        const res = await getId("postQuimicas", data);
        // Aquí puedes hacer algo con el resultado obtenido
        //alert(res);
        if (res != "null") {
            alert("Successfully Registered Chemical Properties");
            //localStorage.setItem('id_user', res);
            location.href = "../PAGINAS/Biologicas-1.html";
        }
    } catch (error) {
        console.log(error);
    }
}

////////////////BIOLOGICAAAAAAAAS////////////////
async function postBiologicas() {
    let organisms_description = document.getElementsByName("organisms_description")[0].value;
    let microbial_activity = document.getElementsByName("microbial_activity")[0].value;
    let microbial_intensity = document.getElementsByName("microbial_intensity")[0].value;
    let microbial_description = document.getElementsByName("microbial_description")[0].value;
    let biomass_method = document.getElementsByName("biomass_method")[0].value;
    let biomass_results = document.getElementsByName("biomass_results")[0].value;
    let biomass_description = document.getElementsByName("biomass_description")[0].value;
    let macroinvertebrates_description = document.getElementsByName("macroinvertebrates_description")[0].value;
    let average_depth = document.getElementsByName("average_depth")[0].value;
    let measurement_method = document.getElementsByName("measurement_method")[0].value;
    let additional_remarks = document.getElementsByName("additional_remarks")[0].value;

    /*
    var idcli = localStorage.getItem("idcli"); 
    var ide_suelo = localStorage.getItem("ide_suelo"); */
    //var idcli = "0401751227"
    var ide_suelo = "SOILRRDSQw";

    let data = {
        ide_suelo: ide_suelo,
        organisms_description: organisms_description,
        microbial_activity: microbial_activity,
        microbial_intensity: microbial_intensity,
        microbial_description: microbial_description,
        biomass_method: biomass_method,
        biomass_results: biomass_results,
        biomass_description: biomass_description,
        macroinvertebrates_description: macroinvertebrates_description,
        average_depth: average_depth,
        measurement_method: measurement_method,
        additional_remarks: additional_remarks
    }

    try {
        const res = await getId("postBiologicas", data);
        // Aquí puedes hacer algo con el resultado obtenido
        //alert(res);
        if (res != "null") {
            //localStorage.setItem('id_user', res);


        }
    } catch (error) {
        console.log(error);
    }
}

//MINIFORMULARIOS BIOLOGICAS
async function postBiologicas1() {
    let organism = document.getElementById("organism").value;
    let number_organism = document.getElementById("number_organism").value;

    /*
    var idcli = localStorage.getItem("idcli"); 
    var ide_suelo = localStorage.getItem("ide_suelo"); */
    //var idcli = "0401751227"
    var ide_suelo = "SOILRRDSQw";

    let data = {
        ide_suelo: ide_suelo,
        organism: organism,
        number_organism: number_organism
    }

    console.log(data);
    try {
        const res = await getId("organism", data);
        // Aquí puedes hacer algo con el resultado obtenido
        //alert(res);
        if (res != "null") {
            //localStorage.setItem('id_user', res);
            var txtOrganisms = document.getElementById("txtOrganisms");
            txtOrganisms.innerHTML = txtOrganisms.value + "\n " + organism + ": " + number_organism;
        }
    } catch (error) {
        console.log(error);
    }
}


async function postBiologicas2() {
    let macroinvertebrates = document.getElementById("macroinvertebrates").value;
    let number_macroinvertebrates = document.getElementById("numInvertebrates").value;

    /*
    var idcli = localStorage.getItem("idcli"); 
    var ide_suelo = localStorage.getItem("ide_suelo"); */
    //var idcli = "0401751227"
    var ide_suelo = "SOILRRDSQw";

    let data = {
        ide_suelo: ide_suelo,
        macroinvertebrates: macroinvertebrates,
        number_macroinvertebrates: number_macroinvertebrates
    }

    try {
        const res = await getId("macroinvertebrates", data);
        // Aquí puedes hacer algo con el resultado obtenido
        //alert(res);
        if (res != "null") {
            //localStorage.setItem('id_user', res);
            var txtMacroinvertebrates = document.getElementById("txtMacroinvertebrates");
            txtMacroinvertebrates.innerHTML = txtMacroinvertebrates.value + "\n " + macroinvertebrates + ": " + number_macroinvertebrates;
        }
    } catch (error) {
        console.log(error);
    }
}
//CLASIFICATION


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
        alert(res);
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

    let inputs = document.getElementsByTagName("input");
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
    //     localStorage.setItem("datos_registro", res);
    //     window.location.href = "Sign-up-2.html";

    // } catch (error) {
    //     console.log(error);
    // }
}

