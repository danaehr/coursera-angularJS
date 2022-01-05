(function (){
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownControllerFct)
.service('MenuSearchService', MenuSearchServiceFct)
.constant('ApiBasePath',"https://davids-restaurant.herokuapp.com")
.directive('foundItems',foundItemsFct);


NarrowItDownControllerFct.$inject = ['MenuSearchService'];
function NarrowItDownControllerFct(MenuSearchService){
	var nid = this;

	nid.searchTerm="";
	nid.found=[];
	nid.nothingFound = false;

	nid.getMatchedMenuItems=function(){
		if(nid.searchTerm != ""){
			MenuSearchService.getMatchedMenuItems(nid.searchTerm).then(
			function(result){
				nid.found=result;
				if(nid.found.length > 0){
					nid.nothingFound = false;
				}
				else{
					nid.nothingFound = true;
				}
			});
		}
		else{
			nid.found = [];
			nid.nothingFound = true;
		}
		
	};

	nid.removeItem=function(itemIndex){
		//var objectRemoved = 
    	nid.found.splice(itemIndex,1);
    	//console.log("removed item: ");
    	//console.log(objectRemoved);
	};
}

MenuSearchServiceFct.$inject = ['$q','$http','ApiBasePath'];
function MenuSearchServiceFct($q,$http,ApiBasePath){

	var service = this;

	service.getMatchedMenuItems=function(searchTerm){	
		var deferred = $q.defer();
		var result = [];

		$http(
			{
				method: "GET",
				url:(ApiBasePath + "/menu_items.json"),
			}
			).then( 
				function(result){
					var foundItems = [];
					var allItems = result.data.menu_items;

					for(var i = 0; i < allItems.length; i++){
						if(allItems[i].description.toLowerCase().indexOf(searchTerm.toLowerCase())>=0){
							foundItems.push(allItems[i]);
						}
					}
					deferred.resolve(foundItems);

				}
			).catch(
				function(error){
					deferred.reject(error);
				}
			);

			return deferred.promise;
	};

}

function foundItemsFct(){
	var ddo = {
		templateUrl: 'templFoundItems.html',
		scope: {
			listFoundItems: '<',
			showNothingFoundHint: '<' ,
			onRemove: '&'
		},
		controller: foundItemsDirectiveController,
		controllerAs: 'fidc',
		bindToController: true
	};

	return ddo;
}

function foundItemsDirectiveController(){
	var fidc = this;

	fidc.nothingFoundCheck = function(){
		if(fidc.listFoundItems.length == 0){
			return true;
		}
		else{
			return false;
		}
	};
}

})();