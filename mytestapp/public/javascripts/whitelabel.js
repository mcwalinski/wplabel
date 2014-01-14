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

 // var data = angular.fromJson(whiteJson.responseJSON.todos);
 // console.log(data);

// Angular forEach
 var data = angular.fromJson(whiteJson.responseJSON.todos);
 var log = [];
 angular.forEach(data, function(value, key){
	angular.forEach(value, function(value, key){
       this.push( key +': ' + value);
	}, log);
 });
 console.log(log);

 //Populate NG
 $('.ng-app').text(log);

})
  
.fail(function() {
console.log( "error" );
});