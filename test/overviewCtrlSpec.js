/* global describe, it, expect, beforeEach, inject */
/* global angular */

describe('OverviewCtrl', function() {
    var createCtrl, $httpBackend, $location;
    var stockInfo = [{test: 'default'}];

    beforeEach(module('stockApp'));
    
    beforeEach(inject(function($controller, $rootScope, _$httpBackend_, _$location_) {
        $httpBackend = _$httpBackend_;
        $location = _$location_;
        
        $httpBackend.whenGET('api/stocks/info').respond(200, stockInfo);
        
        createCtrl = function() {
            return $controller('OverviewCtrl', {'$scope': $rootScope.$new()});
        };
    }));
    
    it('should load the stock info for all stocks when it starts up', function() {
        var ctrl = createCtrl();
        
        $httpBackend.flush();
        
        expect(ctrl.stocksInfo).toEqual(stockInfo);
    });
    
    it('goToStockDetails() should set the location based on the stockInfo passed in', function() {
        var ctrl = createCtrl();
        $httpBackend.flush();
        
        ctrl.goToStockDetails({symbol: 'test'});
        
        expect($location.path()).toEqual('/details');
        expect($location.search()).toEqual({symbol: 'test'});
    });
});