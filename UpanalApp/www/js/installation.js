angular.module('starter.installation', [])
.controller('installationCtrl', function($scope, $stateParams, $state, $ionicPopup, $ionicPlatform) {
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });
})