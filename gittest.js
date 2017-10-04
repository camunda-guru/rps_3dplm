define([
    'intern!object',
    'intern/chai!assert',
    'require'
], function (registerSuite, assert, require, registry) {
    registerSuite({
        name: 'intern',
        '00-page-load': function () {
            return this.remote
        .get(require.toUrl('https://theintern.github.io/'))
                .sleep(8000)

            return this.remote
                .get(require.toUrl('https://theintern.github.io/'))
                .sleep(8000)
                .findByClassName('logo')
                .getVisibleText()
                .then(function (text) {
                    assert.strictEqual(text, 'Intern.', ' The visible page title should say “Intern.” ');
                })
                .end()
        }
    });
});