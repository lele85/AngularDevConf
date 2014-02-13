describe("Gravatar directive", function() {

	var $rootScope, $compile;

	beforeEach(angular.mock.module('TalkApp'));

	beforeEach(inject(
		['$compile', '$rootScope',
			function($c, $r) {
				$compile = $c;
				$rootScope = $r;
			}
		]
	));

	it("should generate a gravata url given the md5 of a mail address", function() {
		$scope = $rootScope.$new({});
		var element = angular.element('<div data-gravatar data-md5="\'abababababa\'"></div>');
		var compiled = $compile(element)($scope);
		$scope.$digest();
		expect(element.isolateScope()).toBeDefined();
		expect(element.html()).toBe('<img class="gravatar" src="http://www.gravatar.com/avatar/abababababa">');
	});
});