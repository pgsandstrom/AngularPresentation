var app = angular.module('formApp', []);

app.controller("formController", function($scope) {
    $scope.master = {};

    $scope.save = function (user) {
        $scope.master = angular.copy(user);
    };

    $scope.load = function () {
        $scope.user = angular.copy($scope.master);
    };

    $scope.load();
});