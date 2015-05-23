
/**
 * Router Config
 * This is the router definition that defines all application routes.
 */
/*global define */
define([ 'angular', 
         'angular-ui-router'], 
    function (angular) {
    'use strict';
    return angular.module('routes', [ 'ui.router' ]).config([ "$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {

        //Turn on or off HTML5 mode which uses the # hash
        //$locationProvider.html5Mode(false);

          /**
           * Router paths
           * This is where the name of the route is matched to the controller and view template.
           */
         // $stateProvider
          //    .state('monitor', {url: '/monitor', templateUrl: '', controller: ''});

          //$urlRouterProvider
           //   .otherwise('monitor');
    } ]);
});
