var mysql = require('mysql');
var schema = require('../schema.sql');
var fs = require('fs');
var _ = require('underscore');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports.con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

con.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Connected!');
  }
});

console.log('before read');
fs.readFile(__dirname + '../schema.sql', (err, file) => {
  if (err) {
    console.log('in error');
    throw err;
  }
  //file = file.toString();
  console.log('no error');
  console.log(file);
  mysql.query(file, (err, result) => {
    if (err) {
      console.log('query error');
      throw err;
    }
    console.log('query success');
    console.log(result);

  });
});


