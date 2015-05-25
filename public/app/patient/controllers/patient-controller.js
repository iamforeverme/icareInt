/* global define */

'use strict';

define([ 'angular','datatables','datatables-bootstrap'], function(ng) {
    ng.module('controllers').controller('patientController', [
        '$scope','$location',
        function($scope,$location){

                $('#patient_info_table').dataTable( {  
                    "ajax":  {
                    	"url": "/query/protege_inf",
                        "type": "GET"
                    },          
                    "columns": [
                        { "data": "age"},
                        { "data": "bedNum" },
                        { "data": "id"},
                        { "data": "mac"},
                        { "data": "monitoring_level"},
                        { "data": "name"},
                        { "data": "roomNum"}
                    ],
                    "language": {
        	        	"search": "查找",
        	        	"lengthMenu": "显示 _MENU_ 项结果",
        	        	"processing":     "处理中......",
        	        	"info":           "显示第 _START_ 到第 _END_项, 共 _TOTAL_项",
        	        	"infoEmpty":      "显示第 0 到第 0 条,共 0 条",
        	            "infoFiltered":   "(从 _MAX_ 项结果中筛选)",
        	            "infoPostFix":    "",
        	            "loadingRecords": "数据导入中......",
        	            "zeroRecords":    "当前无数据",
        	            "emptyTable":     "",
        	        	"paginate": {
        	                "first":      "第一页",
        	                "previous":   "上一页",
        	                "next":       "下一页",
        	                "last":       "最后一页"
        	        	}
        	        }
                } );
        }
    ]);
});


