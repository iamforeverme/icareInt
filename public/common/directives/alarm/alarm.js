/* Alarm thumbnail */

'use strict';
/*
 * define require js module
 */
define([ 'angular' ], function(angular) {

	angular.module('directives').directive('alarm', function() {
		 return {
             restrict : 'A',
             scope : {
                 patientName : '@',
                 alarmType : '@',
                 position : '@',
                 nurseName : '@',
                 trigerTime : '@'
             },
             templateUrl : '/common/directives/alarm/alarm.html',
             controller: function($scope){
            	 
             },
             link : function($scope){
            	 $scope.patientName ='张大爷';
            	 $scope.alarmType ='离床';
            	 $scope.position = '2-1';
            	 $scope.nurseName ='小李';
             }
         };
	});
});