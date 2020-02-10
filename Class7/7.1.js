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
    cell4.innerHTML="<a href='#' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</a>";
    cell5.innerHTML="<a href='#' onclick='eliminar(this.parentNode.parentNode.rowIndex)'>Eliminar</a>";
    //alert ( nombre +"/"+DNI+"/"+fecha);
}
function listar(){}
function editar(x){
    //alert("Seleccionó editar");
    var nom = tabla.rows[x].cells[1].innerHTML;
    var dni = tabla.rows[x].cells[2].innerHTML;
    var fec = tabla.rows[x].cells[3].innerHTML;
    document.getElementById("nombre").value=nom;
    document.getElementById("DNI").value=dni;
    document.getElementById("Fecha/Nac.").value=fec;
    document.getElementById("opc").value=1;
}
function eliminar(x){
    //alert("Seleccionó eliminar");
    if (confirm("¿Desea Eliminar?")){
        document.getElementById("tablita").deleteRow(x);
        alert("Eliminado Correctamente...");
    }else{
        alert("Operación Cancelada...");
    }
}
function limpiar(){
    document.getElementById("nombre").value="";
    document.getElementById("DNI").value="";
    document.getElementById("Fecha/Nac.").value="";
    document.getElementById("nombre").focus();
}
function actualizar(){
    tabla.rows[rindex].cells[1].innerHTML=document.getElementById("nombre").value;
    tabla.rows[rindex].cells[1].innerHTML=document.getElementById("DNI").value;
    abla.rows[rindex].cells[1].innerHTML=document.getElementById("Fecha/Nac.").value;
    limpiar();
    rindex=0;
}