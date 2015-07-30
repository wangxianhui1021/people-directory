angular.module('myApp').config(function($routeProvider){
 $routeProvider
     .when('/', {
         redirectTo: '/home'
     })
     .when('/home',{
         templateUrl: 'templates/home.html',
         controller: "homeController"

     })
     .when('/employee',{
         templateUrl: 'templates/employee/employee.html',
         controller: "UsersIndexController"
     })
     .when('/employee/:id',{
         templateUrl: 'templates/employee/show.html',
         controller: "UsersShowController"
     })
     .when('/users',{
        templateUrl: 'templates/users/index.html',
         controller: "UsersIndexController"
    })
     .when('/login',{
         templateUrl: 'templates/login/login.html',
         controller: "loginController"
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