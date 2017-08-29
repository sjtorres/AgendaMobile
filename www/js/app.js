angular.module('ionicApp', ['ionic'])

.run(function($ionicPlatform){
	$ionicPlatform.ready(function() {
		if(window.cordova && window.cordova.plugins.keyboard) {
			cordova.plugins.keyboard.hidekeyboardAcessoryBar(true);
			cordova.plugins.keyboard.disableScroll(true);
		}
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider

	.state('menu', {
		url: "/menu",
		templateUrl: "templates/menu.html",
		controller: "MenuController"
	})

	.state('pessoa', {
		url: "/pessoa",
		templateUrl: "templates/CadastroPessoa.html",
		controller: "CadastroPessoaController"
	})

	$urlRouterProvider.otherwise('/menu');
});

