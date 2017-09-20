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
      models.messages.get((results) => {
        
        console.log('in ctrl cb, to get results:');
        console.log(results);
        res.json('hello from msg');
      });
    
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('body in mesg post', req.body);
      models.messages.post(req.body);
      res.sendStatus(201);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((results) => {
        res.json(results);
      });
    },
    post: function (req, res) {
      console.log('user post req body', req.body);
      models.users.post(req.body);
      res.sendStatus(201);
    }
  }
};

