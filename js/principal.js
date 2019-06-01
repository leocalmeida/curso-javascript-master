var pacientes = document.querySelectorAll(".paciente")

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



  if (altura >= 3 || altura <= 0) {
    tdImc.textContent = "Altura inválida"
    alturaValido = false
    paciente.classList.add("paciente-invalido")
  }



  if (pesoValido && alturaValido) {
    var imc = peso / (altura * altura)
    tdImc.textContent = imc.toFixed(2)
  }
}


var botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function() {
  console.log("cliquei no botao")
})
//leonardo SSH testando
