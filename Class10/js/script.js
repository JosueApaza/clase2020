$(document).ready(function(){
    alert("bienvenido a JQuery ¬.¬")
})
$("#boton").click(function(){
    var num = $("#numero").val();
    if(num>10){
        $("#boton").removeClass("btn-primary");
        $("#boton").addClass("btn-danger");
    }else{
        $("#boton").removeClass("btn-primary");
        $("#boton").addClass("btn-warning");
    }
})