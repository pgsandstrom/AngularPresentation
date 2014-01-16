var shoppingcartApp = angular.module('shoppingcartApp', []);

shoppingcartApp.controller('shoppingcartController', function FirstCtrl($scope, $http) {

    $http.get('http://localhost:8080/products').success(function (data) {
        $scope.products = data;
        console.log("data: " + JSON.stringify(data));
    }).error(function (data, status, headers, config) {
            console.log("data fel: " + status);
        });

    console.log("klar");
});