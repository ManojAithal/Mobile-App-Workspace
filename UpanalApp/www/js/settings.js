angular.module('starter.settings', [])
.controller('settingsCtrl', function($scope, $stateParams, $state, $ionicPopup, $ionicPlatform) {
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });
})