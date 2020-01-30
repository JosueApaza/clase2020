function opcion(){
var pais = 0;
var x = document.getElementById("paises");
pais = x.options[x.selectIndex].value;
if(pais!=0){
    alert(pais);
    x.options(x.selectIndex).value=0;
}
    
}
