(function () {

angular.module('MenuApp')
.controller('categoriesController',categoriesControllerFct);

categoriesControllerFct.$inject = ['allCategories']; 
function categoriesControllerFct(allCategories){
	var catCon = this;
	
	//catCon.message="just for testing";

	//catCon.categories = [{name: "name1", short_name: "n1"},{name: "name2", short_name: "n2"}];
	catCon.categories = allCategories;
	
}

})();