/* global define */

'use strict';

define([ 'angular'], function(ng) {
    ng.module('controllers').controller('tableController', [
        '$scope',
        function($scope){
        	    $scope.name="姓名";
        }
    ]);
});

