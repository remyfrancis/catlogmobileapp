'use strict';

angular.module('catalogApp.controllers', [])

.controller('catController', ['$scope', '$resource', '$stateParams', 'itemFactory', function($scope, $resource, $stateParams, itemFactory) {
            
                        $scope.showItem = false;
                        $scope.message="Loading ...";
                        $scope.item = itemFactory.getItems().get({id:0})
                        .$promise.then(
                            function(response){
                                $scope.item = response;
                                $scope.showItem = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
                        )
                        
                        }]);
                        