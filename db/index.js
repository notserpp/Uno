const pgp = require('pg-promise')();
const connection = pgp("postgres://zeyqdemhosoudd:1b72095157ce303504785c6ff2c1c748b84bbe1c500bf0ade3864d75c1d5ccc3@ec2-174-129-18-98.compute-1.amazonaws.com:5432/da386od5tggabj?ssl=true");

module.exports = connection;