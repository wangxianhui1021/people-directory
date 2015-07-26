angular.module('myApp').controller('UsersEditController', function(User, $scope, $routeParams, $location){
$scope.user= User.get({id:$routeParams.id});

    $scope.isSubmitting = false;
    $scope.saveUser = function(user){
        $scope.isSubmitting= true;
        user.$update().finally(function(){
            $scope.isSubmitting = false;
            $location.path("/users/" + user.id);
        });
    }
});