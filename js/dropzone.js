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
      // Obtener el nombre completo del archivo, incluida la extensión
      let str1 = file.name;
    
      // Usar `substring` para extraer la parte del nombre del archivo después del último punto
      let str2 = str1.substring(str1.lastIndexOf(".")-1);
      alert("str2: "+str2);
    
      // Obtener el nombre que está almacenado en el localStorage bajo la clave 'numsueladd1'
      let numsuelo = localStorage.getItem('numsueladd1');
    
      // Guardar el nombre completo del archivo en el localStorage bajo la clave 'soil_picture'
      localStorage.setItem('soil_picture', "../images/"+numsuelo+str2);
    
      // Concatenar el nombre almacenado en 'numsueladd1' con la extensión del archivo (str2)
      // Esto dará como resultado el nuevo nombre del archivo con su extensión
      // Por ejemplo, si 'numsueladd1' es 'imagen' y la extensión del archivo es '.jpg', el nuevo nombre será 'imagen.jpg'
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
