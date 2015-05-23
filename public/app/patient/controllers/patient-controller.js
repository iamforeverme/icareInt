/* global define */

'use strict';

define([ 'angular','datatables','datatables-bootstrap'], function(ng) {
    ng.module('controllers').controller('patientController', [
        '$scope',
        function($scope){
        	    $('#patient_info_table').dataTable( {        	    	
        	        "ajax": "/libs/datagrids.json",
        	        "columns": [
        	            { "data": "name"},
        	            { "data": "position" },
        	            { "data": "office"},
        	            { "data": "extn"},
        	            { "data": "start_date"},
        	            { "data": "salary"}
        	        ]
        	    } );
        }
    ]);
});


