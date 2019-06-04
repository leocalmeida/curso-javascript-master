//Funcao responsavel por criar o paciente
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

//Validacao dos pacientes
function validaPaciente(x) {
  var erros = [];

  if (x.nome.length > 0) {} else {
    erros.push("Campo nome nao pode estar em branco")
  }

  if (validaPeso(x.peso)) {} else {
    erros.push("Peso Invalido");
  }

  if (validaAltura(x.altura)) {} else {
    erros.push("Altura Invalido");
  }

  if (validaGordura(x.gordura)) {} else {
    erros.push("Gordura invalido")
  }
  return erros;
}

//Mostra as mensagens de erro
function mensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro")
  ul.innerHTML = ""
  erros.forEach(function(erro) {
    var li = document.createElement("li")
    li.textContent = erro
    ul.appendChild(li)
  })
}
