function operacao(){
    var campo1 = parseInt(document.getElementById("campo1").value);
    var campo2 = document.getElementById("campo2").value;
    var campo3 = parseInt(document.getElementById("campo3").value);
    var resultado;
    
    if(campo2 == "+"){
        resultado = campo1 + campo3;
        alert(resultado);        
    }
    if(campo2 == "-"){
        resultado = campo1 - campo3;
        alert(resultado);
    }
    if(campo2 == "*"){
        resultado = campo1 * campo3;
        alert(resultado);
    }
    if(campo2 == "/"){
        resultado = campo1 / campo3;
        alert(resultado);
    }else if(campo2 !="+" && campo2 !="-" && campo2 !="*" && campo2 !="/" )
        alert("FALTANDO NUMEROS OU OPERADOR ERRADO!");       

}