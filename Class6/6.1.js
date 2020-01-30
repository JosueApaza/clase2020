function opcion(){
    var a=0;
    var n1 = parseInt(document.getElementById("Num1").value);
    var n2 = parseInt(document.getElementById("Num2").value);
    var res = document.getElementById("res").value;
    var op = document.getElementById("operaciones");
    var p = parseInt(op.options[op.selectedIndex].value);
    switch(p){
        case 1: a = n1+n2;break;
        case 2: a = n1-n2;break;
        case 3: a = n1*n2;break;
        case 4: a = n1/n2;break;
    }
    document.getElementById("res").value=a;
}
