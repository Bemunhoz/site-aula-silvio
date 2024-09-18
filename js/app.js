// alert; prompt ("Bem-Vindo!")

function entrar(){
var nome = document.getElementById("cxnome").value;
var n1 = parseFloat(document.getElementById("cxn1").value);
var n2 = parseFloat(document.getElementById("cxn2").value);
var n3 = parseFloat(document.getElementById("cxn3").value);
var faltas = parseInt (document.getElementById("cxfaltas").value);

alert("seu nome e "+nome);

var media = (n1 + n2 + n3) / 3;// nao precisa de parsefloat aqui se tem na vareavel la em cima

document.getElementById("cxmedia").value = media;

//var situacao = parseFloat(document.getElementById("cxsituacao").value);
//document.getElementById("media").value = media. toFixed(2);
//alert(media. toFixed(2));

//document.write (nome + " sua media e: " + media + "</br>");

if (media >=7 && faltas <=20){
   document.getElementById("cxsituacao").value= "Voce esta APROVADO"
}

else if (media >=7 && faltas > 20){
   document.getElementById("cxsituacao").value= "Voce esta de EXAME"
}
else if (media >=5 && media < 7 && faltas <=20){
   document.getElementById("cxsituacao").value= "Voce esta de EXAME"
}
else if (media >=5 && media < 7 && faltas >20) {
   document.getElementById("cxsituacao").value= "Voce esta de EXAME"
}
//else if (media >= 5 && media < 7){
//document.write ("Voce esta de EXAME </br>");
//}
else {
document.getElementById("cxsituacao").value ="Voce esta REPROVADO"

}
//document.write ("O aluno so estara aprovado se tiver 75% de frequencia </br>")
}