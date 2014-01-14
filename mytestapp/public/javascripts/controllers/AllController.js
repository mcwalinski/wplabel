//Matt's Dummy Controller
  var app = angular.module('myApp', []);
  app.controller('MainCtrl', function ($scope) {
  $scope.name = 'White Label Submissions';

    // var whiteLabel = ("http://localhost:3000/todos.json" + "app=" + app + "&user=" + user);
  // var whiteLabel = ("http://localhost:3000/todos.jsonp?" + "app=" + app + "&user=" + user);

  $.getJSON("http://localhost:3000/todos.json", function(data) {
        $scope.$apply(function(){
            $scope.modelData = data;
        });
    });

});

// End Matt's Dummy Controller