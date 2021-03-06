define(function (require) {
    // the page object is created as a constructor
    // so we can provide the remote Command object
    // at runtime
    function IndexPage(remote) {
        this.remote = remote;
    }

    IndexPage.prototype = {
        constructor: IndexPage,

        // the login function accepts username and password
        // and returns a promise that resolves to `true` on
        // success or rejects with an error on failure
        login: function (username, password) {
            return this.remote
            // first, we perform the login action, using the
            // specified username and password
                .get(require.toUrl('http://newtours.demoaut.com/'))
                .findByName('userName')
                .click()
                .type(username)
                .end()
                .findByName('password')
                .click()
                .type(password)
                .end()
                .findByName('login')
                .click()
                .end()
                // then, we verify the success of the action by
                // looking for a login success marker on the page
                .setFindTimeout(5000)
                .findByName('findflight')
                .then(function () {
                    // Note that 'this' is the command object.
                    return Promise.all([
                        // Note we've left the 'find' context with .unit-question as parent
                        this.parent.findByName('tripType'),
                        this.parent.findByName('passCount'),

                    ]).then(function (results) {
                        return {
                          tripType: results[0],
                            passCount: results[1]
                        };
                    });
                    //return true;
                });
        },

        // …additional page interaction tasks…
    };

    return IndexPage;
});