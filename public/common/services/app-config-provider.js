/* global define */

'use strict';

define([ 'angular', "iCareSystem", "iCareApp" ], function(angular, system, appModule) {

    /**
     * @ngdoc service
     * @name services.service:$appConfigProvider
     * @requires iCareSystem
     * @requires iCareApp 
     * @description This service is the iCare Application configuration service. It provides the means in which
     *              applications can be dynamically loaded and configured before the initial boot up of the iCare
     *              Application.
     */
    angular.module('services').provider('$appConfig', function appConfigProvider() {

        var appConfigCBs = {};
        appConfigCBs.AllCBs = [];
        var app_controllers = [];
        var defaultAppTitle;// undefined;
        var defaultPid = 1001;
        var appMode = 0; //0: normal, 1: adv

        /**
         * @ngdoc method
         * @name services.service:$appConfigProvider#addAppModuleConfigCb
         * @methodOf services.service:$appConfigProvider
         * 
         * @description This method is used to add a configuration call back to this service.
         * 
         * @param {String} The is a textual title of the application module that is associated with the configuration.
         * @param {function} This is the call back function that will be call when one of this services application
         *            configuration methods is invoked.
         */
        this.addAppModuleConfigCb = function(title, configCB) {
            appConfigCBs[title] = configCB;
            appConfigCBs.AllCBs.push(configCB);
        };

        /**
         * @ngdoc method
         * @name services.service:$appConfigProvider#configureAllAppModules
         * @methodOf services.service:$appConfigProvider
         * 
         * @description This method is used to configure all application modules that have added there configuration
         *              call back to this service.
         */
        this.configureAllAppModules = function() {
            appConfigCBs.AllCBs.forEach(function(cb) {
                cb();
            });
        };

        /**
         * @ngdoc method
         * @name services.service:$appConfigProvider#configureAppModule
         * @methodOf services.service:$appConfigProvider
         * 
         * @description This method is used to configure an application module.
         * 
         * @param {String} The is a textual title of the application module that will be configured.
         */
        this.configureAppModule = function(title) {
            if (appConfigCBs[title]) {
                var cb = appConfigCBs[title];
                cb();
            } else {
                console.log(title + " has no configuration callback function.")
            }
        };

        /**
         * @ngdoc method
         * @name services.service:$appConfigProvider#configureAppModules
         * @methodOf services.service:$appConfigProvider
         * 
         * @description This method is used to configure an array of application modules. It is indented to be used when
         *              only a subset of the total application modules are required.
         * 
         * @param {String[]} The is an array of textual titles of the application modules that will be configured.
         */
        this.configureAppModules = function(titles) {
            titles.forEach(function(title) {
                this.configureAppModule(title);
            });
        };

        /**
         * @ngdoc method
         * @name services.service:$appConfigProvider#configureDefaultAppTittle
         * @methodOf services.service:$appConfigProvider
         * 
         * @description This method is used to set the default title that will be used if there are no system
         *              applications available.
         * 
         * @param {String} The is the textual title to be set as the default app title.
         */
        this.configureDefaultAppTittle = function(title) {
            defaultAppTitle = title;
        };

        /**
         * @ngdoc method
         * @name services.service:$appConfigProvider#configureDefaultPid
         * @methodOf services.service:$appConfigProvider
         * 
         * @description This method is used to set the default pid that will be used if there are no system applications
         *              available.
         * 
         * @param {Integer} The is the integer pid to be set as the default app pid.
         */
        this.configureDefaultPid = function(pid) {
            defaultPid = pid;
        };

        /**
         * @ngdoc method
         * @name services.service:$appConfigProvider#addSystemControllerConfig
         * @methodOf services.service:$appConfigProvider
         * 
         * @description This method is used by system configuration functions to add there configuration information
         *              into the main application.
         * 
         * @param {object} controllerConfig This is controller configuration information required for a system
         *            application to exist in this environment. Configuration should be formated as in this example:
         */
     
        var checkInputObject = function(object, elements) {
            var pass = true;
            elements.forEach(function(element) {
                if (object[element] === undefined) {
                    pass = false;
                    console.error("Error in Opsis module configuration step. Input controllerConfig." + element + " is not defined properly.");
                }
            });
            return pass;
        };

        /**
         * @ngdoc method
         * @name services.service:$appConfigProvider#addAppControllerConfig
         * @methodOf services.service:$appConfigProvider
         * 
         * @description This method is used by application configuration functions to add there configuration
         *              information into the main application.
         * 
         * @param {object} controllerConfig This is controller configuration information required for an application to
         *            exist in this environment. Configuration should be formated as in this example:
         */
        /*- @example   { 
         *                title : 'Moniotr',
         *                name : "monitor", 
         *                templateUrl : "/monitor/views/monitor.html", 
         *                controller : "monitorCtrl", 
         *                href : "/monitor" 
         *             }
         *//**
             * @param {Integer} This is the index in which the application will show up on the application tab
             *            navigation.
             */
        this.addAppControllerConfig = function(controllerConfig, index) {

            var appCtrlCfgModEles = [ 'title', 'name', 'templateUrl', 'controller', 'href' ];

            if (checkInputObject(controllerConfig, appCtrlCfgModEles)) {
                if (index !== undefined) {
                    app_controllers.splice(index, 0, controllerConfig);
                } else {
                    app_controllers.splice(app_controllers.length, 0, controllerConfig);
                }
            }

        };

        /**
         * @ngdoc method
         * @name services.service:$appConfigProvider#configRoutesCB
         * @methodOf services.service:$appConfigProvider
         * 
         * @description This method is called in the predix app.js configuration route process. This method is used to
         *              configure system controllers and the application routes. All system and application
         *              configuration information should be added to this service before the app.js would call this
         *              method.
         * 
         * @param {object} $routeProvider This angular service is used to configure routes. More information about this
         *            service can be obtained at: {@link https://docs.angularjs.org/api/ngRoute/provider/$routeProvider}.
         * @param {object} $locationProvider This angular service is used to configure how the applications deep linking
         *            paths are stored. More information about this service can be obtained at:
         *            {@link https://docs.angularjs.org/api/ng/provider/$locationProvider}.
         */
        this.configRoutesCB = function($routeProvider, $locationProvider) {
            /**
             * Router paths This is where the name of the route is matched to the controller and view template.
             */
            var route = $routeProvider;    

            var controller = app_controllers[0];

            route.when('/', {
                templateUrl : controller.templateUrl,
                controller : controller.controller
            }).otherwise({
                redirectTo : '/'
            });
            

            /*
             * Register route for URL that matches the controller's href and params properties.
             */
            app_controllers.forEach(function(controller) {
                var appUrl = controller.href;
                route = route.when(appUrl, {
                    // resolve : routeResolver,
                    templateUrl : controller.templateUrl,
                    controller : controller.controller
                });
            });
        };

       
        this.configAppCB = function(mainApp) {
            if (app_controllers) {
                // Register plugin app controllers
            	mainApp.routes = {};
                app_controllers.forEach(function(controller) {
                    console.log("CONFIGURE ROUTES: [" + controller.name + "]");
                    mainApp.routes[controller.name] = {
                        href : controller.href,
                        templateUrl : controller.templateUrl,
                        controller : controller.controller
                    };

                });
            }

        };

        
        var getCatalog = function(routeMap) {
            /*
             * The userApps array of User Applications is a hack, this will ultimately be attained from a service.
             */
        	//TODO, make accessLevel configurable
        	var accessLevel = 1;
            var userApps = [];

            app_controllers.forEach(function(controller) {

                userApps.push({
                    title : controller.title,
                    href : routeMap[controller.name].href,
                    params : routeMap[controller.name].params
                });

            });
            
            //build app catalog according to accessLevel
            function buildCatalog(appList, accessLevel) {
                var apps = [];
                for (var i = 0; i < appList.length; i++) {
                    var application = appList[i];
                    var app = new appModule.iCareApp(application.title, application.href, application.params, accessLevel);
                    console.log("     ICARE:   Building catalog [" + application.title + ", " + application.href + ", " + application.params + "]");
                    apps.push(app);
                }
                return apps;
            }

            var catalog = buildCatalog(userApps, accessLevel); //0: common user, 1: adv user
            return {
                'catalog' : catalog
            };
        };
        
        this.$get = function() {
            return {

                appMode : function() {
                    return appMode;
                },

                
                configTabsCB : function($scope, $rootScope, $location, $icare) {

                        // All "page" tabs in application
                        var tabs = [];                     
                        
                        for (var i = 0; i < app_controllers.length; i++) {

                            var ac = app_controllers[i];
                            
                            //decide if the tab should be added according to appMode of $icare and app accessLevel 
                            tabs.push({
                                link : '#' + ac.href,
                                label : ac.label,
                                pid : $icare[ac.pid]
                            });
                            console.log(tabs[i]);
                        }

                        $scope.tabs = tabs;
                        
                        // For now we have to attach the scope of the Tabs control to window in order
                        // to allow for other parts of the system to attach and detach elements from it.
                        $icare.scopeTabs = $scope;
                   // }
                        
                     // Handle changing the tab
                        $scope.tabClass = function(tab) {
                            if ("#" + $location.path() == tab.link) {
                                return "active";
                            }
                            return "";
                        };

                },

               
                configMainCtrlCB : function(mainApp, $scope, $rootScope, $routeParams, $location, $icare) {
                	mainApp.baseURL = $location.protocol() + "://" + $location.host() + ":" + $location.port();

                    var baseURL = mainApp.baseURL;
                    var session = $icare.session();
                    var ci = getCatalog(mainApp.routes);
                    session.initSession(baseURL, ci.catalog);

                    // Boot the system apps.
                    var appManager = $icare.system().AppManager();

                    // Obtain boot parameters...
                    
                    if (defaultAppTitle === undefined && app_controllers[0]) {
                        defaultAppTitle = app_controllers[0].name;                        
                    }

                    $icare.mainPid = appManager.launch(defaultAppTitle);
                    
                    //TODO, decide if the app should be launched according to appMode in $icare and app access level
                    app_controllers.forEach(function(controller) {
                    	if(controller.name !== defaultAppTitle)
                    		console.log("launch app:" + controller.name);
                    		$icare[controller.pid] = appManager.launch(controller.name);
                    });


                    // Set active app to the worklist, because launch will set the active app to the last app
                    // launched.
                    appManager.setActiveApp($icare.mainPid);

                    var runningApps = appManager.getRunningApps();
                    

                    $scope.iCareCtxt = {
                        params : $routeParams,
                        settings : {},

                        
                        getActiveApp : function() {
                            return appManager.getActiveApp();
                        },

                        
                        quit : function() {
                            console.log("Quitting the active application");
                            var pid = this.getActiveApp().getId();
                            var scopeTabs = $icare.scopeTabs;
                            $icare.stopApplication(pid);
                            scopeTabs.removeTab(pid);
                            this.updateTopPanel();
                        },

                        appMode : appMode,

                        activeAppAccsLevel : true,
                        
                        //TODO, start all Applications
                        startApplication : function(app) {
                            // Launch a new instance of the requested app.
                            var pid = $icare.startApplication(app);

                            var scopeTabs = $icare.scopeTabs;
                            var activeApp = this.getActiveApp();
                            var appTitle = activeApp.getAppDescriptor().getTitleId();

                            scopeTabs.tabs.push({
                                link : '#' + app.href,
                                label : app.title,
                                pid : pid,
                            });
                            this.updateTopPanel();
                        },

                       
                        updateTopPanel : function() {
                            this.activeAppAccsLevel = this.getActiveApp().getAppDescriptor().getAccessLevel();
                        },

                        
                        switchRunningApplication : function(pid) {
                            $icare.switchRunningApplication(pid);
                            this.updateTopPanel();
                        },

                        
                        navigateHome : function() {
                        	$icare.navigateHome();
                        },

                        
                        init : function() {
                            return console.log(this);
                        }
                    };
                    
                    $scope.iCareCtxt.switchRunningApplication($icare.mainPid);
                }
                    
                }
            };
    });
});
