app.directive( 'myDirective', function () {
    return {
        template: '<a class="btn">Toggle me!</a>',
        link: function ( scope, element, attrs ) {
            var on = false;

            $(element).click( function () {
                if ( on ) {
                    $(element).removeClass( 'active' );
                }
                else {
                    $(element).addClass( 'active' );
                }

                on = !on;
            });
        }
    };
});