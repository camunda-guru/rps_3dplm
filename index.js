
define([
    'intern!object',
    'intern/chai!assert',
    '../support/pages/IndexPage'
], function (registerSuite, assert, IndexPage) {
    registerSuite(function () {
        var indexPage;
        return {
            // on setup, we create an IndexPage instance
            // that we will use for all the tests
            setup: function () {
                indexPage = new IndexPage(this.remote);
            },

            'successful login': function () {
                // then from the tests themselves we simply call
                // methods on the page object and then verify
                // that the expected result is returned
                return indexPage
                    .login('eswaribala', 'vigneshbala')
                    .then(function (loggedIn) {
                        assert.isTrue(loggedIn,
                            'Valid username and password should log in successfully');
                    });
            },

            // …additional tests…
        };
    });
});