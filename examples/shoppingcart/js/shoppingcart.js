var shoppingcartApp = angular.module('shoppingcartApp', []);

shoppingcartApp.controller('shoppingcartController', function FirstCtrl($scope, $http) {

    $scope.getProducts = function () {
        $http.get('http://localhost:8080/products').success(function (data) {
            $scope.products = data;
        }).error(function (data, status, headers, config) {
                console.log("error: " + status);
            });
    };

    $scope.buy = function (id) {
        $http.post('http://localhost:8080/cart/store/' + id).success(function (data) {
            $scope.updateTotal();
            $scope.updateCart();
        });
    };

    $scope.remove = function (id) {
        $http.post('http://localhost:8080/cart/remove/' + id).success(function (data) {
            $scope.updateTotal();
            $scope.updateCart();
        });
    };

    $scope.updateTotal = function () {
        $http.post('http://localhost:8080/cart/total').success(function (data) {
            $scope.total = data.totalPrice;
        });
    };

    $scope.updateCart = function () {
        $http.post('http://localhost:8080/cart/summary').success(function (data) {
            $scope.cart = data;
        });
    };

    //init all data:
    $scope.getProducts();
    $scope.updateTotal();
    $scope.updateCart();

});