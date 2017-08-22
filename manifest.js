'use strict';

const Confidence = require('confidence');
const Config = require('./config');


const criteria = {
    env: process.env.NODE_ENV
};


const manifest = {
    $meta: 'This file defines the plot device.',
    server: {
        debug: {
            request: ['error']
        },
        connections: {
            routes: {
                security: true
            }
        }
    },
    connections: [{
        port: Config.get('/port/api'),
        labels: ['api']
    }],
    registrations: [
        {
            plugin: './server/api/index'
        },
        {
            plugin: {
              register: './server/keycloak-hapi',
              options: {
                config: {store: 'yar'}
              }
            }
        },
        {
            plugin: './node_modules/vision'
        },
        {
            plugin: {
                register: './node_modules/yar',
                options: {
                  cookieOptions: {
                    isSecure: false,
                    password: 'the-password-must-be-at-least-32-characters-longasdfasdfadsf'
                  }
                }
            }
        }
    ]
};


const store = new Confidence.Store(manifest);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};
