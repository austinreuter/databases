var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

module.exports = {
  messages: {
    get: function (req, res) {
      var results = models.messages.get();
      res.send(results);
    
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('body in mesg post', req.body);
      //console.log('req param', req.param);
      

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      var results = modles.users.get();
      res.send(results);
    
    },
    post: function (req, res) {

      console.log('user post req body', req.body);
    }
  }
};

