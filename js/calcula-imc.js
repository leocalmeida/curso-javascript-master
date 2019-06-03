var pacientes = document.querySelectorAll(".paciente")
//Calcula IMC
for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]
  var tdPeso = paciente.querySelector(".info-peso")
  var tdAltura = paciente.querySelector(".info-altura")

  var tdImc = paciente.querySelector(".info-imc")


  var peso = tdPeso.textContent
  var altura = tdAltura.textContent

  var alturaValido = true


  if (!validaPeso(peso)) {
    tdImc.textContent = "Peso inválido"
    pesoValido = false
    paciente.classList.add("paciente-invalido")
  }



  if (!validaAltura(altura)) {
    tdImc.textContent = "Altura inválida"
    alturaValido = false
    paciente.classList.add("paciente-invalido")
  }



  if (validaPeso(peso) && validaAltura(altura)) {
    var imc = calculaImc(peso, altura)
    tdImc.textContent = imc
  }
}
//-----------------------------------Fim Calcula IMC

function calculaImc(peso, altura) {
  var imc = 0
  var auxAltura = altura / 100
  var imc = (peso / (auxAltura * auxAltura))
  return imc.toFixed(2)
}

function validaPeso(massa) {
  if (massa >= 0 && massa < 1000) {
    return true
  } else {
    return false
  }
}

function validaAltura(alt) {
  if (alt>0 && alt <300 ) {
    return true;
  } else {
    return false;
  }
}
