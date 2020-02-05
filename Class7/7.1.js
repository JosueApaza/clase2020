var tabla = document.getElementById("tablita");
function agregar(){
    var filas = tabla.rows.length;

    var nfila = tabla.insertRow(tabla.length);
    cell0 = nfila.insertCell(0);
    cell1 = nfila.insertCell(1);
    cell2 = nfila.insertCell(2);
    cell3 = nfila.insertCell(3);
    cell4 = nfila.insertCell(4);
    cell5 = nfila.insertCell(5);
    var fila1 = tabla.rows[0].cells[0].innerHTML;

    nombre = document.getElementById("nombre").value;
    DNI = document.getElementById("DNI").value;
    fecha = document.getElementById("Fecha/Nac.").value;
    //nombre = nombre.value;
    //DNI = DNI.value;
    //fecha = fecha.value;
    cell0.innerHTML=filas;
    cell1.innerHTML=nombre;
    cell2.innerHTML=DNI;
    cell3.innerHTML=fecha;
    cell4.innerHTML="<a href='#' onclick='editar()'>Editar</a>";
    cell5.innerHTML="<a href='#' onclick='eliminar()'>Eliminar</a>";
    //alert ( nombre +"/"+DNI+"/"+fecha);
}
function listar(){}
function editar(){
    alert("Seleccionó editar");
}
function eliminar(){
    alert("Seleccionó eliminar");
}
function limpiar(){}