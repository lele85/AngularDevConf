var AuthorPage = function() {
	return {
		getAuthorName: function() {
			return element(by.binding("author.name"));
		},
		getAuthorSurname: function() {
			return element(by.binding("author.surname"));
		},
		get: function() {
			browser.get('http://127.0.0.1:8000/#/author/1');
		}
	}
};

describe('author page', function() {
	var page;

	beforeEach(function() {
		page = AuthorPage();
		page.get();
	});

	it('should show author informations', function() {
		expect(page.getAuthorName().getText()).toBe("Andrea");
		expect(page.getAuthorSurname().getText()).toBe("Balducci");
	});
});