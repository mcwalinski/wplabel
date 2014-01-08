
/*
 * GET home page.
 */

exports.index = function(Todo) {
  return function(req, res) {
    Todo.find({}, function(error, todos) {
      res.render('index', {
        title: 'Express',
        todos : todos
      });
    });
  };
};

exports.addTodo = function(Todo) {
  return function(req, res) {
    var todo = new Todo(req.body);
    todo.save(function(error, todo) {
      if (error || !todo) {
        res.json({ error : error });
      } else {
        res.json({ todo : todo });
      }
    });
  };
};

exports.get = function(Todo) {
  return function(req, res) {
    Todo.find({}, function(error, todos) {
      res.json({ todos : todos });
    });
  }
};

exports.id = function(Todo) {
  return function(req, res) {
    res.send(req.params.id);
  }
};

exports.delete = function(Todo) {
  return function(req, res) {
    res.send(req.params.id);
  }
};

exports.test = function(Todo) {
  return function(req, res) {
    res.sendfile('views/test.html');
  }
};

exports.pup = function(Todo) {
//this isn't doing anything. Only the sendfile at the bottom is working.
  return function(req, res) {
	 var request = require('request');
	 var options = {
		url: 'http://uploadtest.digitalink.com/photo-uploader/api/createMediaSet',
		headers: {
			'User-Agent': 'request'
		}
	};

	function callback(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(error);
			console.log(response);
			console.log(body);
			
		}
	}
	request(options, callback);
    //res.sendfile('pup.html');
	res.sendfile('views/pup.html');
  }
};


exports.update = function(Todo) {
  return function(req, res) {
    Todo.findOne({ _id : req.params.id }, function(error, todo) {
      if (error || !todo) {
        res.json({ error : error });
      } else {
        todo.done = req.body.done;
        todo.save(function(error, todo) {
          if (error || !todo) {
            res.json({ error : error });
          } else {
            res.json({ todo : todo });
          }
        });
      }
    });
  }
};