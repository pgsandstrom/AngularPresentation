var myApp = angular.module("myApp", []);

myApp.filter('myFilter', function () {
    return function (data) {
        return data + "!!";
    };
});

myApp.directive('myElement', function() {
    return {
        restrict: "E",
        template: "<div>Oj, sicket directive va!?</div>"
    };
});

myApp.directive('myTemplate', function() {
    return {
        restrict: "E",
        templateUrl: "myTemplate.html"
    };
});

myApp.directive('myAttribute', function() {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            element.bind("mouseenter", function(){
                scope.$apply(attrs.myAttribute);
            });
        }
    };
});

myApp.directive('hover', function() {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            element.bind("mouseenter", function() {
                element.addClass(attrs.hover);
            });

            element.bind("mouseleave", function() {
                element.removeClass(attrs.hover);
            });
        }
    };
});

myApp.controller("myController", function($scope) {
    $scope.text = "Hello world!";

    $scope.list = [1,2,3,4];

    $scope.persons = [
        {name:'John', phone:'555-1212', age:10},
        {name:'Mary', phone:'555-9876', age:19},
        {name:'Mike', phone:'555-4321', age:21},
        {name:'Adam', phone:'555-5678', age:35},
        {name:'Julie', phone:'555-8765', age:29}
    ];

    $scope.getText = function() {
        return "Det här funkar också!";
    };

    $scope.myAlert = function() {
        alert("my alert");
    };
});