(function() {
	/**
	* WordCounter Module
	*
	* Description
	*/
	angular.module('WordCounter', []).
	controller('CounterController',  CounterController);

	CounterController.$inject("$scope", "$filter");
	function CounterController($scope, $filter){
		$scope.projectName = "Simple Word Counter App Using Angular";
		$scope.message = "";
		$scope.bgcolor = "";
		let upper = $filter("uppercase");
		$scope.numWords = upper("You may start typing in the space provided above...");
		$scope.countWords = function() {
			//let message = $scope.message;
			//Sanitize message;
			let message = formatMsg($scope.message);
			//Count number of words in formatted message
			let numWords = message.length;

			if (numWords > 50) {
				//alert("You have exceeded the maximum of words allowed!");
				$scope.numWords = "You have exceeded the maximum of words allowed!";
				$scope.bgcolor = "crimson";
			} else {
				numWords = 50 - numWords;
				if (numWords == 0) {
					$scope.numWords = "Last word used!";
				} else {
				$scope.numWords = numWords + " word(s) remaining!";
				$scope.bgcolor = "#000";
			}
			};

		};
	}

	function formatMsg(msg) {
			msg = msg.replace(/\s+/g, ' ');
			let formattedMsg = msg.split(' ');
			return formattedMsg;
		}

})();