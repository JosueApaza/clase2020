$(document).ready(function(){

})

$("#numero").keyup(function(){
    var resp;
    var cad = "";
    var x = $("#numero").val();
    if(x == 10){
        cad = "<div class='alert alert-warning' role ='alert' > This is a primary alert-check it out!</div>";
        resp = x;
    }else{
        cad = "<div class='alert alert-danger' role='alert'>This is a secondary alert-check it out!</div>";
        resp = x;
    }
    $("#respuesta").html(cad);
    $("#resultado").val(resp);
    
});