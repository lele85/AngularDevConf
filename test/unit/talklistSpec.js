describe("TalkListController", function() {
	var data = [{
		"title": "Introduzione ad AngularJS",
		"author": "Andrea Balducci",
		"abstract": "Come realizzare Single Page Applications sfruttando databinding bidirezionale, templates, routing, controllers, componenti e servizi web creando passo passo un catalogo immagini.Angular is what HTML would have been had if been designed for applications"
	}, {
		"title": "AngularJS: tools & testing",
		"author": "Emanuele Rampichini",
		"abstract": "Come AngularJS (ad altri tool di supporto) vengono in nostro soccorso per aiutarci a scrivere applicazioni web completamente testate in maniera automatica e ripetibile, a partire dalla logica fino ad arrivare all’interazione dell’utente."
	}, {
		"title": "Scope e Directive in AngularJS",
		"author": "Alessandro Giorgetti",
		"abstract": "Gli 'Scope' fungono da collante tra il modello e la UI, e le 'Directive' si occupano di estendere l’arsenale di controlli a disposizione del web developer. Vedremo le differenze tra scope, inherited scope ed isolated scope e verrà introdotta, tramite l’utilizzo delle Direttive, la creazione di 'web components' riutilizzabili per rendere più semplice e strutturata la creazione di una pagina web dinamica."
	}];

	beforeEach(angular.mock.module('TalkApp'));

	it('should have an empty list of talk by default', inject(function($rootScope, $controller, $httpBackend) {
		var $scope = $rootScope.$new();
		var ctrl = $controller('TalkListController', {
			$scope: $scope
		});
		expect($scope.talks.length).toBe(0);
	}));

	it('should fetch talks from a json api', inject(function($rootScope, $controller, $httpBackend) {
		var $scope = $rootScope.$new();
		$httpBackend.when('GET', '/api/talks').respond(data);
		var ctrl = $controller('TalkListController', {
			$scope: $scope
		});
		$httpBackend.flush();
		expect($scope.talks.length).toBe(3);
	}));

});