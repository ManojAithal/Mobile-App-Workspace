angular.module('starter.controllers', ['ionic-material'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  $scope.$on('$ionicView.enter', function(e) {
    console.log('$ionicView.enter ' + e);
  });

  
})



.controller('homeCtrl', function($scope,loginFactory) {
  // $scope.upanal = {
  //   machineDetails : {
  //     machineMake : 'abc',
  //     machineModel : 'xyz',
  //     machineSlNo : '12312'
  //   },
  //   customerDetails :{
      
  //   }

  // }
  $scope.adminUserFlag = loginFactory.getter();

});
