// Global Variables
var app = '';
var user = '';

// Call API
var whiteLabel = ("http://localhost:3000/todos.json");
// var whiteLabel = ("http://localhost:3000/todos.json" + "app=" + app + "&user=" + user);
// var whiteLabel = ("http://localhost:3000/todos.jsonp?" + "app=" + app + "&user=" + user);

console.debug(whiteLabel);

// Assign handlers immediately after making the request, and remember the locationJson object for this request
var whiteJson = $.getJSON(whiteLabel, function() {
  console.log( "success" );
  console.log(whiteJson);
  console.log(whiteJson.responseText);
  var string = JSON.stringify(whiteJson);
  console.log(string);

// var data = angular.fromJson(whiteJson);
})
  
  .fail(function() {
    console.log( "error" );
  });

// Parse Response

//Populate NG
$('.ng-app').text(whiteLabel);

// angular.fromJson(whiteLabel);

// Angular Test
var values = {name: 'matt', pup: 'yes'};
var log = [];
angular.forEach(values, function(value, key){
  this.push(key + ': ' + value);
}, log);
console.log(log);