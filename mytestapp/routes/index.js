
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
    res.sendfile('views/id.html');
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

exports.all = function(Todo) {
  return function(req, res) {
    res.sendfile('views/all.html');
  }
};

exports.approved = function(Todo) {
  return function(req, res) {
    res.sendfile('views/approved.html');
  }
};

exports.unapproved = function(Todo) {
  return function(req, res) {
    res.sendfile('views/unapproved.html');
  }
};

exports.pup = function(Todo) {
  return function(req, res) {
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

// exports.delete = function(req, res) {
//     var id = req.params.id;
//     console.log('Deleting todo: ' + id);
//     db.collection('todos', function(err, collection) {
//         collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
//             if (err) {
//                 res.send({'error':'An error has occurred - ' + err});
//             } else {
//                 console.log('' + result + ' document(s) deleted');
//                 res.send(req.body);
//             }
//         });
//     });
// }