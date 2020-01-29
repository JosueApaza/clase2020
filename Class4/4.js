function operacion(){
    var Num1=0 , Num2=0;
    Num1 = document.getElementById("Num1").value;
    Num2 = document.getElementById("Num2").value;
    if(Num1>Num2){
        rr = Num1 +"es >"+ Num2;
    }else{
        rr = Num1 +"es <"+ Num2;
    }
    //var r = Math.sqrt(dato);
    //var res = document.getElementById
    document.getElementById("Num1").value=0;
    document.getElementById("Num2").value=0;
    var res = document.getElementById("resultado");
    res.innerHTML="<h>"+rr+"</h1>";
    //alert(dato);
}