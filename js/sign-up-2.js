let idnumber;
idnumber=document.getElementById("id_number");

idnumber.addEventListener("input",function(){
    if(idnumber.value==localStorage.getItem("datos_registro")){
        let submit=document.getElementById("submit");
        submit.disabled=false;
    }else{
        submit.disabled=true;
    }
});