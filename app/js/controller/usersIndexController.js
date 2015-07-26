angular.module('myApp').controller('UsersIndexController', function(User, $scope){
    $scope.users = User.query();
});