let promise = require('bluebird');

const initOptions = {
    promiseLib: promise
}

const config = {
    host: 'postgres',
    port: 5432,
    database: 'fullstackDB',
    user: 'postgres'
}

const pgp = require('pg-promise')(initOptions);
const db = pgp(config);

module.exports = db;