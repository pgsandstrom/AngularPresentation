var myApp = angular.module('deepLinkingApp', ['ngRoute']);

//myApp.directive('deepLinkingCtrl', function () {
//    return {
//        restrict: "E",
//        template: "<div>Vår template!</div>"
//    };
//});
//
//myApp.directive('myAttribute', function () {
//    return {
//        restrict: "A",
//        link: function (scope, element, attrs) {
//            element.bind("mouseenter", function () {
//                scope.$apply(attrs.myAttribute);
//            });
//        }
//    }
//})

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/tab1', {
            controller: 'tab1Ctrl',
            templateUrl: 'tab1.html'
        })
        .when('/tab2', {
            controller: 'tab2Ctrl',
            templateUrl: 'tab2.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

myApp.controller('tab1Ctrl', function ($scope) {

});

myApp.controller('tab2Ctrl', function ($scope) {

});

myApp.controller('deepLinkingCtrl', function ($scope, $location) {

    $scope.selectTab1 = function () {
        $location.path('/tab1');
    };

    $scope.selectTab2 = function () {
        $location.path('/tab2');
    };

});