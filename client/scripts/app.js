//'use strict';
angular.module('cfApp', ['ngRoute', 'ngResource','ngDialog'])
.config(function($routeProvider){
       $routeProvider .when('/',{
                            templateUrl: 'views/main.html',
                             controller: 'FileCtrl'
                           
                           })
//                     .when('/find',{
//                            templateUrl: 'views/find.html'
//                           })
                     .when('/add',{
                            templateUrl: 'views/addchurchdetails.html',
                             controller: 'chdetCtrl'
                          })
                     .when('/search',{
                           templateUrl : 'views/chlist.html',
                            controller : 'newCtrl'
                          })
                     .when('/directory',{
                            templateUrl  :  'views/directory.html'
                            })
                      .when('/event',{
						  resolve:{
							  "check": function($location, $rootScope){
								  if(!$rootScope.usrflag ){
									  $location.path('/usrlog');
								  }
							  }
						  },templateUrl: 'views/addevent.html'
                         })
                        .when('/church',{
                             templateUrl : 'views/churchpage.html'
                             })
                          
                        .when('/addadvert', {
                          resolve:{
							  "check": function($location, $rootScope){
								  if(!$rootScope.usrflag ){
									  $location.path('/usrlog');
								  }
							  }
						  },templateUrl: 'views/advertadd.html'
                        })
                        .when('/usrlog', {
							resolve:{
								"check": function($location, $rootScope){
									if(!$rootScope.usrflag){
										$location.path('/usrlog');										
									}
								}
							},templateUrl: 'views/usrlogin.html'
                        })
                       .when('/free',{
						   resolve:{
							   "check":function($location, $rootScope){
							   if( !$rootScope.usrflag ){
								   $location.path('/usrlog');
							   }							 
							 }
						   },templateUrl: 'views/chlistfree.html'
                        })						
                       .when('/admset',{
                        resolve:{
                          "check":function($location, $rootScope){
                            if(!$rootScope.usrflag){
                              $location.path('/usrlog');
                            }
                          }
                        }, templateUrl:'views/adminset.html'
                       })
                     .otherwise({
                          redirectTo:'/contactus'
                         });
    
    });