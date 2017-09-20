var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      var getMessages = 
      ` 
        SELECT messages.text, messages.createdAt, messages.roomname, users.user 
        FROM messages, users
        WHERE messages.id_users = users.id; 
      `;
      db.connection.query(getMessages, (err, results) => {
        if (err) {
          throw err;
        }
        console.log('results sending from model to cntrler, todo look into cntr:');
        console.log(results);
        callback(results);
      });

    }, // a function which produces all the messages
    post: function (messageObj) {
      params = [messageObj.message, messageObj.roomname, messageObj.username];
      var addMessage = `
        INSERT INTO messages (text, roomname, id_users) 
        values (?, ?, (select users.id from users where users.user = ?));`;
      console.log('params for post', params);

      db.connection.query(addMessage, params, (err, results) => {
        if (err) {
          throw err;
        }
        console.log('successful addition of message');
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {

      var getUsers = 'SELECT users.user FROM users;';
      db.connection.query(getUsers, (err, results) => {
        if (err) {
          throw err;
        }
        callback(results);
      });

    },
    post: function (userObj) {
      var params = [userObj.username];

      var doesUserExist = `
        SELECT users.user FROM users 
        WHERE users.user = ?;`;

      var addNewUser = `
        INSERT INTO users (user) values (?);`;

      db.connection.query(doesUserExist, params, (err, results) => {
        if (err) {
   
          throw err;
        }
        console.log('does user exist results', results);
        if (!results.length) {
          db.connection.query(addNewUser, params, (err, results) => {
            if (err) {
              throw err;
            }
            console.log('successful insertion!');
          });
        }
      });
    }
  }
};

