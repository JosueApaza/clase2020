$(document).ready(function(){

})
//var mensaje;
var url;
function menu(op){
    switch(op){
        case 1:
            alert("Ventas");
            url = "m.1.html";
            break;
        case 2:
            alert("Almacen");
            url = "m.2.html";
            break;
        case 3:
            alert("Finanzas");
            url = "m.3.html";
            break;
        case 4:
            alert("Contacto");
            url = "m.4.html";
            break;
    }
    //var cad = "<div class='alert alert-info' role='alert'>"+mensaje+"</div>"
    $("#contenido").load(url);
}