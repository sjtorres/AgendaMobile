angular.module('ionicApp')
.controller("CadastroPessoaController", function($scope, $state){

	$scope.pessoa = {};

	$scope.salvar = function(pessoa) {
		alert('Pessoa ' + pessoa.nome 
			+ '\nTelefone ' + pessoa.telefone 
			+ '\nEmail ' + pessoa.email 
			+ '\nsalvo com sucesso');
		$scope.pessoa = {};
		$state.go('menu');
	}

	$scope.voltar = function(pessoa) {
		$state.go('menu');
	}
})