var myApp = angular.module('myApp', []);

myApp.controller('outerController', function ($scope) {
    $scope.myArrayOfPrimitives = [ 11, 22 ];
    $scope.myArrayOfObjects    = [{num: 101}, {num: 202}]
});


myApp.controller('innerController', function ($scope) {

});