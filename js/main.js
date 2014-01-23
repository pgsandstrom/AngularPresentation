var myApp = angular.module('myApp', []);

myApp.directive('myElement', function () {
    return {
        restrict: "E",
        template: "<div>Vår template!</div>"
    };
});

myApp.directive('myAttribute', function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("mouseenter", function () {
                scope.$apply(attrs.myAttribute);
            });
        }
    }
})


myApp.controller('myController', function ($scope) {
    $scope.count = 0;

    $scope.incCount = function() {
        $scope.count++;
    }
});