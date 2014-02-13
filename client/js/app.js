var TalkApp = window.TalkApp = angular.module('TalkApp', ['ngRoute']);

TalkApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/author/:id', {
            templateUrl: 'partials/author.html',
            controller: 'AuthorController'
        }).when('/', {
            templateUrl: 'partials/talklist.html',
            controller: 'TalkListController'
        }).otherwise({
            redirectTo: '/'
        });
    }
]);

TalkApp.controller('TalkListController', ['$scope', '$http',
    function($scope, $http) {
        $scope.talks = [];
        $http.get('/api/talks').success(function(data) {
            $scope.talks = data;
        });
    }
]);

TalkApp.controller('AuthorController', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('/api/authors/' + $routeParams.id).success(function(data) {
            $scope.author = data;
        });
    }
]);

TalkApp.directive('gravatar', [
    function() {
        return {
            restrict: "A",
            scope: {
                md5: "=md5"
            },
            template: '<img class="gravatar" src="http://www.gravatar.com/avatar/{{md5}}"/>'
        };
    }
]);

TalkApp.filter('md5', [
    function() {
        return function(string) {
            return CryptoJS.MD5(string).toString();
        }
    }
]);