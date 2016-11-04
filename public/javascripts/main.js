angular.module('myApp', ['ui.router'])
	.config(function ($locationProvider,$urlRouterProvider,$stateProvider) {
	  $locationProvider
	  .html5Mode({
	    enabled: true, 
	    requireBase: false
	  });

	  $urlRouterProvider
	  .when('/login','/login')
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

	.controller('loginCtrl',function($scope,$http,$stateParams,$timeout,$state) {
	    $scope.login = {}; //定义用户名和密码的对象
	    $scope.resp = {};  //定义请求结果对象
	    $scope.checkLogin=function(){
	    	if(!$scope.login.account){
	    		$scope.resp.msg = "请输入用户名";
	    		return false;
	    	}
	    	if(!$scope.login.password){
	    		$scope.resp.msg = "请输入密码";
	    		return false;
	    	}
	    	// $http.get('/json/user.json',{'account':$scope.login.account,'password':$scope.login.password})
	    	//   .success(function(result){
	    	//   	console.log(result)
	    	//   	if(result.code==1){
	    	//   		$scope.resp.status = result.code;
	    	//   		$scope.resp.msg = "登陆成功，正在跳转...";
	    	//   		$timeout(function(){
						// // $state.go('app.index');
	     //                console.log("登陆成功，正在跳转...");
	    	//   		},1000)
	    	//   	}else{
	    	//   		$scope.resp.msg = "用户名或密码错误";
	    	//   	}
	    	// })
	    }
	})
	.controller('registerCtrl',function($scope) {
		$scope.account="demo-register"
	})