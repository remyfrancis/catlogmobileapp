'use strict';

angular.module('catlog.services', ['ngResource'])
        //.constant("baseURL","http://localhost:3000/")
        .constant("baseURL","http://catlogproject.herokuapp.com/")



        .factory("anchoringFactory", ['$resource', 'baseURL', function($resource,baseURL) {
            return $resource(baseURL+"anchoring/:id");
        }])

        .factory("boathardwareFactory", ['$resource', 'baseURL', function($resource,baseURL) {
            return $resource(baseURL+"boathardware/:id");
        }])

        .factory("boatsandmotorsFactory", ['$resource', 'baseURL', function($resource,baseURL) {
            return $resource(baseURL+"boatsandmotors/:id");
        }])

        .factory("clothingFactory", ['$resource', 'baseURL', function($resource,baseURL) {
            return $resource(baseURL+"clothing/:id");
        }])

        .factory("divingFactory", ['$resource', 'baseURL', function($resource,baseURL) {
            return $resource(baseURL+"diving/:id");
        }])

        .factory("electricalFactory", ['$resource', 'baseURL', function($resource,baseURL) {
            return $resource(baseURL+"electrical/:id");
        }])

        .factory("electronicFactory", ['$resource', 'baseURL', function($resource,baseURL) {
            return $resource(baseURL+"electronic/:id");
        }])

        .factory("fishingFactory", ['$resource', 'baseURL', function($resource,baseURL) {
            return $resource(baseURL+"fishing/:id");
        }])

        .factory("guidesFactory", ['$resource', 'baseURL', function($resource,baseURL) {
            return $resource(baseURL+"guides/:id");
        }])

        .factory("interiorFactory", ['$resource', 'baseURL', function($resource,baseURL) {
            return $resource(baseURL+"interior/:id");
        }])

        .factory("maintenanceFactory", ['$resource', 'baseURL', function($resource,baseURL) {
            return $resource(baseURL+"maintenance/:id");
        }])

        .factory("plumbingFactory", ['$resource', 'baseURL', function($resource,baseURL) {
            return $resource(baseURL+"plumbing/:id");
        }])

        .factory("safetyFactory", ['$resource', 'baseURL', function($resource,baseURL) {
            return $resource(baseURL+"safety/:id");
        }])

        .factory("riggingFactory", ['$resource', 'baseURL', function($resource,baseURL) {
            return $resource(baseURL+"rigging/:id");
        }])


;
