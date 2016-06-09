'use strict';

var app = angular.module('myApp', ['ngRoute']);

app.controller('homeController', function ($scope, $rootScope, $http) {
    $rootScope.username = "Víctor Vázquez";
    $rootScope.mail = "vickt00r5@gmail.com"
    $rootScope.title = "Home";
    $rootScope.profilePic = "assets/img/" + $rootScope.mail + "/user.jpg";
})
.controller('MyCtrl', function ($scope, $rootScope, $http) {
    $scope.showDialog = function () {
        console.log('hs');
    };
})
.controller('tableController', function ($scope, $rootScope, $http) {
    $rootScope.title = "Vademécum";
})
.controller('aboutController', function ($scope, $rootScope, $http) {
    $rootScope.title = "Acerca de";
})
.controller('appointmentsController', function ($scope, $rootScope, $http) {
    $rootScope.title = "Citas";
})
.controller('trashController', function ($scope, $rootScope, $http) {
    $rootScope.title = "Elementos eliminados";
})
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '~VictorVazquez/Dashboard/app/shared/home.html',
            controller: 'homeController'
        })
        .when('/table', {
            templateUrl: 'app/shared/table-info.html',
            controller: 'tableController'
        })
        .when('/appointments', {
            templateUrl: 'app/shared/appointments.html',
            controller: 'appointmentsController'
        })
        .when('/trash', {
            templateUrl: 'app/shared/trash.html',
            controller: 'trashController'
        })          
        .otherwise({
            redirectTo: '/home'
        })
        $locationProvider.html5Mode({ enabled: true, requireBase: false });
}])
.run(function ($rootScope, $timeout) {
    $rootScope.$on('$viewContentLoaded', function () {
        $timeout(function () {
            componentHandler.upgradeAllRegistered();
        })
    })
});

