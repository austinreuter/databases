var mysql = require('mysql');
//var schema = require('../schema.sql');
//var fs = require('fs');
//var _ = require('underscore');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});

module.exports.connection.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Connected!');
  }
});





