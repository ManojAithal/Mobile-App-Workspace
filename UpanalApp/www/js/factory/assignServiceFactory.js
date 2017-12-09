
angular.module('starter.factory', [])
.factory("adminAssignFactory", function() {
    var  assignFactory = {};
    assignFactory.setter = function(newValue) {
        assignFactory.serviceSelected = newValue;
    }
    assignFactory.getter = function() {
        return assignFactory.serviceSelected;
    }
    return assignFactory;
});