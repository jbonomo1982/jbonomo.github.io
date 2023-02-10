function aLaCarga(){
    let x = document.getElementById("personal");
    let y = document.getElementById("estudios");
    let z = document.getElementById("expLab");
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";


}


function mostrar_personal() {
    let x = document.getElementById("personal");
    let z = document.getElementById("inicio");
    let e = document.getElementById("expLab");
    let d = document.getElementById("estudios");
    z.style.display = "none";
    if (x.style.display === "none") {
      x.style.display = "inline-block";
      e.style.display = "none";
      d.style.display = "none";

    } 
    else {
        x.style.display = "none";
        z.style.display = "inline-block";
      }
    
    }

function mostrar_estudios() {
    let x = document.getElementById("estudios");
    let z = document.getElementById("inicio");
    let e = document.getElementById("personal");
    let d = document.getElementById("expLab");
    z.style.display = "none";
    if (x.style.display === "none") {
        x.style.display = "inline-block";
        e.style.display = "none";
        d.style.display = "none";
        } 
    else {
        x.style.display = "none";
        z.style.display = "inline-block";
        }
    
}

function mostrar_experiencia() {
    let x = document.getElementById("expLab");
    let z = document.getElementById("inicio");
    let e = document.getElementById("personal");
    let d = document.getElementById("estudios");
    z.style.display = "none";
    if (x.style.display === "none") {
        x.style.display = "inline-block";
        e.style.display = "none";
        d.style.display = "none";
        } 
    else {
        x.style.display = "none";
        z.style.display = "inline-block";
        }
    
}
