var pacientes = document.querySelectorAll(".paciente")
//Calcula IMC
for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]
  var tdPeso = paciente.querySelector(".info-peso")
  var tdAltura = paciente.querySelector(".info-altura")

  var tdImc = paciente.querySelector(".info-imc")


  var peso = tdPeso.textContent
  var altura = tdAltura.textContent

  var pesoValido = true
  var alturaValido = true


  if (peso >= 1000 || peso <= 0) {
    tdImc.textContent = "Peso inválido"
    pesoValido = false
    paciente.classList.add("paciente-invalido")
  }



  if (altura >= 300 || altura <= 0) {
    tdImc.textContent = "Altura inválida"
    alturaValido = false
    paciente.classList.add("paciente-invalido")
  }



  if (pesoValido && alturaValido) {
    var imc = calculaImc(peso, altura)
    tdImc.textContent = imc
  }
}
//-----------------------------------Fim Calcula IMC

function calculaImc(peso, altura) {
  var imc = 0
  var auxAltura = altura/100
  var imc = (peso / (auxAltura * auxAltura))
  return imc.toFixed(2)
}
