angular.module('starter.login', [])
.controller('loginCtrl', function($scope, $stateParams, $state, $ionicPopup, $ionicPlatform) {
    
            $scope.signIn = function(data) {
                $state.go('app.home');
            }
    
})