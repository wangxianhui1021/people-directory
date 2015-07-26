angular.module('myApp').controller('UsersCreateController', function($scope, User, $location){
    $scope.user = new User();
    $scope.isSubmitting = false;
    $scope.saveUser = function(user){
        $scope.isSubmitting = true;
        user.$save().then(function(){
            $location.path("/users/" + user.id);
        }).finally(function(){
            $scope.isSubmitting = false;

        });
    }

});