var shoppingcartApp = angular.module('shoppingcartApp', ['ui.bootstrap']);

shoppingcartApp.controller('shoppingcartController', function FirstCtrl($scope, $http) {

    $scope.alerts = [];

    //server-anrop:
    $scope.getProducts = function () {
        $http.get('http://localhost:8080/products').success(function (data) {
            $scope.products = data;
        });
    };

    $scope.buy = function (id) {
        $http.post('http://localhost:8080/cart/store/' + id).success(function () {
            $scope.updateCart();
            $scope.updateTotalPrice();
            $scope.addAlert("Lagt till id " + id, 'success');
        });
    };

    $scope.remove = function (id) {
        $http.post('http://localhost:8080/cart/remove/' + id).success(function () {
            $scope.updateCart();
            $scope.updateTotalPrice();
            $scope.addAlert("Tagit bort id " + id, 'danger');
        });
    };

    $scope.updateTotalPrice = function () {
        $http.post('http://localhost:8080/cart/total').success(function (data) {
            $scope.total = data.totalPrice;
        });
    };

    $scope.updateCart = function () {
        $http.post('http://localhost:8080/cart/summary').success(function (data) {
            $scope.cart = data;
        });
    };

    //alerts:
    $scope.addAlert = function (msg, type) {
        $scope.clearAlerts();
        $scope.alerts.push({msg: msg, type: type});
    };

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.clearAlerts = function () {
        $scope.alerts = [];
    };

    $scope.init = function () {
        $scope.getProducts();
        $scope.updateTotalPrice();
        $scope.updateCart();
    };

});