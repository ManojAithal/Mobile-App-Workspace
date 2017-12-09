angular.module('starter.assignCall', ['ionic-material'])

    .controller('assignCallCtrl', function ($scope, $ionicModal, $timeout, $http, adminAssignFactory) {
        $scope.upanal = [];
        $http.get('sampleData.json')
            .then(function (success) {
                //console.log(JSON.stringify(success));
                $scope.upanal = success.data;
            })

        $scope.serviceSelection = function (index) {
            
            $scope.modal
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

    });