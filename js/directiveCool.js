app.directive('myDirective', function () {
    return {
        scope: true,
        template: '<a class="btn" ng-class="{active: on}" ng-click="toggle()">Toggle me!</a>',
        link: function (scope) {
            scope.on = false;

            scope.toggle = function () {
                scope.on = !scope.on;
            };
        }
    };
});