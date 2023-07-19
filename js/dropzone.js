Dropzone.autoDiscover = false;
const dropzone = new Dropzone("div#formDrop", {
    url: "http://localhost:3000/guardarImg",
    dictDefaultMessage: `<p id="txtDrop">Select image</p>`,
    maxFiles: 1,
    init: function () {
      this.on("maxfilesexceeded", function (file) {
        this.removeFile(file);
        alert("¡Solo se puede subir un archivo!");
        document.head.appendChild(estilo_noMasImg);
      });
      this.on("sending", async function (file, xhr, data) {
        alert("La imagen se ha guardado correctamente");
        // Use await to wait for the promise to resolve before continuing
        
          await data.append("fullPath", file.fullPath);
          console.log("ruta completa: ");
          console.log(data);
        
        ingreso_enlace = document.getElementById("ingreso_enlace");
        if (ingreso_enlace != undefined) {
          await ingreso_enlace.remove();
        }
        await data.append("type_chooser", "1");
        // Prevent the default behavior of the event
        event.preventDefault();
      });      
      this.on("addedfile", function (file) {
        if (file.name.includes("http") || file.name.includes("data:image")) {
          dzSize = file.previewElement.querySelector(".dz-size");
          dzProgress = file.previewElement.querySelector(".dz-progress");
          previsualizacion = file.previewElement.querySelector("img");
          previsualizacion.src = file.name;
          
          previsualizacion.style = "width: 100%; height: 100%;";
          dzProgress.style = "display: none;";
          dzSize.style = "display: none;";
          ingreso_enlace.style = "z-index: -1;";
          this.options.maxFiles = 0;
          document.getElementById("aux_IngresarEnlace").value = file.name;
        }
      });
    },
    renameFile: function (file) {
      let str1 = file.name;
      let str2 = str1.substring(str1.lastIndexOf("."));
      let nombrearch=localStorage.getItem('numsueladd1');
      //var numero = nombrearch.slice(1, -1); // elimina el primer y último carácter console.log(numero); // muestra “5”
      //console.log("numero: "+numero);
      //alert("esperar");
      return nombrearch + str2;
    }
  });
  dropzone.on("complete", function (file) {
    
    var ext = /(.jpg|.jpeg|.png|.gif)$/i;
    if (!ext.exec(file.name)) {
      console.log("El archivo no es una imagen válida"); // rechazar el archivo
      dropzone.removeFile(file);
    }
  });
  dropzone.on("addedfile", file => {
    let contenedor_preImg = document.querySelector(".dz-image");
    contenedor_preImg.style = "width: 240px; height: 240px;";
    contenedor_preImg.parentNode.style = "width: 240px; height: 240px; margin: 0px !important;";
    contenedor_preImg.children[0].style = "width: 240px; height: 240px";
  });
