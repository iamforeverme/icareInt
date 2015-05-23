define([ "jquery", 'AppContext' ], function($, acxt) {
    function AppManager(system, catalog) {
        var icare_system = system;
        var id_ctr = 1001;
        var _catalog = catalog;
        var processMap = new Object();

        // the current application being viewed
        var activeApp = null;

        function getApp(title) {
            var i = 0;
            for (i = 0; i < _catalog.length; i++) {
                var app = _catalog[i];
                if (app.getTitle() == title || app.getTitleId() == title) {
                    return app;
                }
            }
            return undefined;
        }

        /** Launch the named application in the app catalog */
        this.launch = function(appName, pid) {            
            var icareApp = getApp(appName);

            // Launch the app giving it the unique id and arguments.
            var launchPid = pid;
            if (!launchPid) {
            	    launchPid = id_ctr++;
            }
            var appCtxt = new acxt.AppContext(icareApp, launchPid);

            appCtxt.setSystem(icare_system);
            var appId = appCtxt.getId();
            processMap[appId] = appCtxt;

            // set the active application
            activeApp = appCtxt;

            // Call the initialize application hook.
            appCtxt.initApp();

            // Return the unique id of the launched app
            return appId;
        };

        // Returns the app with the lowest numbered pid.
        var getLowestApp = function() {
            var keys = Object.keys(processMap);
            var pid = keys[0];

            for (idx = 1; idx < keys.length; idx++) {
                if (pid > keys[idx]) {
                    pid = keys[idx];
                }
            }
            return processMap[pid];
        };

        /** Destroy the app denoted by the given process identifier (pid) */
        this.destroy = function(pid) {
            if (processMap[pid]) {
                if (processMap[pid] == activeApp) {
                    // go to the lowest registered pid
                    activeApp = getLowestApp();
                }
                if (processMap[pid].closeApp) {
                	processMap[pid].closeApp();
                }
                delete processMap[pid];
            }
        }

        /** Returns the list of runnable user applications. These are instances of OpsisApplication objects */
        this.getCatalog = function() {
            return _catalog;
        }

        /** Returns the active application context */
        this.getActiveApp = function() {
            return activeApp;
        }

        /** Sets the active application context to be the app denoted by the pid */
        this.setActiveApp = function(pid) {
            if (processMap[pid]) {
                activeApp = processMap[pid];
                return true;
            }
            return false;
        }

        /** Close the specified application instance */
        this.close = function(pid) {
            // Delete the associated application context.
            delete processMap[pid];
        };

        /** Returns the app context instance of this app-Id */
        this.getAppContext = function(pid) {
            return processMap[pid];
        };

        /** Returns the array of current running applications */
        this.getRunningApps = function() {
            var apps = [];
            var keys = Object.keys(processMap);

            for (idx = 0; idx < keys.length; idx++) {
            	    var pid = keys[idx];
                var appDescriptor = processMap[pid].getAppDescriptor();
                apps.push({
                    title : appDescriptor.getTitle(),
                    accessLevel : appDescriptor.getAccessLevel(),
                    href : appDescriptor.getHref(),
                    pid : pid
                });
            }

            return apps;
        }
    }

    return {
        'AppManager' : AppManager
    };
});
