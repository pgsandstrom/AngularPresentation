describe('Shoppingcart', function () {
    var scope;//we'll use this scope in our tests
    var $httpBackend;

    //mock Application to allow us to inject our own dependencies
    beforeEach(module('shoppingcartApp'));

    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(inject(function ($rootScope, $controller, $injector) {
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('shoppingcartController', {$scope: scope});
        $httpBackend = $injector.get('$httpBackend');
    }));

    // tests start here
    describe('alerts', function() {
        it('empty at beginning', function () {
            expect(scope.alerts.length).toEqual(0);
        });

        it('adding an alert', function () {
            scope.addAlert("Alert!");
            expect(scope.alerts.length).toEqual(1);
        });

        it('clearing alerts', function () {
            scope.alerts = ["ett item"];
            expect(scope.alerts.length).toEqual(1);
            scope.clearAlerts();
            expect(scope.alerts.length).toEqual(0);
        });
    });

    describe('REST communication', function() {
        it('should get products', function () {
            $httpBackend.when('GET', 'http://localhost:8080/products').respond('mina produkter');
            scope.getProducts();
            $httpBackend.flush();
            expect(scope.products).toEqual('mina produkter');
        });

        it('buy should update cart, total and alert', function () {
            $httpBackend.when('POST', 'http://localhost:8080/cart/store/1').respond('ok köpt');
            $httpBackend.when('POST', 'http://localhost:8080/cart/total').respond('1');
            $httpBackend.when('POST', 'http://localhost:8080/cart/summary').respond('summary');
            spyOn(scope, 'addAlert').andCallThrough();
            scope.buy(1);
            $httpBackend.flush();
            expect(scope.addAlert).toHaveBeenCalled();
        });
    });
});