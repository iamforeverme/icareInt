require.config({

    paths : {
    }
});


define([ "angular", "services", "./controllers/main" ], function(ng) {
    ng.module('services').config([ '$appConfigProvider', function($appConfigProvider) {
        $appConfigProvider.addAppModuleConfigCb("Patient", function() {
            $appConfigProvider.addAppControllerConfig({
                title :'patient',
                name : "patient",
                label : "被监护者管理",
                templateUrl : "/app/patient/views/patient.html",
                controller : "patientController",
                href : "/patient"
            }, 1)
        });
    } ]);
});