'use strict';

const Confidence = require('confidence');


const criteria = {
    env: process.env.NODE_ENV
};


const config = {
    $meta: 'This file configures the plot device.',
    projectName: 'hapi-fan-serve',
    port: {
        api: {
            $filter: 'env',
            test: 9091,
            $default: 8081
        }
    }
};


const store = new Confidence.Store(config);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};
