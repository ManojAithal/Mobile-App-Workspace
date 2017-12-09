angular.module('starter.attendance', [])
.controller('attendanceCtrl', function($scope, $stateParams, $state, $ionicPopup, $ionicPlatform) {
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });
})