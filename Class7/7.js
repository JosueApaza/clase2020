var alumnos = ["Aaron","Ana"];
listar()

function agregar(){
    var nombre = document.getElementById("cajita").value;
    alumnos.push(nombre);
    limpiar();
    listar();
}

function listar(){
    var g = document.getElementById("lista");
    for(var i=0; i<alumnos.length;i++){
        g.innerHTML+="<li>"+alumnos[i]+"</li>";
    }
}

function limpiar(){
    var hh = document.querySelector("#lista");
    var pp = hh.children.length;
    for (var j=0;j<pp;j++){
        hh.removeChild(hh.children[0]);
    }
}