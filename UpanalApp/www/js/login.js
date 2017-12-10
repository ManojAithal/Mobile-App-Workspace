angular.module('starter.login', [])
.controller('loginCtrl', function($scope, $stateParams, $state, $ionicPopup, $ionicPlatform, $ionicLoading, $http,loginFactory) {

            $scope.signIn = function(upanal) {
                //alert(JSON.stringify(upanal));
                $ionicLoading.show({
                    template: '<p style="text-transform: capitalize;">Please Wait</p><ion-spinner class="spinner-light"></ion-spinner>'
                });
                $http({
                    method : 'POST',
                    url : 'http://13.127.31.91/ssp/user/login',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data : upanal
                }).then(function(res){
                    $ionicLoading.hide();
                    loginFactory.setter(res.data);
                    console.log(JSON.stringify(loginFactory.getter()));
                    $state.go('app.home');
                },function(err){
                    console.log(err);
                    $ionicLoading.hide();
                });

                
            }
    
})