(function (){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LC_Controller);

LC_Controller.$inject = ['$scope'];
function LC_Controller($scope){
	$scope.message="";

	$scope.checkLunch = function(){
		
		if($scope.inputString !== undefined && $scope.inputString !== ""){
			var list = $scope.inputString.split(",");
			var counter = list.length || 0;

			if(counter	<= 3){
				$scope.message	= "Enjoy!";	
			} 
			else if(counter	> 3){
				$scope.message	= "Too much!";
			}	
		}		
		else{
			$scope.message	= "Please enter data first!";
		}
		
	}
}

})();