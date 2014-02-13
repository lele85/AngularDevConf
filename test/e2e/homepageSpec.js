var AppHomePage = function() {
	return {
		getTalks: function() {
			return element.all(by.css("#TalkList li.talk"));
		},
		getTalksSection: function() {
			return browser.findElements(by.id('TalkList'));
		},
		getTalksFields: function(selector){
			return browser.findElements(by.css("#TalkList li.talk " + selector));
		},
		getTalksTitles: function(){
			return this.getTalksFields(".title");
		},
		getTalksAuthors: function(){
			return this.getTalksFields(".author");
		},
		getTalksAuthorsLink: function(){
			return element.all(by.css("#TalkList li.talk .author a"));
		},
		getTalksAbstracts: function(){
			return this.getTalksFields(".abstract");

		},
		getGravatars : function(){
			return element.all(by.css("#TalkList img.gravatar"));
		},
		get: function() {
			browser.get('http://127.0.0.1:8000/');
		}
	};
};

describe('Home page', function() {
	it('should have a talks section', function() {
		var homePage = AppHomePage();
		homePage.get();
		homePage.getTalksSection().then(function(sections) {
			expect(sections.length).toEqual(1);
		});
	});

	describe("talk section", function() {

		it('should contain talks exposed by a json api', function() {
			var homePage = AppHomePage();
			homePage.get();
			homePage.getTalks().then(function(talks) {
				expect(talks.length).toEqual(3);
			});
		});

		describe('talk', function() {
			var homePage;

			beforeEach(function() {
				homePage = AppHomePage();
				homePage.get();
			});

			it("should have a title", function() {
				homePage.getTalksTitles().then(function(titles){
					expect(titles.length).toEqual(3);
				});
			});

			it("should have an abstract", function() {
				homePage.getTalksAbstracts().then(function(abstracts){
					expect(abstracts.length).toEqual(3);
				});
			});

			it("should have an author", function() {
				homePage.getTalksAuthors().then(function(authors){
					expect(authors.length).toEqual(3);
				});
			});

			it("should link to author profile", function(){
				homePage.getTalksAuthorsLink().each(function(links){
					links.getAttribute('href').then(function(href){
						expect(href.match(/^http:\/\/.*\/\#\/author\/[0-9]+$/)).not.toBe(null);
					});
				});
			});

			it('should have a gravatar', function(){
				homePage.getGravatars().each(function(gravatar){	
					gravatar.getAttribute('src').then(function(src){
						expect(src.match(/^http:\/\/www.gravatar.com\/avatar\/.{32}$/)).not.toBe(null);
					});
				});
			});
		});
	});
});