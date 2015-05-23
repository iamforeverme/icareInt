/* global requirejs, define */
'use strict';
/**
 * This file sets up the basic module libraries you'll need for your application.
 * This is the entry of requireJs
 */
requirejs.onError = function(err) {
    // console.log(err.requireType);
    if (err.requireType === 'timeout') {
        // console.error('modules: ' + err.requireModules);
    }
    throw err;
};



/**
 * RequireJS Config This is configuration for the entire application.
 */
require.config({
    enforceDefine : false,
    xhtml : false,
    // urlArgs : '_=' + Date.now(),
    waitSeconds : 15,
    packages : ["controllers","directives", "services"],
    paths : {
        // NAMED REFERENCES
        config : 'config',      

        // Bootstrap
        bootstrap :'../bower_components/bootstrap/dist/js/bootstrap',
        datatables: '../bower_components/datatables/media/js/jquery.dataTables',
        //'datatables-bootstrap': '/bower_components/datatables-bootstrap3-plugin/media/js/datatables-bootstrap3',
        'datatables-bootstrap': '/libs/datatables-plugin-bootstrap/dataTables.bootstrap',
        jquery : '../bower_components/jquery/dist/jquery',
        requirejs : '../bower_components/requirejs/require',
        

        // angularjs + modules
        angular : '../bower_components/angular/angular',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min',
        'angular-route' : '../bower_components/angular-route/angular-route.min'
        //'angular-mobile': '../bower_components/mobile-angular-ui/dist/js/mobile-angular-ui'
        	
       

    },
    
    priority : [ "angular" ],
    shim : {
        angular : {
            deps : [ 'jquery' ],
            exports : 'angular'
        },
        bootstrap : {
            deps : [ 'jquery' ],
            exports : '$.fn.modal'
        },
        datatables: {
        	deps: ['jquery'],
        	exports : 'datatables'
        },
        'datatables-bootstrap': {
        	deps:['bootstrap','datatables'],
        	exports : 'datatables-bootstrap'
        }
    },
    config : {
        
    }
});

//Load the first app module and start app
require(["../common/app-config.js"], function(icare){
   icare.startApp(); 
});


