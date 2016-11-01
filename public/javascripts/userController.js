angular.module('UserCtrlModule',[])
	.controller('loginCtrl',function($scope) {
		$scope.account="demo-login"
	})
	.controller('registerCtrl',function($scope) {
		$scope.account="demo-register"
	})