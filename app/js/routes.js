angular.module('myApp').config(function($routeProvider){
 $routeProvider
     .when('/', {
         redirectTo: '/users'
     })
     .when('/users',{
        templateUrl: 'templates/users/index.html',
         controller: "UsersIndexController"
    })

     .when('/users/new',{
         templateUrl: 'templates/users/new.html',
         controller: "UsersCreateController"
     })

     .when('/users/:id',{
         templateUrl: 'templates/users/show.html',
         controller: "UsersShowController"
     })

     .when('/users/:id/edit',{
         templateUrl: 'templates/users/edit.html',
         controller: "UsersEditController"
     });

});