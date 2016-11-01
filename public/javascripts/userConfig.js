angular.module('UserConfig',['UserCtrlModule'])
	.config(function($stateProvider, $urlRouterProvider) {
	    $stateProvider
	    .state('login',{
	      title : '登陆',
	      url:'/login',
	      templateUrl:'views/login.html',
	      controller:'loginCtrl'
	    })
	    .state('register',{
	      title : '注册',
	      url:'/register',
	      templateUrl:'views/register.html',
	      controller:'registerCtrl'
	    })
	});