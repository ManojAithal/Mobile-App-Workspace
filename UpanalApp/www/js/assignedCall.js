angular.module('starter.assignedCall', [])

    .controller('assignedCallCtrl', function ($scope, $ionicModal, $state, $timeout, $http, $ionicLoading, loginFactory) {
        // alert('starter.assignedCall');
        $scope.upanal = [];
        $scope.upanalIndex = {};
        $scope.upanalIndex.generic = {};
        $scope.upanalIndex.generic.serviceEnggId = [];

        $ionicLoading.show({
            template: '<p style="text-transform: capitalize;">Please Wait</p><ion-spinner class="spinner-light"></ion-spinner>'
        });

        //alert('http://13.127.31.91/ssp/service/get/byemail?email='+loginFactory.getter().emp.email);
        //$http.post('http://13.127.31.91/ssp/service/get/byemail?email=manojaithal026%40gmail.com')
        $http.post('http://13.127.31.91/ssp/service/get/byemail?email='+loginFactory.getter().emp.email)
        .then(function (success) {
                console.log(JSON.stringify(success));
                $scope.upanal = success.data;
                $ionicLoading.hide();
            }, function (error) {
                $ionicLoading.hide();
                alert(JSON.stringify(error));
            })


        $scope.userServiceSelection = function (index) {
            $scope.upanalIndex = $scope.upanal[index];

            if ($scope.upanalIndex.generic.status == "Assigned") {
                $ionicModal.fromTemplateUrl('templates/userAssignedServiceModal.html', {
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
            } else if ($scope.upanalIndex.generic.status == "Started") {
                $ionicModal.fromTemplateUrl('templates/userStartedService.html', {
                    scope: $scope,
                    animation: 'slide-in-up'
                }).then(function (modal) {

                    $scope.modal2 = modal;
                    $scope.modal2.show();
                });

                $scope.openModal = function () {
                    $scope.modal2.show();
                };

                $scope.closeModal = function () {
                    $scope.modal2.hide();
                };
                // Cleanup the modal when we're done with it!
                $scope.$on('$destroy', function () {
                    $scope.modal2.remove();
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


        }

        $scope.userStartService = function (servcieId) {
            //alert(servcieId);
            $ionicLoading.show({
                template: '<p style="text-transform: capitalize;">Please Wait</p><ion-spinner class="spinner-light"></ion-spinner>'
            });
            $http({
                method: 'POST',
                url: 'http://13.127.31.91/ssp/service/update/' + servcieId + '/Started'
            }).then(function (success) {
                console.log(success);

                $http.post('http://13.127.31.91/ssp/service/get/byemail?email=manojaithal026%40gmail.com')
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

        $scope.serviceUserCompleted = function(upanal){
            $scope.modal.hide();
            alert(JSON.stringify(upanal));
        }
    });