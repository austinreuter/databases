var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      console.log('hello from get messages');
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
        callback(results);
      });

    }, // a function which produces all the messages
    post: function (messageObj) {
      var getUserId = `
      SELECT users.id FROM users
      WHERE users.user = ${messageObj.username}`;

      var addMessage = `
      INSERT INTO messages (text, roomname, id_users) 
      values (${messageObj.message}, ${messageObj.roomname}, ${results[0]})`;
      
      db.connection.query(getUserId, (err, results) => {
        if (err) {
          throw err;
        }
        db.connection.query(addMessage, (err, results) => {
          if (err) {
            throw err;
          }
          console.log('successful addition of message');
        });
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
      var doesUserExist = `
        SELECT users.user FROM users 
        WHERE users.user = ${userObj.username};`;

      var addNewUser = `
        INSERT INTO users (user) values (${userObj.username});`;

      db.connection.query(doesUserExist, (err, results) => {
        if (err) {
          throw err;
        }
        if (!results.length) {
          db.connection.query(addNewUser, (err, results) => {
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

