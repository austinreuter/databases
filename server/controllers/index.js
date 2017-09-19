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
      req.on('end', () => {
        var results = models.messages.get();
        res.writeHead(200, headers);
        res.end(results);
      });
    
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var messageData = [];
      req.on('data', (chunk) => {
        messageData.push(chunk);
      });
      req.on('end', () => {
        messageData = messageData.toString();
        messageData = JSON.parse(messageData);
        console.log(messageData);
        models.messages.post(messageData);
        res.writeHead(201, headers);
        res.end();
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

