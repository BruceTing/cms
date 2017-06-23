var cms = angular.module('cms',['ngRoute']);
cms.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	/*mydesktop management*/
	$routeProvider
    .when('/', {
    	templateUrl: '/cms/views/templates/desktop/myDesktop.html'
    })
    .when('/willHandleWorkorder', {
    	templateUrl: '/cms/views/templates/desktop/willHandleWorkorder.html'
    })
    .when('/willAuditWorkorder', {
    	templateUrl: '/cms/views/templates/desktop/willAuditWorkorder.html'
    })
    .when('/willTurnWorkorder', {
    	templateUrl: '/cms/views/templates/desktop/willTurnWorkorder.html'
    })
    .when('/willResponseWorkorder', {
    	templateUrl: '/cms/views/templates/desktop/willResponseWorkorder.html'
    })
    .when('/willPunishWorkorder', {
    	templateUrl: '/cms/views/templates/desktop/willPunishWorkorder.html'
    })
    .when('/willRewardWorkorder', {
    	templateUrl: '/cms/views/templates/desktop/willRewardWorkorder.html'
    })
    
    /*workorder management*/
    .when('/createWorkorder', {
    	templateUrl: '/cms/views/templates/workorder/createWorkorder.html'
    })
    .when('/workorderMaintenance', {
    	templateUrl: '/cms/views/templates/workorder/workorderMaintenance.html'
    })
    .when('/workorderAlert', {
    	templateUrl: '/cms/views/templates/workorder/workorderAlert.html'
    })
    .when('/queryWorkorder', {
    	templateUrl: '/cms/views/templates/workorder/queryWorkorder.html'
    })
   
    /*reports management*/
    .when('/reportWorkorder', {
    	templateUrl: '/cms/views/templates/reports/reportWorkorder.html'
    })
    .when('/reportCategory', {
    	templateUrl: '/cms/views/templates/reports/reportCategory.html'
    })
    .when('/reportDetail', {
    	templateUrl: '/cms/views/templates/reports/reportDetail.html'
    })
    
    /*roles management*/
    .when('/permission', {
    	templateUrl: '/cms/views/templates/permission/permission.html'
    })
    .when('/assignRoles', {
    	templateUrl: '/cms/views/templates/permission/assignRoles.html'
    })
    .when('/assignPermission', {
    	templateUrl: '/cms/views/templates/permission/assignPermission.html'
    })	    
    
    /*attachment management*/
    .when('/file', {
    	templateUrl: '/cms/views/templates/attachment/attachment.html'
    })
    
    /*settings management*/
    .when('/password', {
    	templateUrl: '/cms/views/templates/settings/password.html'
    })
    
    .otherwise({redirectTo:'/'});
    
    $locationProvider.html5Mode(true);
}]);
	
