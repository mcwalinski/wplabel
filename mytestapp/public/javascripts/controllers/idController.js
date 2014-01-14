function mainController($scope, $http) {
    $scope.formData = {text: ''};

    // when landing on the page, get all todos and show them
    $http.get('/api/todos')
        .success(function(data) {
            $scope.todos = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.todos = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        $http.get('/api/todos').success(function(data) {
            $scope.todos = data;
        })
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    {
    $scope.updateTodo = function(id) {
       $scope.newItem = prompt("Please enter your new item: ", "");
        $http.put('/api/todos/' + id, {text: $scope.newItem}).success(function(data) {
                $scope.todos = data;
            });

            $http.get('/api/todos').success(function(data) {
                $scope.todos = data;
            });
    }};




};