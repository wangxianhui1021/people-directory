angular.module('myApp').factory('User', function($resource){
    return $resource('http://localhost:3000/people/:id', {id:"@id"}, {
        update:{
            method: "PUT"
        }
    });

    });