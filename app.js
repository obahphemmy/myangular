(function() {
	"use strict";
	/**
	*  Module
	*
	* Description
	*/
	var app = angular.module('myFirstApp', []);
	app.controller('myController', function($scope){
		$scope.name = "Obafemi S. Bankole";
		$scope.people = [];
		$scope.savePerson = function() {
			$scope.people.push($scope.name);
			$scope.name = '';
		}
	});

	app.directive('alertable', function(){
		// Runs during compile
		return {
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			link: function($scope, iElm, iAttrs) {
				iElm.bind('click', function() {
					alert(iAttrs.alertable);
				});
			}
		};
	});
})();



