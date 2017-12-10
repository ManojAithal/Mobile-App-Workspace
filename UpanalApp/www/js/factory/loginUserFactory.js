
angular.module('starter.factory2', [])
.factory("loginFactory", function() {
    var  loginFactory = {};
    loginFactory.setter = function(newValue) {
        loginFactory.setLoginData = newValue;
    }
    loginFactory.getter = function() {
        return loginFactory.setLoginData;
    }
    return loginFactory;
});