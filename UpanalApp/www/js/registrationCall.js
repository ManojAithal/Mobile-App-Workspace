angular.module('starter.registrationCall', [])

.controller('registrationCallCtrl', function($scope, $ionicModal, $state, $timeout) {
    $scope.upanal = {};
    $scope.registrationSubmit = function(){
        console.log(JSON.stringify($scope.upanal));
        $scope.upanal = {}; //--For Form Resetting----
        $state.go('app.home');
    }
});