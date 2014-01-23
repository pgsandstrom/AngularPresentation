app.directive( 'myDirective', function () {
    return {
        scope: true,
        templateUrl:'myTemplate.html',
        link: function ( scope, element, attrs ) {
            scope.on = false;

            scope.toggle = function () {
                scope.on = !scope.on;
            };
        }
    };
});