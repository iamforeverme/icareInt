require.config({

    paths : {
    }
});


define([ "angular", "services", "./controllers/main" ], function(ng) {
    ng.module('services').config([ '$appConfigProvider', function($appConfigProvider) {
        $appConfigProvider.addAppModuleConfigCb("Monitor", function() {
            $appConfigProvider.addAppControllerConfig({
                title :'monitor',
                name : "monitor",
                label : "实时监护",
                templateUrl : "/app/monitor/views/monitor.html",
                controller : "monitorController",
                href : "/monitor",
                pid:"mainPid"
            }, 0)
        });
    } ]);
});