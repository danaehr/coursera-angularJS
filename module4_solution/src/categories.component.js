(function () {

angular.module('MenuApp')
.component('categories',{
	templateUrl: 'src/html/template.categoriesList.html',
	controller: categoriesComponentController,
	controllerAs: 'catCtrl',
	bindings:{
		categoriesData: '<categoriesInput'
	}
});

function categoriesComponentController(){
	var catCtrl = this;
};

})();
