angular.module('myApp', ['ui.router','UserConfig'])
	.config(function ($locationProvider) {
	  $locationProvider.html5Mode({
	    enabled: true, 
	    requireBase: false
	  });
	})
	.config(function ($urlRouterProvider) {
	  $urlRouterProvider
	  .when('/index','/views/index')
	  .otherwise('/views/index');
	})