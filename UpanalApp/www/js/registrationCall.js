angular.module('starter.registrationCall', [])

    .controller('registrationCallCtrl', function ($scope, $ionicModal, $state, $timeout, $http, $ionicLoading) {
        $scope.upanal = {};
        $scope.registrationSubmit = function () {
            console.log(JSON.stringify($scope.upanal));
            $ionicLoading.show({
                template: '<p style="text-transform: capitalize;">Please Wait</p><ion-spinner class="spinner-light"></ion-spinner>'
            });
            $http({
                method: 'POST',
                url: 'http://13.127.31.91/ssp/service/save',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: $scope.upanal
            }).then(function (res) {
                $ionicLoading.hide();
               // alert(JSON.stringify(res));
                $scope.upanal = {}; //--For Form Resetting----
                $state.go('app.home');
            }, function (err) {
                $ionicLoading.hide();
                alert(JSON.stringify(err));
            });
        }
    });