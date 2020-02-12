var c = document.getElementById("Cursos");
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var tabla = document.getElementById("tablita");
var bo = document.getElementById("add")

function agregar(){
    var nuevafila,
    nuevafila = tabla.insertRow(tabla.rows.length),
    celda0 = nuevafila.insertCell(0),
    celda1 = nuevafila.insertCell(1),
    celda2 = nuevafila.insertCell(2),
    celda3 = nuevafila.insertCell(3),
    celda4 = nuevafila.insertCell(4),
    celda5 = nuevafila.insertCell(5);

    var prom = Math.round((parseInt(n1.value) + parseInt(n2.value) + parseInt(n3.value))/3,1);
    celda0.innerHTML = c.options[c.value].text;
    celda1.innerHTML = n1.value;
    celda2.innerHTML = n2.value;
    celda3.innerHTML = n3.value;
    celda4.innerHTML = prom;
    celda5.innerHTML = "<a href='#' onclick='eliminar(this.parentNode.parentNode.rowIndex)'><img src='delete.png' alt='a'></a>";
}
function limpiar(){
    bo.style.background="dimgray";
    c.options[0].selected=true;
    n1.value="0";
    n2.value="0";
    n3.value="0";
}
function validar(){
    if(c.options[0].selected){
        alert("seleccionar curso")
    }else{
        n1.focus();
    }
}
function combo(){
    if(validarCurso(c.options[c.value].text)){
        alert("Curso existe");
        limpiar();
    }else{
        n1.disabled=false;
        n1.focus();
    }
}
n1.addEventListener('keyup',function(e) {
    isNumero(e,n1);
    validaValor(n1);
    enter(e,n1);
});
n2.addEventListener('keyup',function(e) {
    isNumero(e,n2);
    validaValor(n2);
    enter(e,n2);
    });
    n3.addEventListener('keyup',function(e) {
        isNumero(e,n3);
        validaValor(n3);
        var keycode = e.keyCode || e.which:
        if(keycode == 13){
            bo.focus();
            bo.style.background="brow";
        }
    });
function ponderado(){
    var filas = tabla.rows.length, sum=0;
    for(var i=1;i<filas;i++){
        sum+=parseInt(tabla.rows[i].cells[4].innerHTML);
    }
    prom = sum/(filas-1);
    return Math.round(prom,1);
}
function eliminar(a){
    tabla.deleteRow(a);
    if(tabla.rows.length==1){
        po.value = 0;
    }else{
        po.value = ponderado();
    }
}
function validarCurso(cad){
    var filas = tabla.rows.length;
    var dat = false;
    for(var i=1;i<filas;i++){
        if(tabla.rows[i].cells[0].innerHTML==cad){
            dat=true;
        }
    }
    return dat;
}
function validaValor(n){
    if(!(n.value<21 && n.value>=0)){
        alert("la nota " +n.value+ " es invalida");
        n.value="";
        n.focus();
    }
}
function enter(e,n){
    var keycode = e.keyCode || e.which;
      if (keycode == 13){
        if(n==n1)
          n2.disabled=false;
          n2.focus();
        if(n==n2)
          n3.disabled=false;
          n3.focus();
      }
}
function isNumero(e,n){
    var charCode = (e.which)? e.which : e.keyCode
    if(charCode > 31 && (charCode < 48 || charCode>57)){
        n.value="";
        n.focus();
    }
}