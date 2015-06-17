var app = angular.module('myApp', []);


app.controller('mainCtrl', function($scope) {
  //$scope.data = {message: "Hello"};
  $scope.users = [
    {"name":"taguchi","score":78.2},
    {"name":"nakata","score":83.8},
    {"name":"ikeda","score":55.4},
    {"name":"yamada","score":23.2},
    {"name":"takeshi","score":56.4},
    {"name":"ishii","score":100},
    {"name":"takeda","score":78.2},
  ];
  $scope.today =new Date();


});

app.controller('userItemCtrl', function($scope) {
  $scope.increment = function() {
    $scope.user.score++;
  }
});


