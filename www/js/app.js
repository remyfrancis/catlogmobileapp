// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('catlog', ['ionic', 'catlog.controllers', 'catlog.services','jett.ionic.filter.bar', 'ngCart'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/sidebar.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'mainContent': {
        templateUrl: 'templates/home.html',
          controller: ''
      }
    }
  })

  .state('app.summary', {
    url: '/summary',
    views: {
      'mainContent': {
        templateUrl: 'template/ngCart/cart.html',
          controller: 'CartController'
      }
    }
  })


  // route for the anchoring page
            .state('app.anchoring', {
                url:'/anchoring',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/anchoring.html',
                        controller  : 'anchoringController'
                    }
                }
            })


            // route for the boat hardware page
            .state('app.boat_hardware', {
                url:'/boat_hardware',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/boat_hardware.html',
                        controller  : 'boathardwareController'
                    }
                }
            })

        // route for the boats and motors page
            .state('app.boats_and_motors', {
                url:'/boats_and_motors',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/boats_and_motors.html',
                        controller  : 'boatsandmotorsController'
                    }
                }
            })

        // route for the clothing page
            .state('app.clothing', {
                url:'/clothing',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/clothing.html',
                        controller  : 'clothingController'
                    }
                }
            })

        // route for the divebuddy page
            .state('app.divebuddy', {
                url:'/divebuddy',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/divebuddy.html',
                        controller  : 'divingController'
                    }
                }
            })

        // route for the electrical page
            .state('app.electrical', {
                url:'/electrical',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/electrical.html',
                        controller  : 'electricalController'
                    }
                }
            })

        // route for the electronic page
            .state('app.electronic', {
                url:'/electronic',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/electronic.html',
                        controller  : 'electronicController'
                    }
                }
            })

        // route for the fishing page
            .state('app.fishing', {
                url:'/fishing',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/fishing.html',
                        controller  : 'fishingController'
                    }
                }
            })

        // route for the guides page
            .state('app.guides', {
                url:'/guides',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/guides.html',
                        controller  : 'guidesController'
                    }
                }
            })

        // route for the interior page
            .state('app.interior', {
                url:'/interior',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/interior.html',
                        controller  : 'interiorController'
                    }
                }
            })

        // route for the maintenance page
            .state('app.maintenance', {
                url:'/maintenance',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/maintenance.html',
                        controller  : 'maintenanceController'
                    }
                }
            })

        // route for the plumbing page
            .state('app.plumbing', {
                url:'/plumbing',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/plumbing.html',
                        controller  : 'plumbingController'
                    }
                }
            })

            // route for the rigging page
            .state('app.rigging', {
                url:'/rigging',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/rigging.html',
                        controller  : 'riggingController'
                    }
                }
            })

            // route for the safety page
            .state('app.safety', {
                url:'/safety',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/safety.html',
                        controller  : 'safetyController'
                    }
                }
            })


            ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
