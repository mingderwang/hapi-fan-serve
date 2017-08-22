'use strict';

const Composer = require('./index');


Composer((err, server) => {

    if (err) {
        throw err;
    }

    server.auth.strategy('keycloak', 'keycloak');

    server.route({
  method: 'GET',
  path: '/login',
  config: {
    auth: 'keycloak'
  },
  handler: (request, reply) => {
    console.log('ming')
    reply({ message: 'Welcome to keycloak' });
  }
});

    server.start((error) => {

        if (error) {
            throw error;
        }

        console.log('Started the plot device on port ' + server.info.port);
    });
});
