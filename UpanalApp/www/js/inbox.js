angular.module('starter.inbox', [])
.controller('inboxCtrl', function($scope, $stateParams, $state, $ionicPopup, $ionicPlatform) {
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });
})