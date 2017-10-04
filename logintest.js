define([
    'intern!object',
    'intern/chai!assert',
    'require'
], function (registerSuite, assert, require) {
    registerSuite({
        name: 'intern',
        'tc2': function () {


            return this.remote
                .get(require.toUrl('http://newtours.demoaut.com/'))

                .then(function () {
                    return this.parent
                        .findByName('userName')
                        .click()
                        .type('eswaribala')
                        .end()

                        .findByName('password')
                        .click()
                        .type('vigneshbala')
                        .end()

                        .findByName('login')
                        .click();
                })
                .end()
        }
    });
});