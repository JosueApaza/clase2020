function operacion(){
    var op=0;
    var Number1 = parseInt(document.getElementById("Number1").value);
    var Number2 = parseInt(document.getElementById("Number2").value);
    var r = document.getElementById("rr").value;
    var radios = document.getElementById("operación");
    for(var i=0;i<radios.clientHeight;i++){
        if(radios[i].checked==true){
            switch(x){
                case 1: op=Number1+Number2;break;
                case 1: op=Number1-Number2;break;
                case 1: op=Number1*Number2;break;
                case 1: op=Number1/Number2;break;
            }
            document.getElementById("rr").value=op;
        }
    }
}