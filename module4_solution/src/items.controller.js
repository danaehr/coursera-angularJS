(function () {

angular.module('MenuApp')
.controller('itemsController',itemsControllerFct);

itemsControllerFct.$inject = ['itemsForCategory']; 
function itemsControllerFct(itemsForCategory){
	var itemsCon = this;
//	console.log("data in itemsController: ",itemsForCategory);
	itemsCon.items = itemsForCategory.menu_items;
	console.log("items in itemsController: ",itemsCon.items);
	itemsCon.category = itemsForCategory.category;	
}

})();