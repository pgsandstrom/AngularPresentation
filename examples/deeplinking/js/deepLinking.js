var myApp = angular.module('deepLinkingApp', ['ngRoute']);

myApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/examples/deeplinking/tab1', {
            controller: 'tab1Ctrl',
            templateUrl: 'tab1.html'
        })
        .when('/examples/deeplinking/tab2', {
            controller: 'tab2Ctrl',
            templateUrl: 'tab2.html'
        })
        .otherwise({
            redirectTo: '/examples/deeplinking/'
        });
});

myApp.controller('tab1Ctrl', function ($scope) {

});

myApp.controller('tab2Ctrl', function ($scope) {

});

myApp.controller('deepLinkingCtrl', function ($scope, $location) {

    $scope.selectTab1 = function () {
        $location.path('/examples/deeplinking/tab1');
    };

    $scope.selectTab2 = function () {
        $location.path('/examples/deeplinking/tab2');
    };

});