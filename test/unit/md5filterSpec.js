describe("MD5 filter", function() {
	var $filter;

	beforeEach(angular.mock.module('TalkApp'));

	beforeEach(inject(['$filter',
		function($f) {
			$filter = $f;
		}
	]));

	it("should give me the md5sum for a given mail", function() {
		var input = "emanuele.rampichini@gmail.com";
		var expected = "88d261feb05b228d87d3773c51131ced";
		var result = $filter('md5')(input);
		expect(result).toBe(expected);
	});
});