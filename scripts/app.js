'use strict';

angular.module('catlog', ['ionic','catlog.controllers'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/app',
                abstract: true,
                views: {
                    /*'header': {
                        templateUrl : 'templates/header.html',
                    },*/
                    'content': {
                        templateUrl : 'templates/sidebar.html',
                        controller  : 'MenuCtrl'
                    }/*,
                    'footer': {
                        templateUrl : 'templates/footer.html',
                    }*/
                }

            })
        
        
            // route for the anchoring page
            .state('app.index', {
                url:'/index',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/index.html',
                        controller  : 'catController'                  
                    }
                }
            })
        
            // route for the anchoring page
            .state('app.anchoring', {
                url:'anchoring',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/anchoring.html',
                        controller  : ''                  
                    }
                }
            })
        
        
            // route for the boat hardware page
            .state('app.boat_hardware', {
                url:'boat_hardware',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/boat_hardware.html',
                        controller  : ''                  
                    }
                }
            })
        
        // route for the boats and motors page
            .state('app.boats_and_motors', {
                url:'boats_and_motors',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/boats_and_motors.html',
                        controller  : ''                  
                    }
                }
            })
        
        // route for the clothing page
            .state('app.clothing', {
                url:'clothing',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/clothing.html',
                        controller  : ''                  
                    }
                }
            })
        
        // route for the divebuddy page
            .state('app.divebuddy', {
                url:'divebuddy',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/divebuddy.html',
                        controller  : ''                  
                    }
                }
            })
        
        // route for the electrical page
            .state('app.electrical', {
                url:'electrical',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/electrical.html',
                        controller  : ''                  
                    }
                }
            })
        
        // route for the fishing page
            .state('app.fishing', {
                url:'fishing',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/fishing.html',
                        controller  : ''                  
                    }
                }
            })
        
        // route for the guides page
            .state('app.guides', {
                url:'guides',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/guides.html',
                        controller  : ''                  
                    }
                }
            })
        
        // route for the interior page
            .state('app.interior', {
                url:'interior',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/interior.html',
                        controller  : ''                  
                    }
                }
            })
        
        // route for the maintenance page
            .state('app.maintenance', {
                url:'maintenance',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/maintenance.html',
                        controller  : ''                  
                    }
                }
            })
        
        // route for the plumbing page
            .state('app.plumbing', {
                url:'plumbing',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/plumbing.html',
                        controller  : ''                  
                    }
                }
            })
        
            // route for the rigging page
            .state('app.rigging', {
                url:'rigging',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/rigging.html',
                        controller  : ''                  
                    }
                }
            })
        
            // route for the contactus page
            .state('app.contact', {
                url:'contact',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/contact.html',
                        controller  : ''                  
                    }
                }
            })

            // route for the menu page
            .state('app.menu', {
                url: 'menu',
                views: {
                    'mainContent': {
                        templateUrl : 'templates/menu.html',
                        controller  : ''
                    }
                }
            });
    
        $urlRouterProvider.otherwise('/app/index');
    })
;
