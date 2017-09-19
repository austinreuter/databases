var db = require('../db');




module.exports = {
  messages: {
    get: function () {
      var getMessages = 
      ` 
        SELECT messages.text, messages.createdAt, messages.roomname, users.user FROM messages, users
        WHERE messages.id_users = users.id; 
      `;
      db.connection.query(getMessages, (err, results) => {
        if (err) {
          throw err;
        }
        return results;
      });

    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      var getUsers = 'SELECT users.user FROM users;';
      db.connection.query(getUsers, (err, results) => {
        if (err) {
          throw err;
        }
        return results;
      });

    },
    post: function () {}
  }
};
//console.log(module.exports.messages.get());

