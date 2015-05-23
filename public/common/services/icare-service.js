/* global define */

/* $icare factory service */

define([ 'angular', 'iCareSession'], function(angular, session) {
    'use strict';

    angular.module('services').factory('$icare', function($route, $routeParams, $rootScope, $location, $timeout, $window/*, $windowResizeService, $cssService, $sliderService, $logger*/) {

        /**
         * The reference to the OpsisSession.
         */
        var icareSession = new session.iCareSession();

        /**
         * This function returns the app ID for the currently running application.
         */
        var getCurrentAppID = function() {
            if ($routeParams.appId) {
                return $routeParams.appId;
            }
            return 1001;
        };

        var tabChangeCBfunctions = [];

        return {

            /**
             * This is used to add call back functions that will be call right before a tab change. This stack of
             * callback functions will be reset on a tab change as well.
             */
            addCBForOnTabChange : function(newCBfunction) {
                tabChangeCBfunctions.push(newCBfunction);
            },

            
            system : function() {
                return icareSession.getSystem();
            },

            
            session : function() {
                return icareSession;
            },

            /**
             * Returns the app identifier defined in $routeParams.
             */
            getAppId : function() {
                return getCurrentAppID();
            },

            getAppContext : function() {
                var appManager = icareSession.getSystem().AppManager();
                var appCtxt = appManager.getAppContext(getCurrentAppID());
                return appCtxt;
            },

           
            startApplication : function(app) {
                var appManager = icareSession.getSystem().AppManager();

                var pid = appManager.launch(app.title);
                //$logger.log("Started appId= " + pid);

                this.switchRunningApplication();
                return pid;
            },

           stopActiveApplication : function() {
                var appManager = icareSession.getSystem().AppManager();
                var activeCtxt = appManager.getActiveApp();
                var pid = activeCtxt.getId();

                this.stopApplication(pid);
                return pid;
            },

            stopApplication : function(pid) {
                var appManager = icareSession.getSystem().AppManager();
                appManager.destroy(pid);
                this.switchRunningApplication();
            },


            switchRunningApplication : function(pid) {

                tabChangeCBfunctions.forEach(function(cb) {
                    cb();
                });
                tabChangeCBfunctions = [];

                var system = icareSession.getSystem();
                var appManager = system.AppManager();
                var activeCtxt = appManager.getActiveApp();
                var appId = pid;

                if (!appId) {
                    appId = activeCtxt.getId();
                } else {
                    appManager.setActiveApp(appId);
                }
                activeCtxt = appManager.getActiveApp();
                // Get the application title with no white space.
                var appTitle = activeCtxt.getAppDescriptor().getTitleId();

                var href = activeCtxt.getAppDescriptor().getHref();

                // Reset Call-Backs on global services.
                //$windowResizeService.clearCBforOnResize();
                //$cssService.clearlightsOnOffCBs();

                if (href === '') {
                    // Go to root.
                    $window.location.href = '#';
                } else {
                	$window.location.href = '#' + href;
                }
                // Reset all elements that require resizing. Set up for perfect fit.
                //$rootScope.$broadcast('windowResize');
            },
            
            //quick back to monitor
            navigateHome : function() {
                this.switchRunningApplication(this.mainPid);
            }
        };
    });
});
