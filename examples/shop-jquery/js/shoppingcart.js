var shoppingcartApp = angular.module('shoppingcartApp', []);

shoppingcartApp.controller('ShoppingcartController', function FirstCtrl($scope, Data) {
    $scope.data = Data;
    $scope.text = 'text';
});