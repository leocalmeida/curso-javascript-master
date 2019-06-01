var pesoValido = true;
var alturaValido = true;


var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");


var peso = tdPeso.textContent;
if(peso>=1000 || peso<=0){
  tdImc.textContent = "Peso inválido"
  pesoValido=false;
}


var altura = tdAltura.textContent;
if(altura>=3 || altura<=0){
  tdImc.textContent = "Altura inválida"
  alturaValido=false;
}



if(pesoValido && alturaValido){
    var imc = peso/(altura*altura);
    tdImc.textContent = imc;
    console.log(imc);
}

//ser'a que agora vai?
