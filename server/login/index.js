'use strict';

exports.register = function (server, options, next) {
  server.route({
      method: 'GET',
      path: '/login',
      handler: function (request, reply) {

          reply({ message: 'Welcome to login kibana.' });
      }
  });
    next();
};


exports.register.attributes = {
    pkg: require('./package.json')
};
