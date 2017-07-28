angular.module('catlog.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


        .controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory) {

                    $scope.leaders = corporateFactory.query();
                    console.log($scope.leaders);

                    }])

        .controller('anchoringController', ['$scope', 'anchoringFactory', 'baseURL',
        '$ionicListDelegate', '$ionicPopup', '$ionicLoading', '$timeout',
        function($scope, anchoringFactory, baseURL, $ionicListDelegate, $ionicPopup, $ionicLoading, $timeout) {

                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner> Loading...'
                    });
                    $scope.baseURL = baseURL;
                    $scope.anchoring= anchoringFactory.query(
                      function (response) {
                          $scope.anchoring = response;
                          $timeout(function () {
                              $ionicLoading.hide();
                          }, 1000);
                      },
                      function (response) {
                          $scope.message = "Error: " + response.status + " " + response.statusText;
                          $timeout(function () {
                              $ionicLoading.hide();
                          }, 1000);
                      });

                    }])

        .controller('boathardwareController', ['$scope', 'boathardwareFactory', 'baseURL',
        '$ionicListDelegate', '$ionicPopup', '$ionicLoading', '$timeout',
        function($scope, boathardwareFactory, baseURL, $ionicListDelegate, $ionicPopup, $ionicLoading, $timeout) {


                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner> Loading...'
                    });
                    $scope.baseURL = baseURL;
                    $scope.boathardware= boathardwareFactory.query(
                      function (response) {
                          $scope.boathardware = response;
                          $timeout(function () {
                              $ionicLoading.hide();
                          }, 1000);
                      },
                      function (response) {
                          $scope.message = "Error: " + response.status + " " + response.statusText;
                          $timeout(function () {
                              $ionicLoading.hide();
                          }, 1000);
                      });

                    }])

        .controller('boatsandmotorsController', ['$scope', 'boatsandmotorsFactory', 'baseURL',
        '$ionicListDelegate', '$ionicPopup', '$ionicLoading', '$timeout',
        function($scope, boatsandmotorsFactory, baseURL, $ionicListDelegate, $ionicPopup, $ionicLoading, $timeout) {


                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner> Loading...'
                    });
                    $scope.baseURL = baseURL;
                    $scope.boatsandmotors= boatsandmotorsFactory.query(function (response) {
                        $scope.boatsandmotors = response;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    },
                    function (response) {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    });

                    }])

        .controller('clothingController', ['$scope', 'clothingFactory', 'baseURL',
        '$ionicListDelegate', '$ionicPopup', '$ionicLoading', '$timeout',
        function($scope, clothingFactory, baseURL, $ionicListDelegate, $ionicPopup, $ionicLoading, $timeout) {

                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner> Loading...'
                    });
                    $scope.baseURL = baseURL;
                    $scope.clothing= clothingFactory.query(function (response) {
                        $scope.clothing = response;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    },
                    function (response) {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    });

                    }])

        .controller('divingController', ['$scope', 'divingFactory', 'baseURL',
        '$ionicListDelegate', '$ionicPopup', '$ionicLoading', '$timeout',
        function($scope, divingFactory, baseURL, $ionicListDelegate, $ionicPopup, $ionicLoading, $timeout) {

                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner> Loading...'
                    });
                    $scope.baseURL = baseURL;
                    $scope.diving= divingFactory.query(function (response) {
                        $scope.diving = response;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    },
                    function (response) {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    });

                    }])

        .controller('electricalController', ['$scope', 'electricalFactory', 'baseURL',
        '$ionicListDelegate', '$ionicPopup', '$ionicLoading', '$timeout',
        function($scope, electricalFactory, baseURL, $ionicListDelegate, $ionicPopup, $ionicLoading, $timeout) {

                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner> Loading...'
                    });
                    $scope.baseURL = baseURL;
                    $scope.electrical= electricalFactory.query(function (response) {
                        $scope.electrical = response;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    },
                    function (response) {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    });

                    }])

        .controller('electronicController', ['$scope', 'electronicFactory', 'baseURL',
        '$ionicListDelegate', '$ionicPopup', '$ionicLoading', '$timeout',
         function($scope, electronicFactory, baseURL, $ionicListDelegate, $ionicPopup, $ionicLoading, $timeout) {

                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner> Loading...'
                    });
                    $scope.baseURL = baseURL;
                    $scope.electronic= electronicFactory.query(function (response) {
                        $scope.electronic = response;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    },
                    function (response) {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    });

                    }])

        .controller('fishingController', ['$scope', 'fishingFactory', 'baseURL',
        '$ionicListDelegate', '$ionicPopup', '$ionicLoading', '$timeout',
        function($scope, fishingFactory, baseURL, $ionicListDelegate, $ionicPopup, $ionicLoading, $timeout) {

                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner> Loading...'
                    });
                    $scope.baseURL = baseURL;
                    $scope.fishing= fishingFactory.query(function (response) {
                        $scope.fishing = response;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    },
                    function (response) {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    });

                    }])

        .controller('guidesController', ['$scope', 'guidesFactory', 'baseURL',
        '$ionicListDelegate', '$ionicPopup', '$ionicLoading', '$timeout',
         function($scope, guidesFactory, baseURL, $ionicListDelegate, $ionicPopup, $ionicLoading, $timeout) {

                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner> Loading...'
                    });
                    $scope.baseURL = baseURL;
                    $scope.guides= guidesFactory.query(function (response) {
                        $scope.guides = response;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    },
                    function (response) {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    });

                    }])


        .controller('interiorController', ['$scope', 'interiorFactory', 'baseURL',
        '$ionicListDelegate', '$ionicPopup', '$ionicLoading', '$timeout',
         function($scope, interiorFactory, baseURL, $ionicListDelegate, $ionicPopup, $ionicLoading, $timeout) {

                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner> Loading...'
                    });
                    $scope.baseURL = baseURL;
                    $scope.interior= interiorFactory.query(function (response) {
                        $scope.interior = response;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    },
                    function (response) {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    });

                    }])

        .controller('maintenanceController', ['$scope', 'maintenanceFactory', 'baseURL',
        '$ionicListDelegate', '$ionicPopup', '$ionicLoading', '$timeout',
         function($scope, maintenanceFactory, baseURL, $ionicListDelegate, $ionicPopup, $ionicLoading, $timeout) {

                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner> Loading...'
                    });
                    $scope.baseURL = baseURL;
                    $scope.maintenance= maintenanceFactory.query(function (response) {
                        $scope.maintenance = response;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    },
                    function (response) {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    });

                    }])

        .controller('plumbingController', ['$scope', 'plumbingFactory', 'baseURL',
        '$ionicListDelegate', '$ionicPopup', '$ionicLoading', '$timeout',
        function($scope, plumbingFactory, baseURL, $ionicListDelegate, $ionicPopup, $ionicLoading, $timeout) {


                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner> Loading...'
                    });
                    $scope.baseURL = baseURL;
                    $scope.plumbing= plumbingFactory.query(function (response) {
                        $scope.plumbing = response;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    },
                    function (response) {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    });

                    }])

        .controller('safetyController', ['$scope', 'safetyFactory', 'baseURL',
        '$ionicListDelegate', '$ionicPopup', '$ionicLoading', '$timeout',
         function($scope, safetyFactory, baseURL,  $ionicListDelegate, $ionicPopup, $ionicLoading, $timeout) {

                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner> Loading...'
                    });
                    $scope.baseURL = baseURL;
                    $scope.safety= safetyFactory.query(function (response) {
                        $scope.safety = response;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    },
                    function (response) {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    });

                    }])

        .controller('riggingController', ['$scope', 'riggingFactory', 'baseURL',
        '$ionicListDelegate', '$ionicPopup', '$ionicLoading', '$timeout',
         function($scope, riggingFactory, baseURL, $ionicListDelegate, $ionicPopup, $ionicLoading, $timeout) {

                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner> Loading...'
                    });
                    $scope.baseURL = baseURL;
                    $scope.rigging= riggingFactory.query(function (response) {
                        $scope.rigging = response;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    },
                    function (response) {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                        $timeout(function () {
                            $ionicLoading.hide();
                        }, 1000);
                    });

                    }])

        .controller('catController', ['$scope', 'itemFactory', 'baseURL', function($scope,  itemFactory, baseURL) {

                    $scope.baseURL = baseURL;
                    //$scope.item = {};
                    //$scope.showItem = false;
                    $scope.message="Loading ...";
                    $scope.items= itemFactory.query();
                    console.log($scope.items);


                    }])





;
