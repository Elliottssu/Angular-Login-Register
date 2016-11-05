angular.module('myApp', ['ui.router'])
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

	.controller('loginCtrl',function($scope,$http,$stateParams,$timeout,$state) {
	    $scope.login = {}; //定义用户名和密码的对象
	    $scope.resp = {};  //定义请求结果对象
	    $scope.checkLogin=function(){
	    	if(!$scope.login.account){
	    		$scope.resp.msg = "请输入用户名";
	    		console.log($scope.resp.msg)
	    		return false;
	    	}
	    	if(!$scope.login.password){
	    		$scope.resp.msg = "请输入密码";
	    		return false;
	    	}
	    	//因为这里是模拟数据，所以直接拿到请求结果，根据结果与input值匹配
	    	$http.get('/json/user.json').success(function(data){ 
	    		if(data.data.account==$scope.login.account && data.data.password==$scope.login.password){
	    			$scope.resp.status = "1";
	    			$scope.resp.msg="登陆成功,正在跳转···";
	    		}else{
	    			$scope.resp.msg="登陆失败";
	    			$scope.resp.status = "0";
	    		}
	    	})
	    }
	})
	.controller('registerCtrl',function($scope) {
		$scope.account="demo-register"
	})