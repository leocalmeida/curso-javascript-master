var botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function(event) {
  event.preventDefault()

  var form = document.querySelector("#form-adiciona")

  var paciente = dadosFormulario(form)
  var pacienteTr = montaTr(paciente)

  var erros = validaPaciente(paciente)
  console.log(erros);

  if (erros.length>0) {
    console.log('invalido')
    mensagensDeErro(erros)
    return;
  }

  var tabela = document.querySelector("#tabela-pacientes")
  tabela.appendChild(pacienteTr)
  console.log('feito!');


  form.reset()
  var ul = document.querySelector('#mensagens-erro');
  ul.innerHTML = ""
})

//Funcao responsavel por criar a TR e adicionar os TDs
function montaTr(paciente) {
  var pacienteTr = document.createElement("tr")
  pacienteTr.classList.add("paciente")

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

  return pacienteTr
}

//Monta o TD
function montaTd(dado, classe) {
  var td = document.createElement("td")
  td.textContent = dado
  td.classList.add(classe)

  return td
}
