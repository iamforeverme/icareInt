/* global define */

'use strict';

define([ 'angular','datatables','datatables-bootstrap'], function(ng) {
    ng.module('controllers').controller('patientController', [
        '$scope','$location',
        function($scope,$location){
                $scope.data=null;
                var jsonObj;
                var xmlhttp = new XMLHttpRequest();
                var url = "/query/protege_inf";
                xmlhttp.open("GET", url,true);
                xmlhttp.onreadystatechange = function(e)
                {
                    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                        var result = xmlhttp.responseText;
                        jsonObj = JSON.parse(result);
                        $scope.data= jsonObj.data;
                        $scope.$apply();
                        console.log(jsonObj);
                    }
                    else{
                        console.log("http request error");
                    }
                }
                xmlhttp.send(null);
        	    /*$('#patient_info_table').dataTable( {        	    	
        	        "ajax": "/libs/datagrids.json",
        	        "columns": [
        	            { "data": "name"},
        	            { "data": "position" },
        	            { "data": "office"},
        	            { "data": "extn"},
        	            { "data": "start_date"},
        	            { "data": "salary"}
        	        ]
        	    } );*/
                $('#patient_info_table').dataTable( {  
                    "ajax":  $scope.data,              
                    "columns": [
                        { "data": "age"},
                        { "data": "bedNum" },
                        { "data": "id"},
                        { "data": "mac"},
                        { "data": "monitoring_level"},
                        { "data": "name"},
                        { "data": "roomNum"}
                    ]
                } );
        }
    ]);
});


