angular.module('myApp').controller('UsersIndexController', function(User, $scope, $filter) {


    $scope.currentPage = 0;
    $scope.pageSize = 20;


    $scope.numberOfPages = function () {
        var myFilteredData = $filter('filter')($scope.users, $scope.search_input);
        return Math.ceil(myFilteredData.length/ $scope.pageSize);
    }


    $scope.users = User.query();




});