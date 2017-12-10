angular.module('starter.assignCall', ['ionic-material'])

    .controller('assignCallCtrl', function ($scope, $ionicModal, $timeout, $http, adminAssignFactory, $ionicLoading) {

        $scope.upanal = [];
        $scope.upanalIndex = {};
        $scope.upanalIndex.generic = {};
        $scope.upanalIndex.generic.serviceEnggId = [];
        var arry = [];

        $ionicLoading.show({
            template: '<p style="text-transform: capitalize;">Please Wait</p><ion-spinner class="spinner-light"></ion-spinner>'
        });

        $http.get('http://13.127.31.91/ssp/service/all')
            .then(function (success) {
                //console.log(JSON.stringify(success));
                $scope.upanal = success.data;
                $http.get('http://13.127.31.91/ssp/employee/all')
                    .then(function (success) {
                        $ionicLoading.hide();
                        console.log(JSON.stringify(success.data));
                        $scope.engineers = success.data;
                    }, function (error) {
                        $ionicLoading.hide();
                        alert(JSON.stringify(error));
                    })
            }, function (error) {
                $ionicLoading.hide();
                alert(JSON.stringify(error));
            })

        $scope.engineerSelection = function (e) {
           // alert(e);
            arry.push(e);
            $scope.upanalIndex.generic.serviceEnggId = arry;
            console.log(arry);
            console.log($scope.upanalIndex.generic.serviceEnggId);
        }

        $scope.modal;

        $scope.serviceSelection = function (index) {

            adminAssignFactory.setter($scope.upanal[index]);
            console.log(JSON.stringify(adminAssignFactory.getter()));
            $scope.upanalIndex = $scope.upanal[index];
            $ionicModal.fromTemplateUrl('templates/adminAssignServiceMadal.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {

                $scope.modal = modal;
                $scope.modal.show();
            });

            $scope.openModal = function () {
                $scope.modal.show();
            };

            $scope.closeModal = function () {
                $scope.modal.hide();
            };
            // Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function () {
                $scope.modal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function () {
                // Execute action
            });
            // Execute action on remove modal
            $scope.$on('modal.removed', function () {
                // Execute action
            });
        }

        $scope.adminAssign = function () {
            $ionicLoading.show({
                template: '<p style="text-transform: capitalize;">Please Wait</p><ion-spinner class="spinner-light"></ion-spinner>'
            });
            console.log(JSON.stringify($scope.upanalIndex));
            $http({
                method: 'POST',
                url: 'http://13.127.31.91/ssp/service/assign',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: $scope.upanalIndex
            }).then(function (success) {
                console.log(success);

                $http.get('http://13.127.31.91/ssp/service/all')
                    .then(function (success) {
                        //console.log(JSON.stringify(success));
                        $scope.upanal = success.data;
                        $ionicLoading.hide();
                        $scope.modal.hide();
                    }, function (error) {
                        $ionicLoading.hide();
                        alert(JSON.stringify(error));
                    })
            }, function (error) {
                $ionicLoading.hide();
                alert(JSON.stringify(error));
            });

        }

    });