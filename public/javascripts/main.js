angular.module('myApp', ['ui.router'])
	// .config(function ($locationProvider) {

	// })
	.config(function ($locationProvider,$urlRouterProvider,$stateProvider) {
	  $locationProvider
	  .html5Mode({
	    enabled: true, 
	    requireBase: false
	  });

	  $urlRouterProvider
	  .when('/','/login')
	  .otherwise('/login')

	  $stateProvider
	  .state('login',{
	    url:'/login',
	    templateUrl:'views/login.html',
	    controller:'loginCtrl'
	  })
	  .state('register',{
	    url:'/register',
	    templateUrl:'views/register.html',
	    controller:'registerCtrl'
	  })


	})

	.controller('loginCtrl',function($scope) {
		$scope.account="demo-login"
	})
	.controller('registerCtrl',function($scope) {
		$scope.account="demo-register"
	})