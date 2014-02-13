describe("AuthorController", function() {

	var authors = [{
		"name": "Andrea",
		"surname": "Balducci",
		"mail": "andrea.balducci@prxm.it",
		"links": [{
			"name": "twitter",
			"href": "https://twitter.com/andreabalducci"
		}, {
			"name": "github",
			"href": "https://github.com/andreabalducci"
		}, {
			"name": "linkedin",
			"href": "http://it.linkedin.com/in/andreabalducci"
		}, {
			"name": "google+",
			"href": "https://plus.google.com/+AndreaBalducci"
		}]
	}, {
		"name": "Emanuele",
		"surname": "Rampichini",
		"mail": "emanuele.rampichini@gmail.com",
		"links": [{
			"name": "twitter",
			"href": "https://twitter.com/emanuele_r"
		}, {
			"name": "github",
			"href": "https://github.com/lele85"
		}, {
			"name": "linkedin",
			"href": "http://www.linkedin.com/in/emanuelerampichini"
		}, {
			"name": "google+",
			"href": "https://plus.google.com/+EmanueleRampichini"
		}]
	}];

	beforeEach(angular.mock.module('TalkApp'));

	var verifyApiCall = function($rootScope,$controller,$httpBackend,authorId, expectedName){
		var $scope = $rootScope.$new();
		$httpBackend.when('GET', '/api/authors/'+authorId).respond(authors[authorId-1]);
		var ctrl = $controller('AuthorController', {
			$scope: $scope,
			$routeParams: {
				id: authorId
			}
		});
		$httpBackend.flush();
		expect($scope.author.name).toBe(expectedName);
	};

	it('should fetch author by his id from a json api', inject(function($rootScope, $controller, $httpBackend) {
		verifyApiCall($rootScope,$controller,$httpBackend,1, "Andrea");
		verifyApiCall($rootScope,$controller,$httpBackend,2, "Emanuele");
	}));
	
});