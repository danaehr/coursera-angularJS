(function () {

angular.module('MenuApp')
.component('items',{
	templateUrl: 'src/html/template.itemsList.html',
	controller: itemsComponentController,
	controllerAs: 'itemsCtrl',
	bindings:{
		items: '<itemsList'
	}
});

function itemsComponentController(){
	var itemsCtrl = this;
};

})();
