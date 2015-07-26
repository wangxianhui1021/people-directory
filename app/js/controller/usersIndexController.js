angular.module('myApp').controller('UsersIndexController', function(User, $scope, AuthenticationService){
    $scope.users = User.query();

});