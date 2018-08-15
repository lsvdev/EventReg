'use strict'

eventsApp.controller('eventController', 
function eventController($scope){

     $scope.event = {

        name: 'Angular Boot Camp',
        date: '1/1/2018',
        time: '10:30 am',
        location: {
            address: 'NN',
            city: 'NN city',
            province: 'NN province'
        },
        imageUrl: '/img/angularjs-logo.png'
     }
    
});