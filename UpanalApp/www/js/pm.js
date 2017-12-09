angular.module('starter.pm', [])
.controller('pmCtrl', function($scope, $stateParams, $state, $ionicPopup, $ionicPlatform) {
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });
})