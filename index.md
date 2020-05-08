<!DOCTYPE html>
<html lang="pt-br">

<head>
	<meta charset="UTF-8">
	<title>Aparecida Nutrição</title>
	<link rel="icon" href="favicon.ico" type="image/x-icon">
	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<link rel="stylesheet" type="text/css" href="css/estilos.css">

</head>

<body>

	<header>
		<div class="container">
			<h1 class="titulo">Aparecida Nutrição</h1>
		</div>
	</header>
	<main>
		<section class="container">
			<h2>Meus pacientes</h2>
			<label for="filtrar-tabela">Filtre:</label>
			<input type="text" name="filtro" id="filtrar-tabela" placeholder="Digite o nome do paciente">
			<table>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Peso(kg)</th>
						<th>Altura(cm)</th>
						<th>Gordura Corporal(%)</th>
						<th>IMC</th>
					</tr>
				</thead>
				<tbody id="tabela-pacientes">
					<tr class="paciente">
						<td class="info-nome">Paulo</td>
						<td class="info-peso">100</td>
						<td class="info-altura">200</td>
						<td class="info-gordura">10</td>
						<td class="info-imc">0</td>
					</tr>

					<tr class="paciente">
						<td class="info-nome">João</td>
						<td class="info-peso">80</td>
						<td class="info-altura">172</td>
						<td class="info-gordura">40</td>
						<td class="info-imc">0</td>
					</tr>

					<tr class="paciente">
						<td class="info-nome">Erica</td>
						<td class="info-peso">54</td>
						<td class="info-altura">164</td>
						<td class="info-gordura">14</td>
						<td class="info-imc">0</td>
					</tr>

					<tr class="paciente">
						<td class="info-nome">Douglas</td>
						<td class="info-peso">85</td>
						<td class="info-altura">173</td>
						<td class="info-gordura">24</td>
						<td class="info-imc">0</td>
					</tr>
					<tr class="paciente">
						<td class="info-nome">Tatiana</td>
						<td class="info-peso">46</td>
						<td class="info-altura">155</td>
						<td class="info-gordura">19</td>
						<td class="info-imc">0</td>
					</tr>
				</tbody>
			</table>

			<span id="erro-ajax" class="invisivel">Erro ao buscar os pacientes</span>

			<button id="buscar-pacientes" class="botao bto-principal">Buscar pacientes</button>
		</section>
	</main>

	<section class="container">
		<h2 id="titulo-form">Adicionar novo paciente</h2>
		<ul id="mensagens-erro" class="mensagens-erro"></ul>
		<form id="form-adiciona">
			<div class="grupo">
				<label for="nome">Nome:</label>
				<input id="nome" name="nome" type="text" placeholder="digite o nome do seu paciente" class="campo">
			</div>
			<div class="grupo">
				<label for="peso">Peso:</label>
				<input id="peso" name="peso" type="text" placeholder="digite o peso do seu paciente" class="campo campo-medio">
			</div>
			<div class="grupo">
				<label for="altura">Altura:</label>
				<input id="altura" name="altura" type="text" placeholder="digite a altura do seu paciente" class="campo campo-medio">
			</div>
			<div class="grupo">
				<label for="gordura">% de Gordura:</label>
				<input id="gordura" type="text" placeholder="digite a porcentagem de gordura do seu paciente" class="campo campo-medio">
			</div>

			<button id="adicionar-paciente" class="botao bto-principal">Adicionar</button>
		</form>

	</section>
	<script src="js/calcula-imc.js"></script>
	<script src="js/form.js"></script>
	<script src="js/validacoesPaciente.js"></script>
	<script src="js/remove-paciente.js"></script>
	<script src="js/filtra.js"></script>
	<script src="js/busca-pacientes.js"></script>

</body>

</html>