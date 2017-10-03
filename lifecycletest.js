define(function (require) {
    var registerSuite = require('intern!object');

    registerSuite({
        setup: function () {
            // executes before suite starts;
            // can also be called `before` instead of `setup`
            console.log('outer setup');
        },
        beforeEach: function () {
            // executes before each test
            console.log('outer beforeEach');
        },
        afterEach: function () {
            // executes after each test
            console.log('outer afterEach');
        },
        teardown: function () {
            // executes after suite ends;
            // can also be called `after` instead of `teardown`
            console.log('outer teardown');
        },

        'inner suite': {
            setup: function () {
                console.log('inner setup');
            },
            beforeEach: function () {
                console.log('inner beforeEach');
            },
            afterEach: function () {
                console.log('inner afterEach');
            },
            teardown: function () {
                console.log('inner teardown');
            },

            'test A': function () {
                console.log('inner test A');
            },
            'test B': function () {
                console.log('inner test B');
            }
        },

        'test C': function () {
            // a test case
            console.log('outer test C');
        }
    });
});