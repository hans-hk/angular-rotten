"use strict";angular.module("devStudyAngularMissionApp",[]).config(["$routeProvider",function(a){a.when("/movies",{templateUrl:"views/partials/movies_lists.html",controller:"MoviesListsController"}).when("/movies/:id",{templateUrl:"views/partials/movie_detail.html",controller:"MoiveDetailController"}).when("/ ",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/movies"})}]),angular.module("devStudyAngularMissionApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=[{key:"HTML5 Boilerplate"},{key:"AngularJS"},{key:"Karma"}],console.log(a.awesomeThings)}]),angular.module("devStudyAngularMissionApp").factory("RottenAPI",function(){var a="vzjnwecqq7av3mauck2238uj",b="http://api.rottentomatoes.com/api/public/v1.0/lists/",c={apikey:a,callback:"JSON_CALLBACK"},d=function(a){a=angular.extend(a,c);var b=[];return angular.forEach(a,function(a,c){b.push(c+"="+a)}),b};return{listMovies:function(a,c){return c=angular.extend({limit:10,country:"us"},c||{}),console.log(c),b+"movies/"+a+".json?"+d(c).join("&")},listUpcoming:function(a,c){return c=angular.extend({limit:10,country:"us"},c||{}),console.log(c),b+"movies/"+a+".json?"+d(c).join("&")}}}),angular.module("devStudyAngularMissionApp").controller("MoviesListsController",["$scope","$http","RottenAPI",function(a,b,c){b.jsonp(c.listMovies("in_theaters",{limit:30})).success(function(b){console.log(b.movies),a.movies=b.movies}),b.jsonp(c.listMovies("upcoming",{limit:30})).success(function(b){console.log(b.movies),a.upcomings=b.movies})}]);