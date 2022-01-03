(function (){
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', BuyController)
.controller('AlreadyBoughtController', BoughtController)
.service('ShoppingListCheckOffService', CheckOffService);

BuyController.$inject = ['ShoppingListCheckOffService'];
function BuyController(ShoppingListCheckOffService){
	var buy = this;

	//buy.itemName,buy.itemQuantity="";

	buy.items=ShoppingListCheckOffService.getShoppingList();

	buy.buyItem = function(itemIndex){
		ShoppingListCheckOffService.buyItem(itemIndex);
	};
}

BoughtController.$inject = ['ShoppingListCheckOffService'];
function BoughtController(ShoppingListCheckOffService){
	var bought = this;

	bought.items=ShoppingListCheckOffService.getBoughtItems();
}

function CheckOffService(){
	var service = this;

	var shoppingList = [
		{name: "table", quantity: "1"},
		{name: "chairs", quantity: "4"},
		{name: "drinks", quantity: "10"},
		{name: "snacks", quantity: "23"},
		{name: "cookies", quantity: "50"}
		];
	var boughtItems = [];

	service.getShoppingList = function(){
		return shoppingList;
	};

	service.getBoughtItems = function(){
		return boughtItems;
	};

	service.buyItem = function(itemIndex){
		//remove from shoppingList
		var item = shoppingList.splice(itemIndex,1)[0];
		
		//add to boughtItems
		boughtItems.push(item);

	};

}

})();