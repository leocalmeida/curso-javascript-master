var botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function(event) {
  event.preventDefault()

  var form = document.querySelector("#form-adiciona")

  var paciente = dadosFormulario(form)

  var validacaoPaciente = validaPaciente(paciente)

  var gp = document.querySelector("ul")

  if (validacaoPaciente.length>0) {
    console.log('invalido')
    var lista = document.createElement("li")
    for (var i = 0; i < validacaoPaciente.length; i++) {
      lista.textContent=validacaoPaciente[i]
      gp.appendChild(lista)

    }



    return;
  }

  var pacienteTr = montaTr(paciente)
  var tabela = document.querySelector("#tabela-pacientes")
  tabela.appendChild(pacienteTr)
  console.log('feito!');


  form.reset()
})

//Funcao responsavel por pegar os dados do paciente
function dadosFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente
}

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

function montaTd(dado, classe) {
  var td = document.createElement("td")
  td.textContent = dado
  td.classList.add(classe)

  return td
}


function validaPaciente(x) {
  var erros = [];
  if (!validaPeso(x.peso)) {}
  else {
    erros.push("Peso Invalido");
  }

  if (!validaAltura(x.altura)) {}
  else{
    erros.push("Altura Invalido");
  }
  return erros;
}
